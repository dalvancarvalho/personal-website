/* HoverText.jsx */

import Arrow from './Arrow'

function HoverText(props) {
  const { t } = props

  return (
    <div
      className="absolute z-20 top-1/4 right-[42%] md:right-[45%] flex flex-col
      select-none"
    >
      <Arrow />
      <p
        className="text-base md:text-xl text-slate-800 text-center font-rock-salt
        -translate-x-1/2 -translate-y-1/4 rotate-3 scale-50 opacity-0
        group-hover:scale-100 group-hover:opacity-100 duration-150"
        title={t('pages.home.about.hoverTextTitle')}
      >
        it&apos;s-a me,
        <br />
        dalvan!
      </p>
    </div>
  )
}

export default HoverText
