/* NotFound/index.jsx */

import { faArrowLeft, faMapSigns } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Helmet } from 'react-helmet-async'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from '../../layout/Container'
import MainSection from '../../layout/Section/MainSection'
import CallToAction from '../../components/Button/CallToAction'
import Paragraph from '../../components/Text/Paragraph'

function NotFound() {
  // 404 page

  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('meta.title.notFound')}</title>
      </Helmet>
      <MainSection className="relative isolate h-[100dvh] grid place-items-center">
        <Container
          className="relative h-full px-6 md:px-12 2xl:px-32 flex flex-col items-center
          justify-center"
        >
          <h1 className="title-font text-5xl md:text-7xl 2xl:text-8xl">
            {t('pages.notFound.heading')} &nbsp;
            <FontAwesomeIcon icon={faMapSigns} />
          </h1>
          <Paragraph
            className="my-5 2xl:my-6 text-base md:text-xl 2xl:text-2xl
            2xl:leading-9 max-w-2xl 2xl:max-w-3xl text-center"
          >
            {t('pages.notFound.paragraph')}
          </Paragraph>
          <RouterLink className="mt-4 md:mt-5 2xl:mt-6 group" tabIndex="-1" to="/">
            <CallToAction textSize="text-sm md:text-base 2xl:text-lg">
              <FontAwesomeIcon
                className="not-found-button-hover group-focus-visible:-translate-x-1
                transition-transform"
                icon={faArrowLeft}
              />
              {t('pages.notFound.button')}
            </CallToAction>
          </RouterLink>
        </Container>
        <span
          className="absolute -z-10 text-slate-150 dark:text-dark-2 font-extrabold
          text-[25rem] md:text-[30rem] lg:text-[40rem] xl:text-[45rem] 2xl:text-[55rem]
          rotate-90 md:rotate-0 select-none pointer-events-none color-transition"
        >
          404
        </span>
      </MainSection>
    </>
  )
}

export default NotFound
