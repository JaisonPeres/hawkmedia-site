import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface DisclosureProps {
  title: string;
  items: {
    name: string;
    href: string;
  }[];
  callsToAction?: {
    name: string;
    href: string;
  }[];
}

export default function DisclosureButton({
  title,
  items,
  callsToAction: call,
}: DisclosureProps) {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Disclosure as="div" className="-mx-3">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base text-white font-semibold leading-7 hover:bg-translucid">
            { title }
            <ChevronDownIcon
              className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none text-white')}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 space-y-2">
            {items.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-translucid"
              >
                {item.name}
              </Disclosure.Button>
            ))}
            {call?.length && (
              call.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-translucid"
                >
                  {item.name}
                </Disclosure.Button>
              ))
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}