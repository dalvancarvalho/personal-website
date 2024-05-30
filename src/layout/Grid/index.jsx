/* Grid/index.jsx */

function Grid({ children, className = '' }) {
  // Grid displayed on medium/large screens

  return (
    <div className={`flex flex-col items-center lg:grid grid-cols-12 ${className}`}>
      {children}
    </div>
  )
}

export default Grid
