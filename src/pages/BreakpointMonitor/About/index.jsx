/* About/index.jsx */

import { Container } from '../../../layout/Container'
import { Section } from '../../../layout/Section/Regular'

import { Paragraph } from '../../../components/Text/Paragraph'
import { Heading } from '../../../components/Text/Heading'

import demo from '../../../assets/webm/tbm-demo.webm'
import poster from '../../../assets/webp/tbm-poster.webp'

export function About({ t }) {
  // In progress...

  return (
    <Section id="about">
      <Container className="h-full variable-padding">
        <Heading
          animate={false}
          heading="pages.breakpointMonitor.about.heading"
          sectionName="pages.breakpointMonitor.about.sectionName"
        />
        <Paragraph
          className="mb-8 md:mb-12"
          i18nKey="pages.breakpointMonitor.about.paragraph"
        />
        <h3 className="mb-4 md:mb-6 md:text-lg font-bold text-slate-800 dark:text-gray-200 color-transition">
          {t('pages.breakpointMonitor.about.subHeading')}
        </h3>
        <video src={demo} poster={poster} controls></video>
      </Container>
    </Section>
  )
}
