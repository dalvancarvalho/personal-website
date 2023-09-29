/* Grid/index.jsx */

function Grid({ children }) {
  // Grid displayed on medium/large screens

  return (
    <div
      className="flex flex-col items-center lg:grid
      grid-cols-12 gap-12 2xl:gap-14"
    >
      {children}
    </div>
  )
}

export default Grid
