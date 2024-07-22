/* Hero/index.jsx */

import { Link as ScrollLink } from 'react-scroll'

import { useParallax } from './hooks/useParallax'
import { useAnimate } from './animations/useAnimate'

import { Section } from '../../../layout/Section/Regular'

import { Button } from '../../../components/Button'
import { Paragraph } from '../../../components/Text/Paragraph'
import { Translation } from '../../../components/Text/Translation'
import { DynamicBg } from './components/DynamicBg'

import bgDark from '../../../assets/svg/bg-dark.svg'
import bgLight from '../../../assets/svg/bg-light.svg'

export function Hero({ t }) {
  // Hero section

  const parallax = useParallax()
  const animation = useAnimate(parallax)

  return (
    <Section
      className="relative isolate h-dvh min-h-[600px] max-h-[1440px] overflow-hidden"
      id="home"
      ref={animation.scope}
    >
      <div className="px-6 h-full grid place-content-center">
        {/* Parallax container */}
        <div
          className="m-auto w-full sm:max-w-md md:max-w-xl flex flex-col items-start gap-5 group/hero"
          ref={parallax.text}
        >
          {/* Heading */}
          <h1 className="title-font text-5xl md:text-7xl">
            <Translation>pages.home.hero.heading</Translation>
          </h1>

          {/* Paragraph */}
          <Paragraph i18nKey="pages.home.hero.paragraph" variant="hero" />

          {/* Buttons */}
          <div className="mt-2 md:mt-5 flex gap-10 md:gap-12">
            <ScrollLink href="contact" spy={true} tabIndex="-1" to="contact">
              <Button className="md:text-base md:!px-12 md:!py-3.5" variant="primary">
                {t('pages.home.hero.primaryButton')}
              </Button>
            </ScrollLink>
            <ScrollLink href="projects" spy={true} tabIndex="-1" to="projects">
              <Button className="md:text-base md:!py-3.5" variant="secondary">
                {t('pages.home.hero.secondaryButton')}
              </Button>
            </ScrollLink>
          </div>
        </div>
      </div>

      {/* Dynamic background */}
      <div className="absolute bottom-0 -z-10 size-full" ref={parallax.bg}>
        <DynamicBg
          alt={t('pages.home.hero.bgAltText')}
          className="absolute bottom-0 h-[90%] w-full object-cover"
          darkVersion={bgDark}
          lightVersion={bgLight}
        />
      </div>
    </Section>
  )
}
