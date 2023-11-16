import Link from "next/link";
import ButtonSpinner from "./ButtonSpinner";
import { ColorShades, backgroundColors, hoverBackgroundColors, textColors, validatedColor } from "../colors";
import { borderColors } from "../colors/BorderColors";
import { hoverTextColors } from "../colors/HoverTextColors";
import { hoverBorderColors } from "../colors/HoverBorderColors";
import { ButtonCheckPath } from "./ButtonCheckPath";

export interface ButtonProps {
  label?: string;
  color?: string;
  colorShade?: ColorShades;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  rounded?: boolean;
  bordered?: boolean;
  flat?: boolean;
  alternative?: boolean;
  href?: string;
  processing?: boolean;
  fullWidth?: boolean;
  target?: string;
  checkPath?: boolean;
}

export default function ButtonLink ({
  label = 'Button',
  children,
  className,
  processing,
  bordered,
  flat,
  color,
  href = '/',
  rounded,
  colorShade = ColorShades.SHADE_700,
  fullWidth,
  target,
  checkPath,
  onClick
}: ButtonProps) {

  let defaultColor = validatedColor(color)

  const defaultBackgroundColor = backgroundColors[defaultColor][colorShade]
  const defaultHoverBackgroundColor = hoverBackgroundColors[defaultColor][colorShade + 100]
  const defaultTextColor = textColors[defaultColor][colorShade]
  const defaultHoverTextColor = hoverTextColors[defaultColor][colorShade]
  const defaultBorderColor = borderColors[defaultColor][colorShade]
  const defaultHoverBorderColor = hoverBorderColors[defaultColor][colorShade + 100]

  function isExternalLink(href: string) {
    const isHttp = href.startsWith('http')
    const isMailTo = href.startsWith('mailto')
    const isTel = href.startsWith('tel')
    return isHttp || isMailTo || isTel
  }

  function getTarget () {
    if (target) return target

    if (isExternalLink(href)) {
      return '_blank'
    }
  }

  const baseClasses = [
    'inline-flex',
    'items-center',
    'px-4',
    'py-2',
    'font-semibold',
    'text-xs',
    'uppercase',
    'tracking-widest',
    'transition',
    'ease-in-out',
    'duration-200',
  ]

  const borderedClasses = [
    'border',
    'bg-opacity-0',
    'border-2',
    'hover:bg-opacity-100',
    'hover:text-white',
    defaultBackgroundColor,
    defaultBorderColor,
    defaultTextColor,
    defaultHoverBorderColor,
  ]

  const fullWidthClasses = fullWidth ? [
    'w-full',
    'justify-center'
  ] : []

  const flatClasses = [
    'border-2',
    'border-transparent',
    'bg-opacity-0',
    'hover:bg-opacity-10',
    defaultBackgroundColor,
    defaultTextColor,
    defaultHoverTextColor,
  ]

  const defaultButtonClasses = [
    'border-2',
    'text-white',
    'hover:text-white',
    defaultBorderColor,
    defaultBackgroundColor,
    defaultHoverBackgroundColor,
    defaultHoverBorderColor
  ]

  const roundedClasses = rounded ? [
    'rounded-full',
  ] : [
    'rounded-md'
  ]
  
  const systemClasses = [
    ...baseClasses,
    ...roundedClasses,
    ...fullWidthClasses,
    ...(
      bordered ? borderedClasses
      : flat ? flatClasses
      : defaultButtonClasses
    ),
  ].join(' ')

  return (
    <div className="relative">
      <Link
        href={href}
        onClick={onClick}
        target={getTarget()}
        className={systemClasses + ' ' + className}
        aria-label={label}
      >
        {processing && <ButtonSpinner />}
        {label ? label : children}
      </Link>
      {checkPath && <ButtonCheckPath path={href} />}
    </div>
  )
}