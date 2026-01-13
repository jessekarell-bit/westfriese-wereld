'use client'

import { useState, useEffect } from 'react'
import { ThemeTab } from '@/src/types/theme'

interface ThemeTabsProps {
  tabs: ThemeTab[]
  defaultTab?: string
  activeColor?: string
  activeBorderColor?: string
  onTabChange?: (tabId: string) => void
}

export function ThemeTabs({ 
  tabs, 
  defaultTab, 
  activeColor = 'bg-deep-water-blue',
  activeBorderColor,
  onTabChange 
}: ThemeTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)
  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content

  // Use activeBorderColor if provided, otherwise derive from activeColor
  const borderColor = activeBorderColor || activeColor.replace('bg-', 'border-')

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    onTabChange?.(tabId)
  }

  return (
    <div className="w-full overflow-hidden">
      <div className="border-b border-gray-200 mb-6 overflow-x-auto overflow-y-hidden -mx-2 sm:mx-0 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
        <nav className="flex space-x-1 px-2 sm:px-0" aria-label="Tabs" style={{ width: 'max-content' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={(e) => {
                e.preventDefault()
                handleTabChange(tab.id)
              }}
              className={`
                px-2.5 sm:px-6 py-2 sm:py-3 text-[11px] sm:text-sm font-medium rounded-t-lg transition-colors flex flex-col items-center whitespace-nowrap flex-shrink-0
                ${
                  activeTab === tab.id
                    ? `${activeColor} text-white border-b-2 ${borderColor}`
                    : 'text-gray-700 hover:text-deep-water-blue hover:bg-gray-50'
                }
              `}
            >
              <span className="leading-tight">{tab.label}</span>
              {tab.subtitle && (
                <span className={`text-[9px] sm:text-xs mt-0.5 leading-tight ${
                  activeTab === tab.id ? 'text-white/90' : 'text-gray-500'
                }`}>
                  {tab.subtitle}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
      <div className="min-h-[300px] sm:min-h-[400px]">
        {activeTabContent}
      </div>
    </div>
  )
}
