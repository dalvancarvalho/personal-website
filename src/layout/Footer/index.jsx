/* Footer/index.jsx */

import { useTranslation } from 'react-i18next'

// import useAnimate from './animations/useAnimate' (for now, the footer animation is disabled)

import Paragraph from '../../components/Text/Paragraph'
import SocialNetworksList from './components/SocialNetworksList'

function Footer() {
  // Page footer

  const year = new Date().getFullYear()

  const { t } = useTranslation()
  // const animation = useAnimate()

  return (
    <footer className="pt-4 pb-8 md:pb-16 text-slate-600 dark:text-gray-400 flex flex-col items-center justify-between gap-6 text-sm color-transition">
      <div className="flex flex-col items-center gap-0.5">
        <span className="mb-5 text-base select-none">❖</span>
        <Paragraph variant="fixed-sm-normal">
          {t('footer.deploy')}
          <a
            className="font-bold text-slate-600 dark:text-gray-400 focus-visible:text-slate-900 focus-visible:dark:text-gray-200 color-transition footer-link-hover"
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
        </Paragraph>
        <Paragraph variant="fixed-sm-normal">
          {t('footer.developer')}
          <a
            className="font-bold text-slate-600 dark:text-gray-400 focus-visible:text-slate-900 focus-visible:dark:text-gray-200 color-transition footer-link-hover"
            href="https://dalvanc.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dalvan Carvalho
          </a>
        </Paragraph>
      </div>
      <SocialNetworksList t={t} />
      <Paragraph variant="fixed-base-normal">
        &copy; {year} <b>dalvanc</b>.com
      </Paragraph>
    </footer>
  )
}

export default Footer
