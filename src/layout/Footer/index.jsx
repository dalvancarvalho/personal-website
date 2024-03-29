/* Footer/index.jsx */

import { useTranslation } from 'react-i18next'

import useAnimate from './animations/useAnimate'

import Info from './components/Info'
import Paragraph from '../../components/Text/Paragraph'
import SocialNetworksList from './components/SocialNetworksList'

function Footer() {
  // Page footer

  const year = new Date().getFullYear()

  const { t } = useTranslation()
  const animation = useAnimate()

  return (
    <footer
      className="pt-4 pb-8 md:pb-16 text-slate-600 dark:text-gray-400 flex flex-col items-center justify-between gap-6 text-sm color-transition"
      ref={animation.scope}
    >
      <div className="flex flex-col items-center gap-0.5" ref={animation.top}>
        <span className="mb-5 text-base">❖</span>
        <Info href="https://vercel.com" label="Vercel" paragraph={t('footer.deploy')} />
        <Info href="#about" label="Dalvan Carvalho" paragraph={t('footer.developer')} />
      </div>
      <SocialNetworksList ref={animation.socials} t={t} />
      <Paragraph ref={animation.bottom} variant="fixed-base-normal">
        &copy; {year} <span className="font-mono">·</span> <b>dalvanc</b>.com
      </Paragraph>
    </footer>
  )
}

export default Footer
