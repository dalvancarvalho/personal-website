/* Contact/index.jsx */

import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Trans } from 'react-i18next'
import useConfetti from '../../../context/ConfettiContext'
import useContactAnimation from './animations/useContactAnimation'
import Container from '../../../layout/Container'
import Divider from '../../../layout/Divider'
import Grid from '../../../layout/Grid'
import Section from '../../../layout/Section'
import ContactForm from '../../../components/ContactForm'
import Highlight from '../../../components/Text/Highlight'
import Paragraph from '../../../components/Text/Paragraph'
import SectionTitle from '../../../components/Text/SectionTitle'
import Confetti from './components/Confetti'
import MailTo from './components/MailTo'

function Contact(props) {
  // Contact section

  const { screenProps, t } = props
  const { screenSize } = screenProps
  const { confetti } = useConfetti()
  const refs = useContactAnimation()

  return (
    <Section className="relative" id="contact" ref={refs.scope}>
      <Container
        className="px-6 md:px-8 xl:px-24 2xl:px-40 flex flex-col
        justify-center items-center"
      >
        <SectionTitle
          title={t('pages.home.contact.heading')}
          watermark={t('pages.home.contact.watermark')}
        />
        <Grid>
          <div className="h-full col-start-1 col-end-8 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4 2xl:gap-6">
              <Paragraph className="contact-paragraph">
                <Trans components={{ highlight: <Highlight /> }}>
                  pages.home.contact.paragraphI
                </Trans>
              </Paragraph>
              <Paragraph className="contact-paragraph">
                <Trans components={{ highlight: <Highlight /> }}>
                  pages.home.contact.paragraphII
                </Trans>
              </Paragraph>
            </div>
            <div className="contact-paragraph flex flex-col gap-2">
              <MailTo t={t} />
              <Paragraph className="flex items-center gap-2" fontWeight="font-bold">
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
          <div className="col-start-8 col-end-13 w-full">
            <ContactForm ref={refs.form} t={t} />
          </div>
        </Grid>
      </Container>
      {confetti && <Confetti />}
    </Section>
  )
}

export default Contact
