/* About/index.jsx */

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

import useAnimate from './animations/useAnimate'

import Container from '../../../layout/Container'
import Divider from '../../../layout/Divider'
import Grid from '../../../layout/Grid'
import Section from '../../../layout/Section/Regular'

import Button from '../../../components/Button'
import Paragraph from '../../../components/Text/Paragraph'
import SectionTitle from '../../../components/Text/SectionTitle'
import HoverText from './components/HoverText'
import QuotationMark from './components/QuotationMark'
import Tech from './components/Tech'
import Topic from './components/Topic'

import technologies from './constants/technologies'

import stack from '../../../assets/svg/stack.svg'
import meBw from '../../../assets/webp/me-bw-bg.webp'
import meColor from '../../../assets/webp/me-color-bg.webp'

function About(props) {
  // About section

  const { t } = props

  const navigate = useNavigate()
  const animation = useAnimate()

  return (
    <Section id="about" ref={animation.scope}>
      <Container className="flex flex-col justify-center items-center">
        <SectionTitle
          title={t('pages.home.about.heading')}
          watermark={t('pages.home.about.watermark')}
        />
        <Grid className="gap-12">
          <div
            className="relative mt-4 lg:mt-0 mb-6 md:mb-10 lg:mb-0 col-start-1 col-end-6 w-72 md:w-96 lg:w-full h-96 md:h-[32rem] lg:h-full flex rounded-xl overflow-hidden drop-shadow-lg group"
            ref={animation.selfie}
          >
            <HoverText t={t} />
            <img
              alt={t('pages.home.about.meAltText')}
              className="absolute size-full object-cover"
              loading="lazy"
              src={meColor}
            />
            <img
              alt={t('pages.home.about.meAltText')}
              className="absolute size-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              loading="lazy"
              src={meBw}
            />
          </div>
          <div
            className="relative isolate col-start-6 col-end-13 flex flex-col gap-6"
            ref={animation.topics}
          >
            <QuotationMark ref={animation.quotation} />
            <Topic
              heading={t('pages.home.about.subHeadingI')}
              text="pages.home.about.paragraphI"
            />
            <Topic
              heading={t('pages.home.about.subHeadingII')}
              text="pages.home.about.paragraphII"
            />
            <Topic
              heading={t('pages.home.about.subHeadingIII')}
              text="pages.home.about.paragraphIII"
            />
          </div>
        </Grid>
        <Divider />
        <Grid>
          <div
            className="z-10 col-start-1 col-end-8 row-span-full flex flex-col gap-4 items-start group"
            ref={animation.stack}
          >
            <h3 className="md:text-lg font-bold text-slate-800 dark:text-gray-200 color-transition">
              {t('pages.home.about.subHeadingIV')}
            </h3>
            <ul className="w-11/12 md:w-7/12 lg:w-4/5 grid grid-cols-2 gap-y-3 md:gap-y-2">
              {technologies.map((props) => (
                <Tech key={props.name} {...props} />
              ))}
            </ul>
            <Paragraph className="my-2" i18nKey="pages.home.about.paragraphIV" />
            <Button variant="primary" callback={() => navigate('resume')}>
              {t('pages.home.about.button')}
              <FontAwesomeIcon
                className="absolute opacity-0 group-focus-visible/button:translate-x-2 group-focus-visible/button:opacity-100 fa-arrow-right-hover"
                icon={faArrowRight}
              />
            </Button>
          </div>
          <div
            className="size-full col-start-5 col-end-13 row-span-full hidden lg:block"
            ref={animation.image}
          >
            <img
              alt={t('pages.home.about.stackAltText')}
              className="size-full opacity-100 dark:opacity-10 transition-opacity duration-300 select-none"
              loading="lazy"
              src={stack}
            />
          </div>
        </Grid>
      </Container>
    </Section>
  )
}

export default About
