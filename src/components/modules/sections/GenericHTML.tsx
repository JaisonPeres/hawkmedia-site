export interface GenericHTMLProps {
  content?: string,
  containerClass?: string
}


export default function GenericHTML ({
  content,
  containerClass
}: GenericHTMLProps) {
  if (!content) return (<></>)

  return (
    <div className={containerClass} dangerouslySetInnerHTML={{ __html: content }} />
  )
}