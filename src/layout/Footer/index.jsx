/* Footer/index.jsx */

import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useAnimate } from './animations/useAnimate'

import { Paragraph } from '../../components/Text/Paragraph'
import { SocialNetworksList } from './components/SocialNetworksList'

export function Footer() {
  // Page footer

  const year = new Date().getFullYear()

  const { t } = useTranslation()
  const { pathname } = useLocation()
  const animation = useAnimate(false) // for now, the footer animation is disabled :(

  return (
    <footer
      className="self-end py-8 color-transition flex flex-col items-center justify-between gap-6 bg-slate-150 dark:bg-dark-5 text-slate-600 dark:text-gray-400 text-sm color-transition
      data-[pathname='/resume']:bg-slate-50
      data-[pathname='/resume']:dark:bg-dark-6"
      data-pathname={pathname}
      ref={animation.scope}
    >
      <div className="flex flex-col items-center gap-0.5" ref={animation.top}>
        <Paragraph i18nKey="footer.deploy" variant="fixed-sm-normal" />
        <Paragraph i18nKey="footer.developer" variant="fixed-sm-normal" />
      </div>
      <SocialNetworksList ref={animation.socials} t={t} />
      <Paragraph ref={animation.bottom} variant="fixed-base-normal">
        &copy; {year} <span className="font-black">·</span> <b>dalvanc</b>.com
      </Paragraph>
    </footer>
  )
}
