import BackgroundBox from "@/components/basic/BackgroundBox"
import Button from "../../basic/button/Button"
export interface HeroSectionProps {
  title?: string
  subtitle?: string
  actions?: {
    label: string
    color: string
    link: string
    target?: string
  }[],
  background?: {
    color: string
    opacity: number
    image: string
    position: string
  }
}

export default function HeroSection({
  title,
  subtitle,
  actions = [],
  background = {
    color: '#000000',
    opacity: 0.5,
    image: '',
    position: 'center',
  },
}: HeroSectionProps) {

  return (
    <BackgroundBox
      className="relative isolate px-6 pt-14 lg:px-8"
      image={background.image}
      backdropOpacity={background.opacity}
      backdropColor={background.color}
      backgroundPosition={background.position}
    >
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-xl leading-8">
            {subtitle}
          </p>
          {actions.map((action, index) => (
            <div key={index} className="mt-10 flex items-center justify-center gap-x-6">
              <Button target={action.target} href={action.link} label={action.label} className={action.color} />
            </div>
          ))}
        </div>
      </div>
    </BackgroundBox>
  )
}
