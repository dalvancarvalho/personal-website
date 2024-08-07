/* NotFound/index.jsx */

import { faArrowLeft, faMapSigns } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Helmet } from 'react-helmet-async'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useScreenProps } from '../../hooks/useScreenProps'

import { Container } from '../../layout/Container'
import { MainSection } from '../../layout/Section/Main'

import { Button } from '../../components/Button'
import { Paragraph } from '../../components/Text/Paragraph'

export default function NotFound() {
  // 404 page

  const { t } = useTranslation()
  const { isPortraitMode } = useScreenProps()

  return (
    <>
      <Helmet>
        <title>{t('meta.title.notFound')}</title>
      </Helmet>
      <MainSection className="relative isolate h-dvh min-h-[600px] grid place-items-center">
        <Container className="relative h-full px-6 md:px-12 2xl:px-32 flex flex-col items-center justify-center">
          <h1 className="title-font text-5xl md:text-7xl 2xl:text-8xl">
            {t('pages.notFound.heading')} &nbsp;
            <FontAwesomeIcon icon={faMapSigns} />
          </h1>
          <Paragraph
            className="my-5 2xl:my-6 max-w-2xl 2xl:max-w-3xl text-center text-pretty"
            i18nKey="pages.notFound.paragraph"
            variant="hero"
          />
          <RouterLink className="mt-2 md:mt-5 2xl:mt-6 group" tabIndex="-1" to="/">
            <Button className="md:text-base 2xl:text-lg" variant="primary">
              <FontAwesomeIcon
                className="absolute left-6 opacity-0 transition-[transform,opacity] ease-elastic-out duration-300 delay-75
                group-hover/button:-translate-x-2
                group-hover/button:opacity-100
                group-focus-visible/button:-translate-x-2
                group-focus-visible/button:opacity-100"
                icon={faArrowLeft}
              />
              {t('pages.notFound.button')}
            </Button>
          </RouterLink>
        </Container>
        <span
          className={`absolute -z-10 text-slate-150 dark:text-dark-5 font-extrabold text-[25rem] md:text-[30rem] lg:text-[40rem] xl:text-[45rem] 2xl:text-[55rem] select-none pointer-events-none color-transition ${
            isPortraitMode ? 'rotate-90' : 'rotate-0'
          }`}
        >
          404
        </span>
      </MainSection>
    </>
  )
}
