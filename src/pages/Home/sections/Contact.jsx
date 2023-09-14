/* Contact.jsx */

import { useLayoutEffect, useRef } from 'react'
import { faArrowUp, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { gsap } from 'gsap'
import { Trans } from 'react-i18next'
import useConfetti from '../../../contexts/ConfettiContext'
import Confetti from '../../../components/Confetti'
import Container from '../../../components/Container'
import Form from '../../../components/Form'
import Highlight from '../../../components/Highlight'
import Paragraph from '../../../components/Paragraph'
import Section from '../../../components/Section'
import SectionTitle from '../../../components/SectionTitle'
import Divider from '../../../assets/jsx/Divider'

function Contact({ screenProps, t }) {
  // Contact section

  const { screenSize } = screenProps
  const { confetti } = useConfetti()
  const textRef = useRef(null)

  useLayoutEffect(() => {
    // Contact section animation

    const ctx = gsap.context((self) => {
      const items = self.selector('.contact-item')

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 32 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'bottom bottom',
            },
          }
        )
      })
    }, textRef)

    // Context cleanup
    return () => ctx.revert()
  }, [])

  return (
    <Section className="relative" id="contact">
      <Container
        className="px-6 md:px-8 xl:px-24 2xl:px-40 flex flex-col
        justify-center items-center"
      >
        <SectionTitle watermark={t('pages.home.contact.watermark')}>
          {t('pages.home.contact.heading')}
        </SectionTitle>
        <div
          className="grid lg:grid-cols-12 lg:grid-rows-2 gap-x-8
          md:gap-x-12 2xl:gap-x-14 place-items-center"
        >
          <div
            className="h-full lg:row-span-full lg:col-start-1
            lg:col-end-8 flex flex-col justify-between gap-8"
            ref={textRef}
          >
            <div className="flex flex-col gap-4">
              <Paragraph className="contact-item">
                <Trans components={{ highlight: <Highlight /> }}>
                  pages.home.contact.paragraphI
                </Trans>
              </Paragraph>
              <Paragraph className="contact-item">
                <Trans components={{ highlight: <Highlight /> }}>
                  pages.home.contact.paragraphII
                </Trans>
              </Paragraph>
            </div>
            <div className="contact-item flex flex-col gap-2">
              <MailTo t={t} />
              <Paragraph className="flex items-center gap-2" textWeight="font-bold">
                <FontAwesomeIcon
                  className="ml-0.5 mr-[3px] 2xl:ml-[3px] 2xl:mr-2.5 text-slate-800
                  dark:text-gray-200 color-transition"
                  icon={faLocationDot}
                />
                {t('pages.home.contact.location')}
              </Paragraph>
            </div>
          </div>
          {!screenSize.lg && <Divider />}
          <Form t={t} />
        </div>
      </Container>
      {confetti && <Confetti />}
    </Section>
  )
}

// Local components
function MailTo({ t }) {
  // E-mail link

  return (
    <Paragraph className="flex items-center" textWeight="font-bold">
      <FontAwesomeIcon
        className="2xl:mr-2 text-slate-800 dark:text-gray-200 color-transition"
        icon={faEnvelope}
      />
      <a
        className="peer ml-2 mr-3 flex items-center gap-2 text-slate-600
        dark:text-gray-400 hover:text-slate-800 hover:dark:text-gray-200
        focus-visible:text-slate-800 focus-visible:dark:text-gray-200 color-transition"
        href={`mailto:${t('pages.home.contact.email')}?subject=${t(
          'pages.home.contact.subject'
        )}`}
      >
        {t('pages.home.contact.email')}
      </a>
      <FontAwesomeIcon
        className="text-slate-600 dark:text-gray-400 peer-hover:translate-x-1
        peer-hover:text-slate-800 dark:peer-hover:text-gray-200
        peer-focus-visible:text-slate-800 dark:peer-focus-visible:text-gray-200
        peer-hover:-translate-y-1 peer-focus-visible:translate-x-1
        peer-focus-visible:-translate-y-1 rotate-45 transition-all"
        icon={faArrowUp}
      />
    </Paragraph>
  )
}

export default Contact
