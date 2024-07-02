/* Introduction/index.jsx */

import { Container } from '../../../layout/Container'
import { Section } from '../../../layout/Section/Regular'

import { CodeSnippet } from '../../../components/CodeSnippet'
import { Paragraph } from '../../../components/Text/Paragraph'
import { Heading } from '../../../components/Text/Heading'

import { SNIPPET_MODEL } from '../../../constants/snippets'

export function Introduction() {
  // In progress...

  return (
    <Section id="intro">
      <Container className="h-full variable-padding">
        <Heading
          animate={false}
          heading="pages.personalWebsite.intro.heading"
          sectionName="pages.personalWebsite.intro.sectionName"
        />
        <Paragraph i18nKey="misc.comingSoon" />
        <CodeSnippet {...SNIPPET_MODEL} />
      </Container>
    </Section>
  )
}
