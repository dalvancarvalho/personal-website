/* SplitIt/index.jsx */

import { useTranslation } from 'react-i18next'
import Introduction from './Introduction'
import MainSection from '../../layout/Section/MainSection'
import Meta from '../../components/Meta'
import PageTitle from '../../components/Text/PageTitle'
import { splitItData } from '../../constants/projects'

function SplitIt() {
  // Split it!

  const { t } = useTranslation()

  return (
    <>
      <Meta
        description="Split it! allows for a fair division of expenses among all group members in a simple and intuitive way!"
        title={t('meta.title.splitIt')}
        url="https://dalvanc.com/split-it"
      />
      <MainSection className="h-full flex flex-col items-center">
        <PageTitle id="home" t={t} {...splitItData} />
        <Introduction t={t} />
        {/* Details... */}
      </MainSection>
    </>
  )
}

export default SplitIt
