/* Tech.jsx */

function Tech(props) {
  // Link to the tech's page

  const { isEven, tech, textSize = 'text-base 2xl:text-lg', url } = props

  return (
    <li className={isEven ? 'translate-x-[200%]' : '-translate-x-[200%]'}>
      <a
        className={`${textSize} text-slate-50 font-semibold card-tech-hover`}
        href={url}
        rel="noopener noreferrer"
        tabIndex="-1"
        target="_blank"
      >
        {tech}
      </a>
    </li>
  )
}

export default Tech
