import Image from 'next/image'
import './style.css'

interface LogoProps {
  url: string;
  srTitle: string;
  className?: string;
}
export default function Logo ({ url, srTitle, className }: LogoProps) {

  return (
    <div className={className}>
      <span className="sr-only">{srTitle}</span>
      <Image
        loading="lazy"
        alt={srTitle}
        className="logo"
        width={180}
        height={60}
        src={url}
      />
    </div>
  )
}