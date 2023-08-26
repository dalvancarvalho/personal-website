/* Introduction.jsx */

import CodeSnippet from '../../../components/CodeSnippet'
import Container from '../../../components/Container'
import Paragraph from '../../../components/Paragraph'
import Section from '../../../components/Section'
import SectionTitle from '../../../components/SectionTitle'
import snippetModel from '../../../constants/snippets'

function Introduction({ t }) {
  // In progress...

  return (
    <Section id="intro">
      <Container className="h-full px-6 sm:px-8 xl:px-40">
        <SectionTitle noAnimation watermark={t('pages.brGeo.intro.watermark')}>
          {t('pages.brGeo.intro.heading')}
        </SectionTitle>
        <Paragraph>{t('misc.comingSoon')}</Paragraph>
        <CodeSnippet snippet={snippetModel} />
      </Container>
    </Section>
  )
}

export default Introduction
