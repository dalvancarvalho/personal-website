/* Footer/index.jsx */

import { useTranslation } from 'react-i18next'
import Link from './components/Link'
import SocialNetworkList from './components/SocialNetworkList'

function Footer() {
  // Page footer

  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer
      className="pt-4 pb-8 lg:pb-16 text-slate-600 dark:text-gray-400
      flex flex-col items-center justify-between gap-6 text-sm color-transition"
      // ref={footerRef}
    >
      <span className="text-base">❖</span>
      <p className="flex flex-col items-center gap-0.5">
        <Link href="https://vercel.com" linkText={'Vercel'} text={t('footer.deploy')} />
        <Link
          href="https://dalvanc.com"
          linkText={'Dalvan Carvalho'}
          text={t('footer.developer')}
        />
      </p>
      <SocialNetworkList t={t} />
      <div className="h-px w-24 bg-slate-300 dark:bg-dark-6 color-transition" />
      <p className="text-base">
        &copy; {year} <span className="font-mono">·</span> <b>dalvanc</b>.com
      </p>
    </footer>
  )
}

export default Footer
