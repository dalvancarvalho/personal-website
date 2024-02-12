/* Link.jsx */

function Link(props) {
  // External access link

  const { href, linkText, text } = props

  return (
    <span>
      {text}
      <a
        className="text-slate-600 dark:text-gray-400 focus-visible:text-slate-900 focus-visible:dark:text-gray-200 font-bold color-transition footer-link-hover"
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
