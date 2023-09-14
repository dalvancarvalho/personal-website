/* About.jsx */

import { useLayoutEffect, useRef } from 'react'
import { faArrowUp, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { gsap } from 'gsap'
import { Trans } from 'react-i18next'
import useLanguage from '../../../contexts/LanguageContext'
import Container from '../../../components/Container'
import CTAButton from '../../../components/CTAButton'
import Highlight from '../../../components/Highlight'
import Paragraph from '../../../components/Paragraph'
import Section from '../../../components/Section'
import SectionTitle from '../../../components/SectionTitle'
import technologies from '../../../constants/technologies'
import Arrow from '../../../assets/jsx/Arrow'
import Divider from '../../../assets/jsx/Divider'
import QuotationMark from '../../../assets/jsx/QuotationMark'
import stackDark from '../../../assets/svg/stack-dark.svg'
import stackLight from '../../../assets/svg/stack-light.svg'
import meBw from '../../../assets/webp/me-bw-bg.webp'
import meColor from '../../../assets/webp/me-color-bg.webp'

function About({ screenProps, t }) {
  // About section

  const { screenSize } = screenProps
  const { language } = useLanguage()
  const topicsRef = useRef(null)
  const stackRef = useRef(null)

  useLayoutEffect(() => {
    // About section animation

    const ctx = gsap.context((self) => {
      const paragraphs = self.selector('.about-paragraph')
      const quotationMarks = self.selector('.about-quotation')

      paragraphs.forEach((paragraph) => {
        gsap.fromTo(
          paragraph,
          { opacity: 0, x: 32 },
          {
            opacity: 1,
            x: 0,
            duration: 1.25,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: paragraph,
              start: 'bottom bottom',
            },
          }
        )
      })

      quotationMarks.forEach((quotation) => {
        gsap.fromTo(
          quotation,
          { opacity: 0, x: 32 },
          {
            opacity: 1,
            x: 0,
            duration: 1.25,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: topicsRef.current,
              start: 'top 65%',
            },
          }
        )
      })
    }, topicsRef)

    gsap.fromTo(
      stackRef.current.children,
      { opacity: 0, x: 32 },
      {
        opacity: 1,
        x: 0,
        duration: 1.25,
        stagger: 0.125,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: stackRef.current,
          start: 'bottom bottom',
        },
      }
    )

    gsap.fromTo(
      '.about-selfie',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power3.in',
        scrollTrigger: {
          trigger: screenSize.md ? topicsRef.current : '.about-selfie',
          start: 'top 65%',
        },
      }
    )

    gsap.fromTo(
      '.about-stack',
      { opacity: 0, x: -32 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-stack',
          start: 'bottom bottom',
        },
      }
    )

    // Context cleanup
    return () => ctx.revert()
  }, [])

  return (
    <Section id="about">
      <Container
        className="px-6 md:px-8 xl:px-24 2xl:px-32 flex flex-col justify-center
        items-center"
      >
        <SectionTitle watermark={t('pages.home.about.watermark')}>
          {t('pages.home.about.heading')}
        </SectionTitle>
        <Grid>
          <div
            className="about-selfie relative mt-4 lg:mt-0 w-72 md:w-96 lg:w-full h-96
            md:h-[32rem] lg:h-full mb-6 md:mb-10 lg:mb-0 flex col-start-1 col-end-6
            group rounded-xl overflow-hidden drop-shadow-lg"
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
              className="absolute w-full h-full  object-cover opacity-0
              group-hover:opacity-100 transition-opacity duration-150"
              loading="lazy"
              src={meBw}
            />
          </div>
          <div
            className="relative isolate col-start-6 col-end-13 flex flex-col gap-6
            2xl:gap-8"
            ref={topicsRef}
          >
            <QuotationMark />
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
            className="z-10 col-start-1 col-end-8 flex flex-col gap-4 row-span-full
            2xl:gap-6 group"
            ref={stackRef}
          >
            <h3
              className="md:text-lg 2xl:text-xl font-bold text-slate-800
              dark:text-gray-200 color-transition"
            >
              {t('pages.home.about.subHeadingIV')}
            </h3>
            <ul className="w-11/12 md:w-7/12 lg:w-4/5 grid grid-cols-2 gap-y-3 md:gap-y-2">
              {technologies.map(({ name, url }) => (
                <li
                  className="max-w-max text-sm md:text-base 2xl:text-lg font-bold
                  text-slate-800 dark:text-gray-200 color-transition"
                  key={name}
                >
                  <a
                    className="flex items-center gap-2 hover:translate-x-1
                    focus-visible:translate-x-1 transition-transform duration-150"
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="text-sm 2xl:text-base text-accent color-transition"
                      icon={faCaretRight}
                    />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <Paragraph className="my-2">
              <Trans components={{ highlight: <Highlight /> }}>
                pages.home.about.paragraphIV
              </Trans>
            </Paragraph>
            <a
              className="max-w-max"
              href={language.value === 'ptBR' ? '/resume-pt-br.pdf' : 'resume-en-us.pdf'}
              rel="noopener noreferrer"
              tabIndex="-1"
              target="_blank"
            >
              <CTAButton className="group/button">
                {t('pages.home.about.button')}
                <FontAwesomeIcon
                  className="rotate-45 transition-transform duration-150
                  group-hover/button:translate-x-1 group-hover/button:-translate-y-1
                  group-focus-visible/button:translate-x-1
                  group-focus-visible/button:-translate-y-1"
                  icon={faArrowUp}
                />
              </CTAButton>
            </a>
          </div>
          <div
            className="about-stack relative w-full h-full col-start-5 col-end-13
            row-span-full hidden lg:flex flex-col items-start self-center
            justify-self-center gap-4 2xl:gap-6 select-none"
          >
            <img
              alt={t('pages.home.about.stackAltText')}
              className="absolute w-full h-full opacity-100 dark:opacity-0
              transition-opacity duration-300"
              loading="lazy"
              src={stackLight}
            />
            <img
              alt={t('pages.home.about.stackAltText')}
              className="absolute w-full h-full opacity-0 dark:opacity-100
              transition-opacity duration-300"
              loading="lazy"
              src={stackDark}
            />
          </div>
        </Grid>
      </Container>
    </Section>
  )
}

// Local components
function Grid({ children }) {
  return (
    <div className="flex flex-col items-center lg:grid grid-cols-12 gap-12 2xl:gap-14">
      {children}
    </div>
  )
}

function HoverText({ t }) {
  return (
    <div
      className="absolute z-20 top-1/4 right-[42%] md:right-[45%] flex flex-col
      select-none"
    >
      <Arrow />
      <p
        className="text-base md:text-xl text-slate-800 text-center font-rock-salt
        -translate-x-1/2 -translate-y-1/4 rotate-3 scale-50 opacity-0
        group-hover:scale-100 group-hover:opacity-100 duration-150"
        title={t('pages.home.about.hoverTextTitle')}
      >
        it&apos;s-a me,
        <br />
        dalvan!
      </p>
    </div>
  )
}

function Topic({ heading, text }) {
  return (
    <div className="about-paragraph">
      <h3
        className="mb-1 2xl:mb-2 flex items-center gap-2 md:text-lg 2xl:text-xl
        font-bold text-slate-800 dark:text-gray-200 color-transition"
      >
        {heading}
      </h3>
      <Paragraph className="ml-4">
        <Trans components={{ highlight: <Highlight /> }}>{text}</Trans>
      </Paragraph>
    </div>
  )
}

export default About
