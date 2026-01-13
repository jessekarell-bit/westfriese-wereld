'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
  value: string
  children: React.ReactNode
}

interface AccordionProps {
  type?: 'single' | 'multiple'
  defaultValue?: string | string[]
  children: React.ReactNode
  className?: string
}

const AccordionContext = React.createContext<{
  value: string | string[]
  onValueChange: (value: string) => void
  type: 'single' | 'multiple'
}>({
  value: [],
  onValueChange: () => {},
  type: 'single',
})

export function Accordion({ type = 'single', defaultValue, children, className }: AccordionProps) {
  const [value, setValue] = React.useState<string | string[]>(
    defaultValue || (type === 'multiple' ? [] : '')
  )

  const onValueChange = React.useCallback((itemValue: string) => {
    if (type === 'single') {
      setValue((prev) => (prev === itemValue ? '' : itemValue))
    } else {
      setValue((prev) => {
        const prevArray = Array.isArray(prev) ? prev : []
        return prevArray.includes(itemValue)
          ? prevArray.filter((v) => v !== itemValue)
          : [...prevArray, itemValue]
      })
    }
  }, [type])

  return (
    <AccordionContext.Provider value={{ value, onValueChange, type }}>
      <div className={cn('space-y-2', className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({ value, children }: AccordionItemProps) {
  const { value: contextValue, onValueChange, type } = React.useContext(AccordionContext)
  const isOpen = type === 'single'
    ? contextValue === value
    : Array.isArray(contextValue) && contextValue.includes(value)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            value,
            isOpen,
            onToggle: () => onValueChange(value),
          } as any)
        }
        return child
      })}
    </div>
  )
}

export function AccordionTrigger({
  children,
  value,
  isOpen,
  onToggle,
  className,
}: {
  children: React.ReactNode
  value?: string
  isOpen?: boolean
  onToggle?: () => void
  className?: string
}) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        'flex w-full items-center justify-between p-4 text-left font-semibold transition-colors',
        className
      )}
    >
      <span>{children}</span>
      <ChevronDown
        className={cn('h-5 w-5 text-gray-500 transition-transform flex-shrink-0', isOpen && 'rotate-180')}
      />
    </button>
  )
}

export function AccordionContent({
  children,
  isOpen,
  className,
}: {
  children: React.ReactNode
  isOpen?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-300',
        isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0',
        className
      )}
    >
      <div className="p-4 pt-0">{children}</div>
    </div>
  )
}
