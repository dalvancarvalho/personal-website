/* Divider.jsx */

function Divider(props) {
  // Vertical divider

  const { pathname, y } = props

  return (
    <span
      className={`h-[2em] w-px color-transition
      ${
        pathname !== '/' && y === 0
          ? 'bg-slate-300 dark:bg-dark-6'
          : 'bg-slate-200 dark:bg-dark-5'
      }`}
    />
  )
}

export default Divider
