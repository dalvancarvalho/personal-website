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
    <Section className="skewed-bg" id="install">
      {/* 🩹 The <div> below fills the gap left by the skewed background above the right portion of the footer */}
      <div className="absolute -z-10 bottom-0 right-0 w-full h-52 bg-slate-150 dark:bg-dark-5 color-transition select-none pointer-events-none"></div>
      <Container className="h-full variable-padding">
        <Heading
          animate={false}
          heading="pages.breakpointMonitor.install.heading"
          sectionName="pages.breakpointMonitor.install.sectionName"
          sectionNameColor="text-slate-250 dark:text-dark-3"
        />
        <Paragraph i18nKey="misc.comingSoon" />
        <CodeSnippet className="code-snippet-border" {...breakpointMonitor.snippetI} />
        <CodeSnippet className="code-snippet-border" {...breakpointMonitor.snippetII} />
        <CodeSnippet className="code-snippet-border" {...breakpointMonitor.snippetIII} />
        <CodeSnippet className="code-snippet-border" {...breakpointMonitor.snippetIV} />
      </Container>
    </Section>
  )
}
