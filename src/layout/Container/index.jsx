/* Container/index.jsx */

function Container({ children, className = '' }) {
  // Container with responsive width

  return <div className={`container ${className}`}>{children}</div>
}

export default Container
