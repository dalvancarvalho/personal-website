/* SectionTitle/index.jsx */

import useAnimate from './animations/useAnimate'

function SectionTitle({
  className = '',
  animation = true,
  title,
  watermark = null,
  watermarkColor = 'text-slate-150 dark:text-dark-5',
}) {
  // Displays the title of the section (H2)

  const animationRefs = useAnimate(animation, watermark)

  return (
    <div
      className={`${className} relative isolate mb-10 md:mb-24 w-full flex justify-start md:justify-center title-font text-3xl md:text-[2.5rem]`}
      ref={animationRefs.scope}
    >
      <h2 ref={animationRefs.heading}>{title}</h2>
      {watermark && (
        <span
          className={`${watermarkColor} absolute -z-10 translate-x-[0.8rem] hidden md:block text-[6.25rem] uppercase tracking-[1.6rem] select-none color-transition whitespace-nowrap`}
          ref={animationRefs.watermark}
        >
          {watermark}
        </span>
      )}
    </div>
  )
}

export default SectionTitle
