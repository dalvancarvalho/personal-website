/* Introduction/index.jsx */

import Container from '../../../layout/Container'
import Section from '../../../layout/Section'
import CodeSnippet from '../../../components/CodeSnippet'
import Paragraph from '../../../components/Text/Paragraph'
import SectionTitle from '../../../components/Text/SectionTitle'
import snippetModel from '../../../constants/snippets'

function Introduction(props) {
  // In progress...

  const { t } = props

  return (
    <Section id="intro">
      <Container className="h-full px-6 sm:px-8 xl:px-40 2xl:px-64">
        <SectionTitle
          animation={false}
          title={t('pages.splitIt.intro.heading')}
          watermark={t('pages.splitIt.intro.watermark')}
        />
        <Paragraph>{t('misc.comingSoon')}</Paragraph>
        <CodeSnippet {...snippetModel} />
      </Container>
    </Section>
  )
}

export default Introduction
