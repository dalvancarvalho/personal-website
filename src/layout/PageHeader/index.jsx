/* PageHeader/index.jsx */

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Container from '../Container'

import Breadcrumbs from './components/Breadcrumbs'
import Link from './components/Link'
import LiveDemo from './components/LiveDemo'

export default function PageHeader({ github, heading, linkedIn, links, section, t }) {
  // Displays the main heading of the page (H1) along with some useful links

  return (
    <div
      className="w-full pt-32 md:pt-44 pb-4 md:pb-10 bg-slate-150 dark:bg-dark-5 color-transition"
      id="home"
    >
      <Container className="variable-padding flex flex-col md:flex-row justify-end md:items-end md:justify-between">
        <div>
          <Breadcrumbs section={section} t={t} />
          <h1 className="my-4 md:mb-0 text-[2.5rem] leading-10 md:text-5xl title-font text-slate-800 dark:text-gray-200 color-transition">
            {t(heading)}
          </h1>
        </div>

        {/* Links for socials, demos and repos (if any) are rendered here */}
        <div className="flex flex-col gap-2 font-semibold">
          {github && (
            <Link icon={faGithub} href={github} label={t('pageHeader.github')} />
          )}
          {linkedIn && (
            <Link icon={faLinkedin} href={linkedIn} label={t('pageHeader.linkedIn')} />
          )}
          {links?.demo && <LiveDemo href={links.demo} label={t('pageHeader.demo')} />}
          {links?.repo && (
            <Link icon={faGithub} href={links.repo} label={t('pageHeader.repo')} />
          )}
        </div>
      </Container>
    </div>
  )
}
