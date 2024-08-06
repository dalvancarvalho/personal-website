/* PageHeader/index.jsx */

import { useEffect, useRef, useState } from 'react'
import { faGithub, faLinkedin, faNpm } from '@fortawesome/free-brands-svg-icons'

import { Container } from '../Container'

import { Breadcrumbs } from './components/Breadcrumbs'
import { Link } from './components/Link'
import { LiveDemo } from './components/LiveDemo'

// prettier-ignore
export function PageHeader({ github, heading, linkedIn, links, section, t }) {
  // Displays the main heading of the page (H1) along with some useful links

  const externalLinksRef = useRef(null)
  const [hasLinks, setHasLinks] = useState(null)

  useEffect(() => setHasLinks(externalLinksRef.current.hasChildNodes()), [])

  return (
    <div
      className="w-full pt-32 md:pt-44 pb-4 md:pb-10 bg-slate-150 dark:bg-dark-5 color-transition"
      id="home"
    >
      <Container className="variable-padding flex flex-col md:flex-row justify-end md:items-end md:justify-between">
        <div>
          <Breadcrumbs section={section} t={t} />
          <h1 className="text-[2.5rem] leading-10 md:text-5xl title-font text-slate-800 dark:text-gray-200 color-transition">
            {t(heading)}
          </h1>
        </div>

        {/* Links for socials, demos and repos (if any) are rendered here */}
        <div
          className="data-[has-links=true]:mt-10 md:data-[has-links=true]:mt-0 flex md:flex-col flex-wrap gap-x-4 gap-y-2 font-semibold"
          data-has-links={hasLinks}
          ref={externalLinksRef}
        >
          {/* Socials */}
          {github && (
            <Link icon={faGithub} href={github} label={t('pageHeader.github')} />
          )}
          {linkedIn && (
            <Link icon={faLinkedin} href={linkedIn} label={t('pageHeader.linkedIn')} />
          )}

          {/* Project related links */}
          {links?.demo && (
            <LiveDemo href={links.demo} label={t('pageHeader.demo')} />
          )}
          {links?.npm && (
            <Link icon={faNpm} href={links.npm} label={t('pageHeader.npm')} />
          )}
          {links?.repo && (
            <Link icon={faGithub} href={links.repo} label={t('pageHeader.repo')} />
          )}
        </div>
      </Container>
    </div>
  )
}
