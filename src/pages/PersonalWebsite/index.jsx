/* PersonalWebsite/index.jsx */

import { useTranslation } from 'react-i18next'

import useScrollSpy from '../../hooks/useScrollSpy'

import Meta from '../../components/Meta'

import PageHeader from '../../layout/PageHeader'
import MainSection from '../../layout/Section/Main'

import Introduction from './Introduction'
// import Details from './Details'

import { personalWebsite } from '../../constants/projects'

export default function PersonalWebsite() {
  // Personal website

  const { t } = useTranslation()
  useScrollSpy()

  return (
    <>
      <Meta
        title={t('meta.title.personalWebsite')}
        description="Want to know all the cool features that my personal website has? So check this in-depth showcase!"
        url="https://dalvanc.com/personal-website"
      />
      <MainSection>
        <PageHeader
          section="pageHeader.breadcrumbs.projects"
          t={t}
          {...personalWebsite}
        />
        <Introduction t={t} />
        {/* Details... */}
      </MainSection>
    </>
  )
}
