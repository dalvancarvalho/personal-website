/* PersonalPage/index.jsx */

import { useTranslation } from 'react-i18next'
import Introduction from './Introduction'
import Footer from '../../layout/Footer'
import MainSection from '../../layout/Section/MainSection'
import Meta from '../../components/Meta'
import PageTitle from '../../components/Text/PageTitle'
import { personalPageData } from '../../constants/projects'

function PersonalPage() {
  // Personal page

  const { demoUrl, githubUrl, name } = personalPageData
  const { t } = useTranslation()

  return (
    <>
      <Meta
        description="Want to know all the cool features that my personal page has? So check this in-depth showcase!"
        title={t('meta.title.personalPage')}
        url="https://dalvanc.com/personal-page"
      />
      <MainSection className="h-full flex flex-col items-center">
        <PageTitle
          demoUrl={demoUrl}
          githubUrl={githubUrl}
          id="home"
          name={name}
          subject={t('title.breadcrumbs.featured')}
          t={t}
        />
        <Introduction t={t} />
        {/* Details... */}
      </MainSection>
      <Footer t={t} />
    </>
  )
}

export default PersonalPage
