import Card, { CardProps } from "@/components/basic/Card"
import SectionChapter from "./SectionChapter"

export interface CardGridProps {
  cards?: CardProps[]
  containerClass?: string,
  title?: string,
  description?: string,
}

export default function CardGrid ({
  cards,
  containerClass = '',
  title,
  description,
}: CardGridProps) {

  if (!cards) return <></>

  const containerFlexClasses = [
    'flex flex-wrap gap-2 lg:gap-6 justify-center'
  ]

  function commitContainerClasses () {
    return containerClass + ' ' + containerFlexClasses.join(' ')
  }

  return (
    <div className="py-24">
      <SectionChapter title={title} description={description} titleClass="text-dark dark:text-white" descriptionClass="text-dark dark:text-white" />
      <div className={commitContainerClasses()}>
        {cards.map((card, index) => (
          <Card {...card} key={index} className="rounded-2xl" />
        ))}
      </div>
    </div>
  )
}