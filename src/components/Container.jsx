/* Container.jsx */

function Container({ children, className }) {
  // Container with responsive width

  return <div className={`container m-auto ${className}`}>{children}</div>
}

export default Container
