/* Container/index.jsx */

function Container(props) {
  // Container with responsive width

  const { children, className = '' } = props

  return <div className={`container ${className}`}>{children}</div>
}

export default Container
