import { RadioGroup, RadioGroupOption } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const plans = [
  {
    name: 'Startup',
    price: '$12',
    description: 'Perfect for small teams and startups',
  },
  {
    name: 'Business',
    price: '$24',
    description: 'For growing businesses and teams',
  },
  {
    name: 'Enterprise',
    price: '$48',
    description: 'Advanced features for large organizations',
  },
];

export function RadioGroupDemo() {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold text-foreground">Radio Group</h3>
        <p className="text-muted-foreground mt-1">Card-style radio button selection</p>
      </div>

      <RadioGroup value={selected} onChange={setSelected}>
        <div className="space-y-3">
          {plans.map((plan) => (
            <RadioGroupOption
              key={plan.name}
              value={plan}
              className={({ checked }) =>
                `${
                  checked
                    ? 'bg-gradient-to-r from-[hsl(250,70%,62%)] to-[hsl(280,60%,55%)] text-white border-transparent'
                    : 'bg-card border-border hover:border-primary'
                } relative flex cursor-pointer rounded-lg px-5 py-4 border-2 transition-all duration-200 shadow-sm hover:shadow-md`
              }
            >
              {({ checked }) => (
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-sm">
                      <RadioGroup.Label
                        as="p"
                        className={`font-semibold ${checked ? 'text-white' : 'text-foreground'}`}
                      >
                        {plan.name}
                      </RadioGroup.Label>
                      <RadioGroup.Description
                        as="span"
                        className={`inline ${checked ? 'text-white/90' : 'text-muted-foreground'}`}
                      >
                        <span>{plan.description}</span>
                      </RadioGroup.Description>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`text-lg font-bold ${checked ? 'text-white' : 'text-foreground'}`}>
                      {plan.price}
                    </div>
                    {checked && (
                      <CheckCircleIcon className="h-6 w-6 text-white" />
                    )}
                  </div>
                </div>
              )}
            </RadioGroupOption>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
