'use client'
import { Transition } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import { FlyOutFromBottom } from '../Transitions'

interface ButtonCheckPathProps {
  path: string
}

export function ButtonCheckPath ({
  path
}: ButtonCheckPathProps) {
  const pathname = usePathname()
  const currentPath = pathname === '/' ? '/' : pathname.replace('/', '')
  const isCurrent = currentPath === path

  return (
    <>
      <Transition
        appear
        show={isCurrent}
        {...FlyOutFromBottom}
      >
        <span className="transition-all absolute inset-0 z-0 border-b-2 border-b-dark/40 dark:border-b-white/30 mx-3 -mt-2">
        </span>
      </Transition>
    </>
  )
}