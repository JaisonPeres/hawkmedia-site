"use client"

import Button from "@/components/basic/button/Button";
import { ColorNames } from "@/components/basic/colors";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import BasicDialog from "../dialogs/BasicDialog";

export interface ContactFabProps {
  title?: string,
  subtitle?: string,
  contacts?: {
    label: string
    url: string
    icon?: string
    color?: ColorNames
    target?: string
  }[]
}

export default function ContactFab({
  contacts,
  title = "Contato",
  subtitle
}: ContactFabProps) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  
  return (
    <>
      <button
        aria-label="ver contatos"
        onClick={openModal}
        className="p-4 w-16 h-16 rounded-full fixed bottom-6 right-6 text-white bg-indigo-600 z-10 drop-shadow-lg hover:bg-indigo-700 transition-all dark:bg-indigo-500 dark:hover:bg-indigo-400"
      >
        <ChatBubbleLeftRightIcon />
      </button>
      <BasicDialog title={title} open={isOpen} onClose={closeModal} closeButton>
        {subtitle && (
          <div className="mt-2">
            <p className="text-sm text-gray-500 dark:text-white">
              {subtitle}
            </p>
          </div>
        )}

        <div className="mt-4 flex flex-col space-y-4">
          {contacts?.map((contact, index) => (
            <Button
              target={contact.target}
              href={contact.url}
              label={contact.label}
              key={index}
              color={contact.color}
              className="dark:text-white dark:hover:bg-white/10 dark:hover:text-white dark:bg-transparent dark:border-white/10"
            />
          ))}
        </div>
      </BasicDialog>
    </>
  )
}