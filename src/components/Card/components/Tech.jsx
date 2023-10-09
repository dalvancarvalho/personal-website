/* Tech.jsx */

function Tech(props) {
  // Link to the tech's page

  const { isEven, name, textSize = 'text-base', url } = props

  return (
    <li className={isEven ? 'translate-x-[200%]' : '-translate-x-[200%]'}>
      <a
        className={`${textSize} text-slate-50 font-semibold card-tech-hover`}
        href={url}
        rel="noopener noreferrer"
        tabIndex="-1"
        target="_blank"
      >
        {name}
      </a>
    </li>
  )
}

export default Tech
