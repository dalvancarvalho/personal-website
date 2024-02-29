/* SplitIt/index.jsx */

import { useTranslation } from 'react-i18next'

import useScrollSpy from '../../hooks/useScrollSpy'

import Introduction from './Introduction'

import Footer from '../../layout/Footer'
import PageHeader from '../../layout/PageHeader'
import MainSection from '../../layout/Section/MainSection'

import Meta from '../../components/Meta'

import { splitItData } from '../../constants/projects'

function SplitIt() {
  // Split it!

  const { t } = useTranslation()
  useScrollSpy()

  return (
    <>
      <Meta
        description="Split it! allows for a fair division of expenses among all group members in a simple and intuitive way!"
        title={t('meta.title.splitIt')}
        url="https://dalvanc.com/split-it"
      />
      <MainSection className="min-h-dvh flex flex-col items-center">
        <PageHeader id="home" t={t} {...splitItData} />
        <Introduction t={t} />
        {/* Details... */}
      </MainSection>
      <Footer />
    </>
  )
}

export default SplitIt
