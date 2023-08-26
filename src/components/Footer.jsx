/* Footer.jsx */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useTranslation } from 'react-i18next'
import SocialNetworkList from './SocialNetworkList'

function Footer() {
  // Page footer

  const { t } = useTranslation()
  const footerRef = useRef(null)

  useLayoutEffect(() => {
    // Footer animation

    gsap.fromTo(
      footerRef.current.children,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.075,
        ease: 'power3.in',
        scrollTrigger: {
          trigger: footerRef.current,
        },
      }
    )
  }, [])

  return (
    <footer
      className="z-50 pt-4 pb-8 lg:pb-16 text-slate-600 dark:text-gray-400
      flex flex-col items-center justify-between gap-6 text-sm color-transition"
      ref={footerRef}
    >
      <span className="text-base">❖</span>
      <p className="flex flex-col items-center gap-0.5">
        <span>
          {t('footer.deploy')}
          <FooterLink href="https://vercel.com">Vercel</FooterLink>
        </span>
        <span>
          {t('footer.developer')}
          <FooterLink href="https://dalvanc.com">Dalvan Carvalho</FooterLink>
        </span>
      </p>
      <SocialNetworkList t={t} />
      <div className="h-px w-24 bg-slate-300 dark:bg-dark-6 color-transition" />
      <Copyright />
    </footer>
  )
}

// Local components
function Copyright() {
  // Copyright notice

  const year = new Date().getFullYear()

  return (
    <p className="text-base">
      &copy; {year} <span className="font-mono">·</span> <b>dalvanc</b>.com
    </p>
  )
}

function FooterLink({ children, href }) {
  // External access link

  return (
    <a
      className="text-slate-600 dark:text-gray-400 hover:text-slate-900
      font-bold hover:dark:text-gray-200 focus-visible:text-slate-900
      focus-visible:dark:text-gray-200 color-transition"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  )
}

export default Footer
