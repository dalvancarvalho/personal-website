/* PageHeader/index.jsx */

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Container from '../Container'
import Breadcrumbs from './components/Breadcrumbs'
import Link from './components/Link'
import LiveDemo from './components/LiveDemo'

function PageHeader(props) {
  // Displays the title of the page (H1) along with some useful links and breadcrumbs

  const { demoUrl, githubUrl, id, linkedInUrl, name, subject, t } = props

  return (
    <div
      className="w-full pt-32 md:pt-44 pb-4 md:pb-10 bg-slate-150 dark:bg-dark-5
      color-transition"
      id={id}
    >
      <Container
        className="px-6 sm:px-8 xl:px-40 2xl:px-64 flex flex-col md:flex-row justify-end
        md:items-end md:justify-between"
      >
        <div>
          <Breadcrumbs subject={t(subject)} t={t} />
          <h1
            className="mt-4 text-[2.5rem] leading-10 md:text-5xl title-font
            text-slate-800 dark:text-gray-200 color-transition"
          >
            {t(name)}
          </h1>
        </div>
        <div className="mt-10 md:mt-0 md:mb-1 flex flex-col gap-2 font-semibold">
          {linkedInUrl && (
            <Link icon={faLinkedin} href={linkedInUrl} text={t('pageHeader.linkedIn')} />
          )}
          {githubUrl && (
            <Link icon={faGithub} href={githubUrl} text={t('pageHeader.github')} />
          )}
          {demoUrl && <LiveDemo href={demoUrl} text={t('pageHeader.demo')} />}
        </div>
      </Container>
    </div>
  )
}

export default PageHeader
