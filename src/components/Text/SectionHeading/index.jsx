/* SectionHeading/index.jsx */

import { useTranslation } from 'react-i18next'

import useAnimate from './animations/useAnimate'

export default function SectionHeading({
  className = '',
  animation = true,
  heading,
  watermark = null,
  watermarkColor = 'text-slate-150 dark:text-dark-5',
}) {
  // Displays the title of the section (H2)

  const animationRefs = useAnimate(animation)
  const { t } = useTranslation()

  return (
    <div
      className={`${className} relative isolate mb-10 md:mb-24 w-full flex justify-start md:justify-center title-font text-3xl md:text-[2.5rem]`}
      ref={animationRefs.scope}
    >
      <h2 ref={animationRefs.heading}>{t(heading)}</h2>
      {watermark && (
        <span
          className={`${watermarkColor} absolute -z-10 translate-x-[0.8rem] hidden md:block text-[6.25rem] uppercase tracking-[1.6rem] select-none color-transition whitespace-nowrap`}
          ref={animationRefs.watermark}
        >
          {t(watermark)}
        </span>
      )}
    </div>
  )
}
