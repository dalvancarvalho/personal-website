/* Heading/index.jsx */

import { useTranslation } from 'react-i18next'

import { useAnimate } from './animations/useAnimate'

export function Heading({
  animate,
  heading,
  sectionName,
  sectionNameColor = 'text-slate-150 dark:text-dark-5',
}) {
  // Section heading (H2)

  const animationRefs = useAnimate(animate)
  const { t } = useTranslation()

  return (
    <div
      className="relative isolate mb-7 md:mb-24 w-full grid place-items-start md:place-items-center font-mark-pro font-black tracking-[-0.1em]"
      ref={animationRefs.scope}
    >
      {/* Section name (💻 displayed in medium/large screens) */}
      <span
        className={`${sectionNameColor} hidden md:block absolute -z-10 top-[60%] -translate-y-1/2 translate-x-[0.8rem] text-[6.25rem] uppercase tracking-[1.6rem] select-none whitespace-nowrap color-transition`}
        ref={animationRefs.sectionName}
      >
        {t(sectionName)}
      </span>

      <div ref={animationRefs.heading}>
        {/* Section name (📱 displayed in small screens) */}
        <span className="block md:hidden ml-px mb-3 font-black text-xs uppercase tracking-widest text-accent color-transition">
          {t(sectionName)}
        </span>
        <h2 className="text-3xl md:text-[2.5rem]">{t(heading)}</h2>
      </div>
    </div>
  )
}
