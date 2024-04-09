/* SectionTitle/index.jsx */

import useAnimate from './animations/useAnimate'

function SectionTitle(props) {
  // Displays the title of the section (H2)

  const {
    animation = true,
    title,
    watermark = null,
    watermarkColor = 'text-slate-150 dark:text-dark-5',
  } = props

  const animationRefs = useAnimate(animation, watermark)

  return (
    <div
      className="relative isolate mb-10 md:mb-24 w-full flex justify-start md:justify-center title-font text-3xl md:text-[2.5rem]"
      ref={animationRefs.scope}
    >
      <h2 ref={animationRefs.heading}>{title}</h2>
      {watermark && (
        <span
          className={`${watermarkColor} hidden -z-10 absolute translate-x-[0.125em] md:block text-[2.5em] uppercase tracking-[0.25em] lg:tracking-[0.4em] select-none color-transition whitespace-nowrap`}
          ref={animationRefs.watermark}
        >
          {watermark}
        </span>
      )}
    </div>
  )
}

export default SectionTitle
