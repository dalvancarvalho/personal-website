/* BRGeo/index.jsx */

import { useTranslation } from 'react-i18next'
import Introduction from './Introduction'
import MainSection from '../../layout/Section/MainSection'
import Meta from '../../components/Meta'
import PageTitle from '../../components/Text/PageTitle'
import { brGeoData } from '../../constants/projects'

function BRGeo() {
  // BR Geo

  const { demoUrl, githubUrl, name } = brGeoData
  const { t } = useTranslation()

  return (
    <>
      <Meta
        description="BR Geo displays information from several geographic and social topics through charts and interactive maps!"
        title={t('meta.title.brGeo')}
        url="https://dalvanc.com/br-geo"
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
    </>
  )
}

export default BRGeo
