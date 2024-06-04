/* Footer/index.jsx */

import { useTranslation } from 'react-i18next'

// import useAnimate from './animations/useAnimate'

import Paragraph from '../../components/Text/Paragraph'
import SocialNetworksList from './components/SocialNetworksList'

export default function Footer() {
  // Page footer

  const year = new Date().getFullYear()

  const { t } = useTranslation()
  // const animation = useAnimate() | NOTE: for now, the footer animation is disabled :(

  return (
    <footer className="pt-4 pb-8 md:pb-16 bg-gradient-to-t from-black/5 flex flex-col items-center justify-between gap-6 text-slate-600 dark:text-gray-400 text-sm color-transition">
      <div className="flex flex-col items-center gap-0.5">
        <span className="mb-5 text-base select-none">❖</span>
        <Paragraph i18nKey="footer.deploy" variant="fixed-sm-normal" />
        <Paragraph i18nKey="footer.developer" variant="fixed-sm-normal" />
      </div>
      <SocialNetworksList t={t} />
      <Paragraph variant="fixed-base-normal">
        &copy; {year} <span className="font-black">·</span> <b>dalvanc</b>.com
      </Paragraph>
    </footer>
  )
}
