/* Link.jsx */

function Link(props) {
  // External access link

  const { href, linkText, text } = props

  return (
    <span>
      {text}
      <a
        className="text-slate-600 dark:text-gray-400 hover:text-slate-900
        font-bold hover:dark:text-gray-200 focus-visible:text-slate-900
        focus-visible:dark:text-gray-200 color-transition"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {linkText}
      </a>
    </span>
  )
}

export default Link
