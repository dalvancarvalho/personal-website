/* Highlight/index.jsx */

function Highlight(props) {
  // Highlights the wrapped word or sentence
  // (Used in combination with the 'Trans' component from i18next)

  return (
    <span className="font-bold text-slate-800 dark:text-gray-200 color-transition">
      {props.children}
    </span>
  )
}

export default Highlight
