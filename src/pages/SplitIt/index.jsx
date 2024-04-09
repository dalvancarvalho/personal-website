/* SplitIt/index.jsx */

import { useTranslation } from 'react-i18next'

import useScrollSpy from '../../hooks/useScrollSpy'

import Footer from '../../layout/Footer'
import PageHeader from '../../layout/PageHeader'
import MainSection from '../../layout/Section/Main'

import Introduction from './Introduction'

import Meta from '../../components/Meta'

import { splitIt } from '../../constants/projects'

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
      <MainSection className="flex flex-col items-center">
        <PageHeader section="pageHeader.breadcrumbs.projects" t={t} {...splitIt} />
        <Introduction t={t} />
        {/* Details... */}
      </MainSection>
      <Footer />
    </>
  )
}

export default SplitIt
