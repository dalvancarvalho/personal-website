/* About/index.jsx */

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Trans } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import useAnimation from './animations/useAnimation'

import Container from '../../../layout/Container'
import Divider from '../../../layout/Divider'
import Grid from '../../../layout/Grid'
import Section from '../../../layout/Section'

import CallToAction from '../../../components/Button/CallToAction'
import DynamicImage from '../../../components/DynamicImage'
import Highlight from '../../../components/Text/Highlight'
import Paragraph from '../../../components/Text/Paragraph'
import SectionTitle from '../../../components/Text/SectionTitle'
import HoverText from './components/HoverText'
import QuotationMark from './components/QuotationMark'
import Tech from './components/Tech'
import Topic from './components/Topic'

import technologies from '../../../constants/technologies'

import stackDark from '../../../assets/svg/stack-dark.svg'
import stackLight from '../../../assets/svg/stack-light.svg'
import meBw from '../../../assets/webp/me-bw-bg.webp'
import meColor from '../../../assets/webp/me-color-bg.webp'

function About(props) {
  // About section

  const { t } = props
  const navigate = useNavigate()
  const refs = useAnimation()

  return (
    <Section id="about" ref={refs.scope}>
      <Container className="flex flex-col justify-center items-center">
        <SectionTitle
          title={t('pages.home.about.heading')}
          watermark={t('pages.home.about.watermark')}
        />
        <Grid>
          <div
            className="relative mt-4 lg:mt-0 mb-6 md:mb-10 lg:mb-0 col-start-1 col-end-6 w-72 md:w-96 lg:w-full h-96 md:h-[32rem] lg:h-full flex rounded-xl overflow-hidden drop-shadow-lg group"
            ref={refs.selfie}
          >
            <HoverText t={t} />
            <img
              alt={t('pages.home.about.meAltText')}
              className="absolute w-full h-full object-cover"
              loading="lazy"
              src={meColor}
            />
            <img
              alt={t('pages.home.about.meAltText')}
              className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              loading="lazy"
              src={meBw}
            />
          </div>
          <div
            className="relative isolate col-start-6 col-end-13 flex flex-col gap-6 2xl:gap-8"
            ref={refs.topics}
          >
            <QuotationMark ref={refs.quotation} />
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
            className="z-10 col-start-1 col-end-8 row-span-full flex flex-col gap-4 2xl:gap-6 items-start group"
            ref={refs.stack}
          >
            <h3 className="md:text-lg 2xl:text-xl font-bold text-slate-800 dark:text-gray-200 color-transition">
              {t('pages.home.about.subHeadingIV')}
            </h3>
            <ul className="w-11/12 md:w-7/12 lg:w-4/5 grid grid-cols-2 gap-y-3 md:gap-y-2">
              {technologies.map((props) => (
                <Tech key={props.name} {...props} />
              ))}
            </ul>
            <Paragraph className="my-2">
              <Trans components={{ highlight: <Highlight /> }}>
                pages.home.about.paragraphIV
              </Trans>
            </Paragraph>
            <CallToAction onClick={() => navigate('resume')}>
              {t('pages.home.about.button')}
              <FontAwesomeIcon
                className="absolute opacity-0 group-focus-visible/button:translate-x-2 group-focus-visible/button:opacity-100 fa-arrow-right-hover"
                icon={faArrowRight}
              />
            </CallToAction>
          </div>
          <div
            className="relative w-full h-full col-start-5 col-end-13 row-span-full hidden lg:flex flex-col items-start self-center justify-self-center gap-4 2xl:gap-6 select-none"
            ref={refs.image}
          >
            <DynamicImage
              alt={t('pages.home.about.stackAltText')}
              className="absolute w-full h-full"
              darkVersion={stackDark}
              lazy
              lightVersion={stackLight}
            />
          </div>
        </Grid>
      </Container>
    </Section>
  )
}

export default About
