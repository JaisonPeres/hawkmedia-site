"use client"

import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useState } from "react"
import Button, { ButtonProps } from "./button/Button"
import { ColorShades } from "./colors"

interface PageMenu {
  title: string,
  path: string
}

interface MobileMenuProps {
  pages?: PageMenu[],
  highlightedButtons?: any[]
}


export default function MobileNavigation({
  pages,
  highlightedButtons
}: MobileMenuProps) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        aria-label='Abrir menu'
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark dark:text-white"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Overlay />
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-dark px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Contábil Descomplica</span>
            </Link>
            <button
              aria-label="fechar menu"
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-300 hover:bg-translucid hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {pages?.map(({ title, path }) => (
                  <Button
                    onClick={() => setMobileMenuOpen(false)}
                    flat
                    fullWidth
                    key={title}
                    label={title}
                    href={path}
                    color="gray"
                    colorShade={ColorShades.SHADE_50}
                  />
                ))}
              </div>
              {!!highlightedButtons?.length && (
                <div className="space-y-2 py-6">
                  {highlightedButtons?.map(({ params }, index) => (
                    <Button key={index} {...params} fullWidth colorShade={ColorShades.SHADE_600} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}