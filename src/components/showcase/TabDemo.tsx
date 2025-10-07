import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

export function TabDemo() {
  const categories = [
    {
      name: 'Recent',
      content: 'View your most recent activity and updates here. Stay up to date with the latest changes.',
    },
    {
      name: 'Popular',
      content: 'Discover the most popular items and trending content in your workspace.',
    },
    {
      name: 'Trending',
      content: 'See what\'s trending now and catch up with the hottest topics of the moment.',
    },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold text-foreground">Tabs</h3>
        <p className="text-muted-foreground mt-1">Tabbed interface with smooth transitions</p>
      </div>

      <TabGroup>
        <TabList className="flex gap-2 p-1 bg-secondary rounded-lg">
          {categories.map((category) => (
            <Tab
              key={category.name}
              className={({ selected }) =>
                `flex-1 py-2.5 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
                  selected
                    ? 'bg-card text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`
              }
            >
              {category.name}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-4">
          {categories.map((category) => (
            <TabPanel
              key={category.name}
              className="bg-card rounded-lg p-6 shadow-sm border border-border animate-fade-in"
            >
              <p className="text-foreground leading-relaxed">{category.content}</p>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
