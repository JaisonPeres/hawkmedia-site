import { ColorNames, ColorShades, extractRgbFromHex, textColors } from "./colors"

interface BackgroundBoxProps {
  children?: JSX.Element
  className?: string
  color?: ColorNames
  colorShade?: ColorShades
  image?: string
  backdropOpacity: number
  backdropColor?: string,
  backgroundPosition?: string,
  backgroundSize?: string,
}

export default function BackgroundBox ({
  children,
  className = '',
  image,
  backdropOpacity = 0.5,
  backdropColor,
  backgroundPosition = 'center',
  backgroundSize = 'cover',
}: BackgroundBoxProps) {

  const { r, g, b } = extractRgbFromHex(backdropColor)

  function getLinearGradient () {

    if (!image) {
      return `rgba(${r},${g},${b},${backdropOpacity})`
    }

    const rgba = `rgba(${r},${g},${b},${backdropOpacity})`
    
    return `linear-gradient(${rgba}, ${rgba}), url(${image})`
  }

  let classes = [
    'text-dark',
    'dark:text-white',
  ]

  if (!image) {
    classes = [
      ...classes,
      'bg-transparent',
    ]
  } else {
    classes = [
      ...classes,
      'text-white',
    ]
  }

  const classNameWithClasses = className + ' ' + classes.join(' ')

  return (
    <div className={classNameWithClasses} style={{
      backgroundImage: getLinearGradient(),
      backgroundSize,
      backgroundPosition,
      backgroundRepeat: 'no-repeat',
    }}>
      {children}
    </div>
  )
}