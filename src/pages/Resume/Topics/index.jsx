/* Topics/index.jsx */

import Container from '../../../layout/Container'
import Section from '../../../layout/Section/Regular'

import Accordion from '../../../components/Accordion'
import Paragraph from '../../../components/Text/Paragraph'
import Heading from '../../../components/Text/Heading'
import ResumeTopic from './components/ResumeTopic'

import RESUME_TOPICS from './constants/resumeTopics'

export default function Topics({ t }) {
  // Topics section

  return (
    <Section id="topics">
      <Container className="h-full variable-padding">
        <Heading
          animate={false}
          heading="pages.resume.topics.heading"
          sectionName="pages.resume.topics.sectionName"
        />
        <Paragraph i18nKey="pages.resume.topics.paragraph" />
        <Accordion className="mt-12 md:mt-16" type="multiple">
          {RESUME_TOPICS.map(({ id, ...props }, index) => (
            <ResumeTopic key={id} index={index} t={t} {...props} />
          ))}
        </Accordion>
      </Container>
    </Section>
  )
}
