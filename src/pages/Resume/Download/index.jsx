/* Download/index.jsx */

import Container from '../../../layout/Container'
import Section from '../../../layout/Section/Regular'

import Paragraph from '../../../components/Text/Paragraph'
import SectionTitle from '../../../components/Text/SectionTitle'
import ResumeCard from './components/ResumeCard'

import RESUMES from './constants/resumes'

function Download({ t }) {
  // Download section

  return (
    <Section id="download">
      <Container className="h-full variable-padding">
        <SectionTitle
          animation={false}
          title={t('pages.resume.download.heading')}
          watermark={t('pages.resume.download.watermark')}
        />
        <Paragraph i18nKey="pages.resume.download.paragraph" />
        <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-12">
          {RESUMES.map((props) => (
            <ResumeCard key={props.title} t={t} {...props} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Download
