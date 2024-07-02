/* Container/index.jsx */

export function Container({ children, className = '' }) {
  // Container with responsive width

  return <div className={`container ${className}`}>{children}</div>
}
