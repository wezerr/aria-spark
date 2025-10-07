import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
];

export function ListboxDemo() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold text-foreground">Listbox</h3>
        <p className="text-muted-foreground mt-1">Custom select dropdown</p>
      </div>

      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <ListboxButton className="relative w-full cursor-pointer rounded-lg bg-card py-3 pl-4 pr-10 text-left border-2 border-border hover:border-primary transition-all duration-200 shadow-sm">
            <span className="block truncate text-foreground font-medium">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronUpDownIcon className="h-5 w-5 text-muted-foreground" />
            </span>
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-lg bg-card py-1 shadow-xl border border-border">
              {people.map((person) => (
                <ListboxOption
                  key={person.id}
                  value={person}
                  className={({ focus }) =>
                    `relative cursor-pointer select-none py-2.5 pl-10 pr-4 ${
                      focus ? 'bg-secondary' : ''
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'} text-foreground`}>
                        {person.name}
                      </span>
                      {selected && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                          <CheckIcon className="h-5 w-5" />
                        </span>
                      )}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
