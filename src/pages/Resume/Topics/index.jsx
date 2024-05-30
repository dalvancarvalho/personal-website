/* Topics/index.jsx */

import Container from '../../../layout/Container'
import Section from '../../../layout/Section/Regular'

import Accordion from '../../../components/Accordion'
import Paragraph from '../../../components/Text/Paragraph'
import SectionTitle from '../../../components/Text/SectionTitle'
import ResumeTopic from './components/ResumeTopic'

import RESUME_TOPICS from './constants/resumeTopics'

function Topics({ t }) {
  // Topics section

  return (
    <Section id="topics">
      <Container className="h-full variable-padding">
        <SectionTitle
          animation={false}
          className="pt-9 md:pt-16"
          title={t('pages.resume.topics.heading')}
          watermark={t('pages.resume.topics.watermark')}
        />
        <Paragraph i18nKey="pages.resume.topics.paragraph" />
        <Accordion className="mt-12 md:mt-16" type="multiple">
          {RESUME_TOPICS.map((props, index) => (
            <ResumeTopic key={props.id} index={index} t={t} {...props} />
          ))}
        </Accordion>
      </Container>
    </Section>
  )
}

export default Topics
