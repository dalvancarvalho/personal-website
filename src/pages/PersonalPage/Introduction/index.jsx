/* Introduction/index.jsx */

import Container from '../../../layout/Container'
import Section from '../../../layout/Section'
import CodeSnippet from '../../../components/CodeSnippet'
import Paragraph from '../../../components/Text/Paragraph'
import SectionTitle from '../../../components/Text/SectionTitle'
import snippetModel from '../../../constants/snippets'

function Introduction({ t }) {
  // In progress...

  return (
    <Section id="intro">
      <Container className="h-full px-6 sm:px-8 xl:px-40">
        <SectionTitle noAnimation watermark={t('pages.personalPage.intro.watermark')}>
          {t('pages.personalPage.intro.heading')}
        </SectionTitle>
        <Paragraph>{t('misc.comingSoon')}</Paragraph>
        <CodeSnippet snippet={snippetModel} />
      </Container>
    </Section>
  )
}

export default Introduction
