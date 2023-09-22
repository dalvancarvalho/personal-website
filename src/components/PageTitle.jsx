/* PageTitle.jsx */

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import Container from './Container'
import Paragraph from './Paragraph'

function PageTitle({ demoUrl, githubUrl, id, name, t }) {
  // Displays the title of the page (H1)

  return (
    <div
      className="w-full pt-32 md:pt-44 pb-4 md:pb-10 bg-slate-150 dark:bg-dark-2
      color-transition"
      id={id}
    >
      <Container
        className="px-6 sm:px-8 xl:px-40 flex flex-col md:flex-row justify-end
        md:items-end md:justify-between"
      >
        <div>
          <Breadcrumbs t={t} />
          <h1
            className="mt-3 md:mt-4 text-[2.5rem] leading-10 md:text-5xl title-font
            text-slate-800 dark:text-gray-200 color-transition"
          >
            {t(name)}
          </h1>
        </div>
        <div className="mt-10 md:mt-0 md:mb-1 flex flex-col gap-2 font-semibold">
          <Paragraph
            className="flex items-center"
            textSize="text-base"
            textWeight="font-semibold"
          >
            <FontAwesomeIcon
              className="text-[1.5rem] text-slate-800 dark:text-gray-200
              color-transition"
              icon={faGithub}
            />
            <a
              className="peer ml-2 mr-3 flex items-center gap-2 text-slate-600
              dark:text-gray-400 hover:text-slate-800 hover:dark:text-gray-200
              focus-visible:text-slate-800 focus-visible:dark:text-gray-200
              color-transition"
              href={githubUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('title.github')}
            </a>
            <FontAwesomeIcon className="external-access-arrow" icon={faArrowUp} />
          </Paragraph>
          {demoUrl && (
            <Paragraph
              className="max-w-max flex items-center"
              textSize="text-base"
              textWeight="font-semibold"
            >
              <span className="relative w-6 h-6">
                <FontAwesomeIcon
                  className="absolute top-[25%] left-[25%] text-xs text-green-500
                  animate-ping"
                  icon={faCircle}
                />
                <FontAwesomeIcon
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
                  text-[0.5rem] text-green-500"
                  icon={faCircle}
                />
              </span>
              <a
                className="peer ml-2 mr-3 flex items-center gap-2 text-slate-600
                dark:text-gray-400 hover:text-slate-800 hover:dark:text-gray-200
                focus-visible:text-slate-800 focus-visible:dark:text-gray-200
                color-transition"
                href={demoUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {t('title.demo')}
              </a>
              <FontAwesomeIcon className="external-access-arrow" icon={faArrowUp} />
            </Paragraph>
          )}
        </div>
      </Container>
    </div>
  )
}

// Local components
function Breadcrumbs({ t }) {
  const navigate = useNavigate()

  return (
    <div
      className="max-w-max ml-px flex items-center font-medium font-mark-pro text-base
      md:text-lg tracking-tighter"
    >
      <button
        className="text-slate-500 dark:text-gray-400 hover:text-slate-900
        dark:hover:text-gray-200 focus-visible:text-slate-900
        dark:focus-visible:text-gray-200 tracking-tighter color-transition"
        onClick={() => navigate('/')}
      >
        {t('title.breadcrumbs.home')}
      </button>
      <FontAwesomeIcon
        className="mx-3 text-slate-500 dark:text-gray-400 text-[0.6rem] md:text-xs
        color-transition"
        icon={faChevronRight}
      />
      <p className="text-slate-800 dark:text-gray-200 color-transition">
        {t('title.breadcrumbs.featured')}
      </p>
    </div>
  )
}

export default PageTitle
