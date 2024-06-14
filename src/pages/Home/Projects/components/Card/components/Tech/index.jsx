/* Tech/index.jsx */

export default function Tech({ image, tech, url }) {
  // Link to the tech's page

  return (
    <li
      className="mx-auto group/tech
      group-data-[parity=even]/card:translate-x-[200%]
      group-data-[parity=odd]/card:-translate-x-[200%]"
    >
      <a href={url} rel="noopener noreferrer" tabIndex="-1" target="_blank" title={tech}>
        <img
          className="size-5 md:size-6 brightness-0 invert md:group-hover/tech:scale-110 select-none transition-transform duration-150"
          src={image.src}
          alt={image.alt}
        />
      </a>
    </li>
  )
}
