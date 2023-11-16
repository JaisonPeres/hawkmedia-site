export default function Badge ({
  children,
  ...props
}: {
  children: JSX.Element | string,
  className?: string,
}) {

  function commitClasses () {
    return 'px-3 py-1 m-2 text-sm bg-indigo-600 rounded-full cursor-default' + ' ' + props.className
  }
  return (
    <div {...props} className={commitClasses()}>
      {children}
    </div>
  )
}