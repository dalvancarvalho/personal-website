/* BRGeo/index.jsx */

import { useTranslation } from 'react-i18next'

import { useScrollSpy } from '../../hooks/useScrollSpy'

import { Meta } from '../../components/Meta'

import { PageHeader } from '../../layout/PageHeader'
import { MainSection } from '../../layout/Section/Main'

import { Introduction } from './Introduction'
// import Details from './Details'

import { brGeo } from '../../constants/projects'

export default function BRGeo() {
  // BR Geo

  const { t } = useTranslation()
  useScrollSpy()

  return (
    <>
      <Meta
        title={t('meta.title.brGeo')}
        description="BR Geo displays information from several geographic and social topics through charts and interactive maps!"
        url="https://dalvanc.com/br-geo"
      />
      <MainSection>
        <PageHeader section="pageHeader.breadcrumbs.projects" t={t} {...brGeo} />
        <Introduction t={t} />
        {/* Details... */}
      </MainSection>
    </>
  )
}
