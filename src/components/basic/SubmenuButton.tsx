import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

interface SubmenuProps {
  title: string;
  items: {
    name: string;
    description: string;
    href: string;
    icon: any;
  }[],
  callsToAction?: {
    name: string;
    href: string;
    icon?: any;
  }[];
}

export default function SubmenuButton({
  title,
  items,
  callsToAction,
}: SubmenuProps) {

  const callToActionClasses = callsToAction?.length && callsToAction.length > 1
    ? 'grid grid-cols-2 gap-4'
    : "grid bg-translucid"

  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center gap-x-1 text-sm text-white font-semibold leading-6">
        {title}
        <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-dark bg-backdrop-filter-dark shadow-lg ring-1 ring-black/5">
          <div className="p-4">
            {items.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-translucid"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                  <item.icon className="h-6 w-6 text-white group-hover:text-indigo-600" aria-hidden="true" />
                </div>
                <div className="flex-auto">
                  <a href={item.href} className="block font-semibold text-white">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          {!callsToAction?.length ? null : (
            <div className={callToActionClasses}>
              {callsToAction?.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-600"
                >
                  {!item.icon ? null : (
                    <item.icon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
                  )}
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}