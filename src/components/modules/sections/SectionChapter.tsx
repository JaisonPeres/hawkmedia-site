export interface SectionChapterProps {
  title?: string,
  description?: string,
  containerClass?: string,
  titleClass?: string,
  descriptionClass?: string,
}

export default function SectionChapter ({
  title,
  description,
  containerClass = '',
  titleClass = '',
  descriptionClass = '',
}: SectionChapterProps) {

  const baseTitleClass = 'text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 text-center'

  const compiledTitleClass = titleClass ? `${baseTitleClass} ${titleClass}` : baseTitleClass

  const baseDescriptionClass = 'mt-3 text-xl leading-7 sm:mt-4 text-center'

  const compiledDescriptionClass = descriptionClass ? `${baseDescriptionClass} ${descriptionClass}` : baseDescriptionClass

  const baseContainerClass = 'relative isolate text-dark dark:text-white'

  const compiledContainerClass = containerClass ? `${baseContainerClass} ${containerClass}` : baseContainerClass

  return (
    <div className={compiledContainerClass}>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center justify-center w-full mb-12">
          <h2 className={compiledTitleClass}>
            {title}
          </h2>
          <p className={compiledDescriptionClass}>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}