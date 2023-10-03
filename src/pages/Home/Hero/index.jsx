/* Hero/index.jsx */

import { Link as ScrollLink } from 'react-scroll'
import { Parallax } from 'react-scroll-parallax'
import { Trans } from 'react-i18next'
import useHeroAnimation from './animations/useHeroAnimation'
import Section from '../../../layout/Section'
import CallToAction from '../../../components/Button/CallToAction'
import SecondaryButton from '../../../components/Button/SecondaryButton'
import DynamicImage from '../../../components/DynamicImage'
import Highlight from '../../../components/Text/Highlight'
import Paragraph from '../../../components/Text/Paragraph'
import bgDark from '../../../assets/svg/bg-dark.svg'
import bgLight from '../../../assets/svg/bg-light.svg'

function Hero(props) {
  // Hero section

  const { t } = props
  useHeroAnimation()

  return (
    <Section className="relative isolate h-screen overflow-hidden" id="home">
      <Parallax
        className="h-full container px-6 m-auto grid place-content-center"
        opacity={[1, -0.5]}
        shouldAlwaysCompleteAnimation
      >
        <Parallax
          className="w-full sm:max-w-lg md:max-w-xl 2xl:max-w-2xl m-auto flex flex-col
          items-start"
          opacity={[1, 0]}
          scale={[1, 0.8]}
          shouldAlwaysCompleteAnimation
        >
          <h1 className="hero-content title-font text-5xl md:text-7xl 2xl:text-8xl">
            <Trans
              components={{
                small: (
                  <span
                    className="block mb-3 md:mb-4 2xl:mb-5 font-medium text-lg
                    md:text-2xl 2xl:text-3xl tracking-tighter"
                  />
                ),
                thin: <span className="font-normal" />,
              }}
            >
              pages.home.hero.heading
            </Trans>
          </h1>
          <Paragraph
            className="hero-content my-5 2xl:my-6 text-base md:text-xl 2xl:text-2xl
            2xl:leading-9"
          >
            <Trans components={{ highlight: <Highlight /> }}>
              pages.home.hero.paragraph
            </Trans>
          </Paragraph>
          <div className="hero-content mt-4 md:mt-5 2xl:mt-6 flex gap-8 2xl:gap-10">
            <ScrollLink
              href="contact"
              smooth={true}
              spy={true}
              tabIndex="-1"
              to="contact"
            >
              <CallToAction textSize="text-sm md:text-base 2xl:text-lg">
                {t('pages.home.hero.primaryButton')}
              </CallToAction>
            </ScrollLink>
            <ScrollLink
              href="projects"
              smooth={true}
              spy={true}
              tabIndex="-1"
              to="projects"
            >
              <SecondaryButton textSize="text-sm md:text-base 2xl:text-lg">
                {t('pages.home.hero.secondaryButton')}
              </SecondaryButton>
            </ScrollLink>
          </div>
        </Parallax>
      </Parallax>
      <Parallax
        className="hero-bg absolute bottom-0 -z-10 h-full w-full"
        opacity={[1, -0.5]}
        shouldAlwaysCompleteAnimation
        translateY={[0, 70]}
      >
        <DynamicImage
          alt={t('pages.home.hero.bgAltText')}
          className="absolute bottom-0 h-[90%] w-full object-cover"
          darkVersion={bgDark}
          lightVersion={bgLight}
        />
      </Parallax>
    </Section>
  )
}

export default Hero
