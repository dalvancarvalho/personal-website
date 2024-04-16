/* SplitIt/index.jsx */

import { useTranslation } from 'react-i18next'

import useScrollSpy from '../../hooks/useScrollSpy'

import Meta from '../../components/Meta'

import PageHeader from '../../layout/PageHeader'
import MainSection from '../../layout/Section/Main'

import Introduction from './Introduction'

import { splitIt } from '../../constants/projects'

function SplitIt() {
  // Split it!

  const { t } = useTranslation()
  useScrollSpy()

  return (
    <>
      <Meta
        title={t('meta.title.splitIt')}
        description="Split it! allows for a fair division of expenses among all group members in a simple and intuitive way!"
        url="https://dalvanc.com/split-it"
      />
      <MainSection>
        <PageHeader section="pageHeader.breadcrumbs.projects" t={t} {...splitIt} />
        <Introduction t={t} />
        {/* Details... */}
      </MainSection>
    </>
  )
}

export default SplitIt
