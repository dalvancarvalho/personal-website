/* Grid/index.jsx */

function Grid(props) {
  // Grid displayed on medium/large screens

  return (
    <div className="flex flex-col items-center lg:grid grid-cols-12 gap-12 2xl:gap-14">
      {props.children}
    </div>
  )
}

export default Grid
