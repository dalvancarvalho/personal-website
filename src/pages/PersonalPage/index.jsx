/* PersonalPage/index.jsx */

import { useTranslation } from 'react-i18next'
import useScrollSpy from '../../hooks/useScrollSpy'
import Introduction from './Introduction'
import MainSection from '../../layout/Section/MainSection'
import Meta from '../../components/Meta'
import PageTitle from '../../components/Text/PageTitle'
import { personalPageData } from '../../constants/projects'

function PersonalPage() {
  // Personal page

  const { t } = useTranslation()
  useScrollSpy()

  return (
    <>
      <Meta
        description="Want to know all the cool features that my personal page has? So check this in-depth showcase!"
        title={t('meta.title.personalPage')}
        url="https://dalvanc.com/personal-page"
      />
      <MainSection className="h-full flex flex-col items-center">
        <PageTitle id="home" t={t} {...personalPageData} />
        <Introduction t={t} />
        {/* Details... */}
      </MainSection>
    </>
  )
}

export default PersonalPage
