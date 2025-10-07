import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.',
  },
  {
    question: 'How does the free trial work?',
    answer: 'Our 14-day free trial gives you full access to all features. No credit card required to start.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. No questions asked, no penalties.',
  },
];

export function DisclosureDemo() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold text-foreground">Disclosure</h3>
        <p className="text-muted-foreground mt-1">Accordion with smooth expand/collapse</p>
      </div>

      <div className="space-y-2">
        {faqs.map((faq, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
                <DisclosureButton className="flex w-full justify-between items-center px-5 py-4 text-left text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                  <span>{faq.question}</span>
                  <ChevronDownIcon
                    className={`${
                      open ? 'rotate-180' : ''
                    } h-5 w-5 text-muted-foreground transition-transform duration-300`}
                  />
                </DisclosureButton>
                <Transition
                  enter="transition duration-200 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-150 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <DisclosurePanel className="px-5 pb-4 pt-2 text-sm text-muted-foreground border-t border-border">
                    {faq.answer}
                  </DisclosurePanel>
                </Transition>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
