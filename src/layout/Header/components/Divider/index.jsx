/* Divider/index.jsx */

function Divider({ pathname, y }) {
  // Vertical divider

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
