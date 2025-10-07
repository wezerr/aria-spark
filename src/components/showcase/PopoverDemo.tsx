import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { ChevronDownIcon, ShieldCheckIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

const features = [
  {
    name: 'Advanced Security',
    description: 'Enterprise-grade security with 256-bit encryption',
    icon: ShieldCheckIcon,
  },
  {
    name: 'AI-Powered',
    description: 'Intelligent automation powered by machine learning',
    icon: SparklesIcon,
  },
  {
    name: 'Team Collaboration',
    description: 'Real-time collaboration tools for your team',
    icon: UserGroupIcon,
  },
];

export function PopoverDemo() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold text-foreground">Popover</h3>
        <p className="text-muted-foreground mt-1">Floating panel with rich content</p>
      </div>

      <Popover className="relative">
        <PopoverButton className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[hsl(250,70%,62%)] to-[hsl(280,60%,55%)] text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200">
          Features
          <ChevronDownIcon className="h-4 w-4" />
        </PopoverButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel className="absolute z-50 mt-3 w-screen max-w-sm">
            <div className="overflow-hidden rounded-lg shadow-xl border border-border bg-card">
              <div className="p-4 space-y-3">
                {features.map((feature) => (
                  <button
                    key={feature.name}
                    className="flex items-start gap-4 w-full rounded-lg p-3 hover:bg-secondary transition-colors text-left"
                  >
                    <feature.icon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{feature.name}</p>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </button>
                ))}
              </div>
              <div className="bg-secondary p-4">
                <button className="w-full text-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  See all features →
                </button>
              </div>
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  );
}
