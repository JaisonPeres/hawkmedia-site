export default function Loading() {
  return (
    <div className="loader-backdrop fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden opacity-75 flex flex-col items-center justify-center">
      <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <div className="loader ease-linear"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}