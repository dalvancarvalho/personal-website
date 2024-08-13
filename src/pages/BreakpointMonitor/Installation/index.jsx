/* Installation/index.jsx */

import { Container } from '../../../layout/Container'
import { Section } from '../../../layout/Section/Regular'

import { CodeSnippet } from '../../../components/CodeSnippet'
import { Paragraph } from '../../../components/Text/Paragraph'
import { Heading } from '../../../components/Text/Heading'

import { breakpointMonitor } from '../../../constants/snippets'

export function Installation() {
  // In progress...

  return (
    <Section id="install">
      <Container className="h-full variable-padding">
        <Heading
          animate={false}
          heading="pages.breakpointMonitor.install.heading"
          sectionName="pages.breakpointMonitor.install.sectionName"
          sectionNameColor="text-slate-250 dark:text-dark-3"
        />
        <Paragraph i18nKey="misc.comingSoon" />
        <CodeSnippet {...breakpointMonitor.snippetI} />
        <CodeSnippet {...breakpointMonitor.snippetII} />
        <CodeSnippet {...breakpointMonitor.snippetIII} />
        <CodeSnippet {...breakpointMonitor.snippetIV} />
      </Container>
    </Section>
  )
}
