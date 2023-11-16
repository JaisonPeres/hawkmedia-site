import * as HeroIcons from "@heroicons/react/24/outline";
import React from "react";

export enum HeroIconNames {
  bolt = 'bolt',
}

export interface HeroIconProps {
  name: string,
  className?: string,
  onClick?: () => void,
}

export interface HeroIconComponent {
  [key: string]: JSX.Element,
}

export default function HeroIcon ({
  name,
  ...props
}: HeroIconProps) {

  const {...icons} = HeroIcons

  // @ts-ignore
  const HeroIcon: JSX.Element = icons[name]

  return (
    <>
      {/* @ts-ignore */}
      <HeroIcon {...props} />
    </>
  )
}