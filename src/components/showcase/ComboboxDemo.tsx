import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';

const people = [
  { id: 1, name: 'Leslie Alexander' },
  { id: 2, name: 'Michael Foster' },
  { id: 3, name: 'Dries Vincent' },
  { id: 4, name: 'Lindsay Walton' },
  { id: 5, name: 'Courtney Henry' },
];

export function ComboboxDemo() {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState('');

  const filtered =
    query === ''
      ? people
      : people.filter((person) =>
          person.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold text-foreground">Combobox</h3>
        <p className="text-muted-foreground mt-1">Autocomplete search input</p>
      </div>

      <Combobox value={selected} onChange={setSelected}>
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-card border-2 border-border hover:border-primary transition-all duration-200 shadow-sm">
            <ComboboxInput
              className="w-full border-none py-3 pl-4 pr-10 text-sm leading-5 text-foreground bg-transparent focus:outline-none"
              displayValue={(person: typeof people[0]) => person.name}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search people..."
            />
            <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronUpDownIcon className="h-5 w-5 text-muted-foreground" />
            </ComboboxButton>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <ComboboxOptions className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-lg bg-card py-1 shadow-xl border border-border">
              {filtered.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2.5 px-4 text-muted-foreground">
                  Nothing found.
                </div>
              ) : (
                filtered.map((person) => (
                  <ComboboxOption
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
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
