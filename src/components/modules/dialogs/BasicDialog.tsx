"use client"

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";

interface DialogProps {
  children: React.ReactNode
  title: string
  open: boolean
  closeButton?: boolean
  backdrop?: boolean
  position?: "top" | "bottom" | "center"
  onClose?: (open: boolean) => void
}

export default function BasicDialog({
  children,
  title,
  open,
  onClose,
  closeButton,
  backdrop = true,
  position = "center"
}: DialogProps) {
  let [isOpen, setIsOpen] = useState(open)

  function closeModal() {
    setIsOpen(false)
    onClose && onClose(false)
  }

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  useEffect(() => {
    document.documentElement.style.paddingRight = "0px"
    document.documentElement.style.overflow = "hidden"
    if (isOpen && backdrop) {
      // change html overflow to hidden
      document.documentElement.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = "auto"
    }
  }
  , [isOpen, backdrop])
  
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          {backdrop && (
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>
          )}

          <div className="fixed inset-0 overflow-y-auto">
            <div className={`
              flex min-h-full p-4 text-center
              ${position === "top" && "items-start"}
              ${position === "bottom" && "items-end"}
              ${position === "center" && "items-center"}
              justify-center
            `}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel style={{ maxWidth: 'fit-content' }} className="relative w-full transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                  {closeButton && (
                    <button
                      aria-label="fechar menu"
                      type="button"
                      onClick={closeModal}
                      className="
                        p-2 w-10 h-10 rounded-full
                        absolute top-4 right-4 transition-all
                        text-dark
                        bg-dark
                        bg-opacity-0
                        hover:bg-opacity-10
                        dark:text-white
                        dark:bg-white
                        dark:bg-opacity-0
                        dark:hover:bg-opacity-10
                      "
                    >
                      <XMarkIcon />
                    </button>
                  )}
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    {title}
                  </Dialog.Title>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}