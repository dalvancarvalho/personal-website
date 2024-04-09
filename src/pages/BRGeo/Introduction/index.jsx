/* Introduction/index.jsx */

import Container from '../../../layout/Container'
import Section from '../../../layout/Section/Regular'

import CodeSnippet from '../../../components/CodeSnippet'
import Paragraph from '../../../components/Text/Paragraph'
import SectionTitle from '../../../components/Text/SectionTitle'

import snippetModel from '../../../constants/snippets'

function Introduction(props) {
  // In progress...

  const { t } = props

  return (
    <Section id="intro">
      <Container className="h-full variable-padding">
        <SectionTitle
          animation={false}
          title={t('pages.brGeo.intro.heading')}
          watermark={t('pages.brGeo.intro.watermark')}
        />
        <Paragraph>{t('misc.comingSoon')}</Paragraph>
        <CodeSnippet t={t} {...snippetModel} />
      </Container>
    </Section>
  )
}

export default Introduction
