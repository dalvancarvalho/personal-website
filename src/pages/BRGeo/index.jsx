/* BRGeo/index.jsx */

import { useTranslation } from 'react-i18next'
import useScrollSpy from '../../hooks/useScrollSpy'
import Introduction from './Introduction'
import Footer from '../../layout/Footer'
import PageHeader from '../../layout/PageHeader'
import MainSection from '../../layout/Section/MainSection'
import Meta from '../../components/Meta'
import { brGeoData } from '../../constants/projects'

function BRGeo() {
  // BR Geo

  const { t } = useTranslation()
  useScrollSpy()

  return (
    <>
      <Meta
        description="BR Geo displays information from several geographic and social topics through charts and interactive maps!"
        title={t('meta.title.brGeo')}
        url="https://dalvanc.com/br-geo"
      />
      <MainSection className="h-full flex flex-col items-center">
        <PageHeader id="home" t={t} {...brGeoData} />
        <Introduction t={t} />
        {/* Details... */}
      </MainSection>
      <Footer />
    </>
  )
}

export default BRGeo
