/* Download/index.jsx */

import { Trans } from 'react-i18next'
import Container from '../../../layout/Container'
import Section from '../../../layout/Section'
import Highlight from '../../../components/Text/Highlight'
import Paragraph from '../../../components/Text/Paragraph'
import SectionTitle from '../../../components/Text/SectionTitle'
import resumeList from '../../../constants/resume'
import ResumeCard from '../components/ResumeCard'

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
        <Paragraph className="mb-16 2xl:mb-20">
          <Trans components={{ highlight: <Highlight /> }}>
            pages.resume.download.paragraph
          </Trans>
        </Paragraph>
        <div className="flex flex-wrap items-center justify-center gap-12 2xl:gap-16">
          {resumeList.map(({ title, ...props }) => (
            <ResumeCard key={title} title={t(title)} {...props} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Download
