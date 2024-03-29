/* Grid/index.jsx */

function Grid(props) {
  // Grid displayed on medium/large screens

  const { children, className = '' } = props

  return (
    <div className={`flex flex-col items-center lg:grid grid-cols-12 ${className}`}>
      {children}
    </div>
  )
}

export default Grid
