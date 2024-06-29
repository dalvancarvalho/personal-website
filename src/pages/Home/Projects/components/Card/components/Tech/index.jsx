/* Tech/index.jsx */

export default function Tech({ image, tech, url }) {
  // Link to the tech's page

  return (
    <li className="mx-auto group/tech">
      <a
        href={url}
        onClick={(event) => event.stopPropagation()} // prevents the 'navigate' function of the parent element from being triggered
        rel="noopener noreferrer"
        tabIndex="-1"
        target="_blank"
        title={tech}
      >
        <img
          className="size-5 md:size-6 brightness-0 invert sm:group-hover/tech:scale-[120%] select-none transition-transform duration-300"
          src={image.src}
          alt={image.alt}
        />
      </a>
    </li>
  )
}
