/* PolaroidPic/index.jsx */

import useAnimate from './animations/useAnimate'

import HoverText from '../HoverText'

import me from '../../../../../assets/webp/me.webp'
import meBw from '../../../../../assets/webp/me-bw.webp'
import tapeTopLeft from '../../../../../assets/webp/tape-top-left.webp'
import tapeBottomRight from '../../../../../assets/webp/tape-bottom-right.webp'

export default function PolaroidPic({ t }) {
  // Polaroid picture with handwritten text

  const animation = useAnimate()

  return (
    <div
      className="relative max-h-[550px] mt-4 -rotate-3 lg:mt-0 mb-6 md:mb-10 lg:mb-0 col-start-1 col-end-6 w-72 md:w-96 lg:w-full h-96 md:h-[32rem] lg:h-full group"
      ref={animation.scope}
    >
      {/* Skewed shadow */}
      <div
        className="absolute top-4 md:top-7 lg:top-9 xl:top-7 right-4 md:right-7 size-[95%] md:size-[94%] -skew-y-6 -skew-x-3 blur-[3px] bg-slate-500/15 dark:bg-transparent color-transition"
        ref={animation.shadow}
      ></div>

      {/* Polaroid picture */}
      <div
        className="absolute inset-0 z-10 size-full px-4 pt-4 pb-16 md:px-5 md:pt-5 md:pb-20 bg-gradient-to-tr from-white from-60% to-slate-150 color-transition"
        ref={animation.picture}
      >
        <div className="relative size-full">
          {/* Sticky tapes */}
          <img
            alt={t('pages.home.about.tapeAltText')}
            className="absolute z-20 -rotate-45 -top-12 right-[45%] xl:right-[55%] scale-50 md:scale-[60%] dark:opacity-65 transition-opacity duration-300 select-none"
            loading="lazy"
            src={tapeTopLeft}
          />
          <img
            alt={t('pages.home.about.tapeAltText')}
            className="absolute z-20 -rotate-[30deg] -bottom-12 lg:-bottom-14 left-[35%] scale-[85%] dark:opacity-65 transition-opacity duration-300 select-none"
            loading="lazy"
            src={tapeBottomRight}
          />

          {/* Picture */}
          <img
            alt={t('pages.home.about.meAltText')}
            className="absolute size-full object-cover"
            loading="lazy"
            src={me}
          />
          <img
            alt={t('pages.home.about.meAltText')}
            className="absolute size-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            loading="lazy"
            src={meBw}
          />

          {/* Text */}
          <p
            className="absolute -bottom-10 md:-bottom-[52px] left-0 -rotate-6 font-rock-salt text-sm md:text-base text-slate-800 select-none"
            ref={animation.text}
          >
            {t('pages.home.about.polaroid')}
          </p>
          <HoverText t={t} />
        </div>
      </div>
    </div>
  )
}
