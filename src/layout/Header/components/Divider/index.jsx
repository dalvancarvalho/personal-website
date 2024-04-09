/* Divider/index.jsx */

function Divider(props) {
  // Vertical divider

  const { pathname, y } = props

  return (
    <span
      className={`h-8 w-px color-transition ${
        pathname !== '/' && y === 0
          ? 'bg-slate-300 dark:bg-dark-1'
          : 'bg-slate-200 dark:bg-dark-2'
      }`}
    />
  )
}

export default Divider
