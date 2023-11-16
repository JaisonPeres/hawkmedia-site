export default function WrapperLink ({
  link,
  children,
  className
}: {
  link?: string;
  children: JSX.Element | JSX.Element[];
  className?: string;
}) {
  return (
    <div className={className}>
      {link ? (
        <a href={link} className="w-full">
          {children}
        </a>
      ) : (
        <>{children}</>
      )}
    </div>
  )
}