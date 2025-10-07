import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { ChevronDownIcon, DocumentDuplicateIcon, PencilSquareIcon, TrashIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

export function MenuDemo() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold text-foreground">Menu</h3>
        <p className="text-muted-foreground mt-1">Dropdown menu with items</p>
      </div>

      <Menu as="div" className="relative inline-block text-left">
        <MenuButton className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground border-2 border-border rounded-lg font-medium hover:border-primary transition-all duration-200 shadow-sm hover:shadow-md">
          Options
          <ChevronDownIcon className="w-4 h-4" />
        </MenuButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute left-0 mt-2 w-56 origin-top-left rounded-lg bg-card shadow-xl border border-border z-50 overflow-hidden">
            <div className="p-1">
              <MenuItem>
                {({ focus }) => (
                  <button
                    className={`${
                      focus ? 'bg-secondary' : ''
                    } group flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors`}
                  >
                    <UserCircleIcon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground">View Profile</span>
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <button
                    className={`${
                      focus ? 'bg-secondary' : ''
                    } group flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors`}
                  >
                    <PencilSquareIcon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground">Edit</span>
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <button
                    className={`${
                      focus ? 'bg-secondary' : ''
                    } group flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors`}
                  >
                    <DocumentDuplicateIcon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground">Duplicate</span>
                  </button>
                )}
              </MenuItem>
            </div>
            <div className="border-t border-border p-1">
              <MenuItem>
                {({ focus }) => (
                  <button
                    className={`${
                      focus ? 'bg-destructive/10' : ''
                    } group flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors`}
                  >
                    <TrashIcon className="w-5 h-5 text-destructive" />
                    <span className="text-destructive">Delete</span>
                  </button>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
