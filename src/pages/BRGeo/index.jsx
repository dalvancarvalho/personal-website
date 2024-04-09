/* BRGeo/index.jsx */

import { useTranslation } from 'react-i18next'

import useScrollSpy from '../../hooks/useScrollSpy'

import Footer from '../../layout/Footer'
import PageHeader from '../../layout/PageHeader'
import MainSection from '../../layout/Section/Main'

import Introduction from './Introduction'

import Meta from '../../components/Meta'

import { brGeo } from '../../constants/projects'

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
      <MainSection className="flex flex-col items-center">
        <PageHeader section="pageHeader.breadcrumbs.projects" t={t} {...brGeo} />
        <Introduction t={t} />
        {/* Details... */}
      </MainSection>
      <Footer />
    </>
  )
}

export default BRGeo
