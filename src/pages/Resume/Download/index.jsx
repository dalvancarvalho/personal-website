/* Download/index.jsx */

import Container from '../../../layout/Container'
import Section from '../../../layout/Section/Regular'

import Paragraph from '../../../components/Text/Paragraph'
import SectionTitle from '../../../components/Text/SectionTitle'
import ResumeCard from '../components/ResumeCard'

import resumeList from '../constants/resume'

function Download(props) {
  // Download section

  const { t } = props

  return (
    <Section id="download">
      <Container className="h-full variable-padding">
        <SectionTitle
          animation={false}
          title={t('pages.resume.download.heading')}
          watermark={t('pages.resume.download.watermark')}
        />
        <Paragraph className="mb-16" i18nKey="pages.resume.download.paragraph" />
        <div className="flex flex-wrap items-center justify-center gap-12">
          {resumeList.map((props) => (
            <ResumeCard key={props.title} t={t} {...props} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Download
