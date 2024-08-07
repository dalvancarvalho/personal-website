/* Contact/index.jsx */

import { useConfetti } from '../../../context/ConfettiContext'
import { useAnimate } from './animations/useAnimate'

import { Container } from '../../../layout/Container'
import { Divider } from '../../../layout/Divider'
import { Grid } from '../../../layout/Grid'
import { Section } from '../../../layout/Section/Regular'

import { ContactForm } from '../../../components/ContactForm'
import { Heading } from '../../../components/Text/Heading'
import { Paragraph } from '../../../components/Text/Paragraph'
import { Confetti } from './components/Confetti'
import { ContactInfo } from './components/ContactInfo'

import { CONTACTS } from './constants/contacts'

export function Contact({ screenSize, t }) {
  // Contact section

  const { confetti } = useConfetti()
  const animation = useAnimate()

  return (
    <Section className="relative" id="contact" ref={animation.scope}>
      <Container>
        <Heading
          heading="pages.home.contact.heading"
          sectionName="pages.home.contact.sectionName"
        />
        <Grid className="gap-x-12">
          <div className="h-full col-start-1 col-end-8 flex flex-col justify-between gap-y-12">
            <div className="flex flex-col gap-4">
              <Paragraph
                className="contact-paragraph"
                i18nKey="pages.home.contact.paragraphI"
              />
              <Paragraph
                className="contact-paragraph"
                i18nKey="pages.home.contact.paragraphII"
              />
            </div>
            <div className="w-max flex flex-col gap-2.5" ref={animation.contacts}>
              {CONTACTS.map(({ id, ...props }) => (
                <ContactInfo key={id} t={t} {...props} />
              ))}
            </div>
          </div>
          {!screenSize.lg && <Divider />}
          <div className="col-start-8 col-end-13 w-full">
            <ContactForm />
          </div>
        </Grid>
      </Container>
      {confetti && <Confetti />}
    </Section>
  )
}
