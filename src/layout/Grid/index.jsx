/* Grid/index.jsx */

export default function Grid({ children, className = '' }) {
  // Grid displayed in medium/large screens

  return (
    <div className={`flex flex-col items-center lg:grid grid-cols-12 ${className}`}>
      {children}
    </div>
  )
}
