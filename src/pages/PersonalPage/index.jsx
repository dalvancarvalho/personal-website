/* index.jsx */

import { useTranslation } from 'react-i18next'
import Introduction from './sections/Introduction'
import Footer from '../../components/Footer'
import MainSection from '../../components/MainSection'
import PageTitle from '../../components/PageTitle'
import SEO from '../../components/SEO'
import { personalPageData } from '../../constants/projects'

function PersonalPage() {
  // Personal page

  const { demoUrl, githubUrl, name } = personalPageData
  const { t } = useTranslation()

  return (
    <>
      <SEO
        description="Want to know all the cool features that my personal page has? So check this in-depth showcase!"
        title={t('meta.title.personalPage')}
        url="https://dalvanc.com/personal-page"
      />
      <MainSection className="h-full flex flex-col items-center">
        <PageTitle demoUrl={demoUrl} githubUrl={githubUrl} id="home" name={name} t={t} />
        <Introduction t={t} />
        {/* Details... */}
      </MainSection>
      <Footer />
    </>
  )
}

export default PersonalPage
