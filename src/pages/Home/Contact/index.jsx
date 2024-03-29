/* Contact/index.jsx */

import { lazy } from 'react'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Toaster } from 'sonner'

import useConfetti from '../../../context/ConfettiContext'
import useAnimate from './animations/useAnimate'

import Container from '../../../layout/Container'
import Divider from '../../../layout/Divider'
import Grid from '../../../layout/Grid'
import Section from '../../../layout/Section/Regular'

import ContactForm from '../../../components/ContactForm'
import Paragraph from '../../../components/Text/Paragraph'
import SectionTitle from '../../../components/Text/SectionTitle'
import MailTo from './components/MailTo'

// Dynamic imports
const Confetti = lazy(() => import('./components/Confetti'))

function Contact(props) {
  // Contact section

  const { screenSize, t } = props

  const { confetti } = useConfetti()
  const refs = useAnimate()

  return (
    <>
      <Section className="relative" id="contact" ref={refs.scope}>
        <Container className="flex flex-col justify-center items-center">
          <SectionTitle
            title={t('pages.home.contact.heading')}
            watermark={t('pages.home.contact.watermark')}
          />
          <Grid className="gap-x-12 2xl:gap-x-14">
            <div className="h-full col-start-1 col-end-8 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-4 2xl:gap-6">
                <Paragraph
                  className="contact-paragraph"
                  i18nKey="pages.home.contact.paragraphI"
                />
                <Paragraph
                  className="contact-paragraph"
                  i18nKey="pages.home.contact.paragraphII"
                />
              </div>
              <div className="contact-paragraph flex flex-col gap-2">
                <MailTo t={t} />
                <div className="max-w-max flex items-center gap-2 2xl:gap-3">
                  <FontAwesomeIcon
                    className="w-[18px] text-lg text-slate-800 dark:text-gray-200 color-transition"
                    icon={faLocationDot}
                  />
                  <Paragraph i18nKey="pages.home.contact.location" variant="base-bold" />
                </div>
              </div>
            </div>
            {!screenSize.lg && <Divider />}
            <div className="col-start-8 col-end-13 w-full">
              <ContactForm ref={refs.form} t={t} />
            </div>
          </Grid>
        </Container>
        {confetti && <Confetti />}
      </Section>
      <Toaster position="bottom-center" />
    </>
  )
}

export default Contact
