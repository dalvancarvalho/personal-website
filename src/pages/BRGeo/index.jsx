/* index.jsx */

import { useTranslation } from 'react-i18next'
import Introduction from './sections/Introduction'
import Footer from '../../components/Footer'
import MainSection from '../../components/MainSection'
import PageTitle from '../../components/PageTitle'
import SEO from '../../components/SEO'
import { brGeoData } from '../../constants/projects'

function BRGeo() {
  // BR Geo

  const { demoUrl, githubUrl, name } = brGeoData
  const { t } = useTranslation()

  return (
    <>
      <SEO
        description="BR Geo displays information from several geographic and social topics through charts and interactive maps!"
        title={t('meta.title.brGeo')}
        url="https://dalvanc.com/br-geo"
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

export default BRGeo
