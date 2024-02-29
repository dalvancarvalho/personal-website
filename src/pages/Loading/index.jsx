/* Loading/index.jsx */

function Loading() {
  // Loading indicator

  return (
    <div className="z-40 h-dvh flex items-center justify-center">
      <div className="size-6 rounded-full bg-accent transition-colors animate-ping opacity-75"></div>
    </div>
  )
}

export default Loading
