'use client'

import { useState } from 'react'

interface Tab {
  id: string
  label: string
  subtitle?: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
}

export default function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content

  return (
    <div>
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-1" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-6 py-3 text-sm font-medium rounded-t-lg transition-colors flex flex-col items-center
                ${
                  activeTab === tab.id
                    ? 'bg-deep-water-blue text-white border-b-2 border-deep-water-blue'
                    : 'text-gray-700 hover:text-deep-water-blue hover:bg-gray-50'
                }
              `}
            >
              <span>{tab.label}</span>
              {tab.subtitle && (
                <span className={`text-xs mt-0.5 ${
                  activeTab === tab.id ? 'text-white/90' : 'text-gray-500'
                }`}>
                  {tab.subtitle}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
      <div className="min-h-[400px]">
        {activeTabContent}
      </div>
    </div>
  )
}
