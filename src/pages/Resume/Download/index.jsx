/* Download/index.jsx */

import Container from '../../../layout/Container'
import Section from '../../../layout/Section/Regular'

import Paragraph from '../../../components/Text/Paragraph'
import SectionHeading from '../../../components/Text/SectionHeading'
import ResumeCard from './components/ResumeCard'

import RESUMES from './constants/resumes'

export default function Download({ t }) {
  // Download section

  return (
    <Section id="download">
      <Container className="h-full variable-padding">
        <SectionHeading
          animation={false}
          heading="pages.resume.download.heading"
          watermark="pages.resume.download.watermark"
        />
        <Paragraph i18nKey="pages.resume.download.paragraph" />
        <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-12">
          {RESUMES.map(({ id, ...props }) => (
            <ResumeCard key={id} t={t} {...props} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
