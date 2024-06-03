/* Introduction/index.jsx */

import Container from '../../../layout/Container'
import Section from '../../../layout/Section/Regular'

import CodeSnippet from '../../../components/CodeSnippet'
import Paragraph from '../../../components/Text/Paragraph'
import SectionHeading from '../../../components/Text/SectionHeading'

import SNIPPET_MODEL from '../../../constants/snippets'

export default function Introduction() {
  // In progress...

  return (
    <Section id="intro">
      <Container className="h-full variable-padding">
        <SectionHeading
          animation={false}
          className="pt-9 md:pt-16"
          heading="pages.personalWebsite.intro.heading"
          watermark="pages.personalWebsite.intro.watermark"
        />
        <Paragraph i18nKey="misc.comingSoon" />
        <CodeSnippet {...SNIPPET_MODEL} />
      </Container>
    </Section>
  )
}
