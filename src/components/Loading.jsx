/* Loading.jsx */

function Loading() {
  // Fallback component

  return (
    <div className="z-40 h-screen flex items-center justify-center">
      <div
        className="w-6 h-6 rounded-full bg-accent transition-colors animate-ping
        opacity-75"
      ></div>
    </div>
  )
}

export default Loading
