import Link from "next/link"

export default function CustomActionButton({
  link,
  label,
  color = 'indigo',
}: {
  link: string
  label: string
  color: string
}) {

  function externalTarget(path: string) {
    return path.startsWith('http') ? '_blank' : '_self'
  }

  function colorClasses(color: string) {
    const useColor = color || 'indigo'
    return [
      'rounded-md',
      'px-3.5',
      'py-2.5',
      'text-sm',
      'font-semibold',
      'shadow-sm',
      'text-white',
      'focus-visible:outline',
      'focus-visible:outline-2',
      'focus-visible:outline-offset-2',
      `focus-visible:outline-${useColor}-600`,
      `hover:bg-${useColor}-500`,
      `bg-${useColor}-600`,
    ].join(' ')
  }

  return (
    <Link
      href={link}
      target={externalTarget(link)}
      className={colorClasses(color)}
    >
      {label}
    </Link>
  )
}