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
      <Container className="h-full px-6 sm:px-8 xl:px-40 2xl:px-64">
        <SectionTitle
          animation={false}
          title={t('pages.resume.download.heading')}
          watermark={t('pages.resume.download.watermark')}
        />
        <Paragraph
          className="mb-16 2xl:mb-20"
          i18nKey="pages.resume.download.paragraph"
        />
        <div className="flex flex-wrap items-center justify-center gap-12 2xl:gap-16">
          {resumeList.map((props) => (
            <ResumeCard key={props.title} t={t} {...props} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Download
