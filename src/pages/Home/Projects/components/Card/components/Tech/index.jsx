/* Tech/index.jsx */

export default function Tech({ isEven, tech, url }) {
  // Link to the tech's page

  return (
    <li className={isEven ? 'translate-x-[200%]' : '-translate-x-[200%]'}>
      <a
        className="text-sm md:text-base text-slate-50 font-semibold card-tech-hover"
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
