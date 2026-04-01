export default function TabBar({ tabs, activeTab, onTabChange }) {
  return (
    <div className="bg-sand">
      <div className="mx-auto flex max-w-4xl gap-2 overflow-x-auto px-4 pt-3 sm:px-6 lg:px-8">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={[
                'rounded-t-lg px-4 py-2 text-sm font-semibold transition-colors md:text-base',
                isActive
                  ? 'bg-navy text-cream'
                  : 'text-muted hover:text-teal',
              ].join(' ')}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
