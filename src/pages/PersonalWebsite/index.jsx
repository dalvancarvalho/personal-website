/* PersonalWebsite/index.jsx */

import { useTranslation } from 'react-i18next'

import useScrollSpy from '../../hooks/useScrollSpy'

import Footer from '../../layout/Footer'
import PageHeader from '../../layout/PageHeader'
import MainSection from '../../layout/Section/Main'

import Introduction from './Introduction'

import Meta from '../../components/Meta'

import { personalWebsite } from '../../constants/projects'

function PersonalWebsite() {
  // Personal website

  const { t } = useTranslation()
  useScrollSpy()

  return (
    <>
      <Meta
        description="Want to know all the cool features that my personal website has? So check this in-depth showcase!"
        title={t('meta.title.personalWebsite')}
        url="https://dalvanc.com/personal-website"
      />
      <MainSection className="flex flex-col items-center">
        <PageHeader
          section="pageHeader.breadcrumbs.projects"
          t={t}
          {...personalWebsite}
        />
        <Introduction t={t} />
        {/* Details... */}
      </MainSection>
      <Footer />
    </>
  )
}

export default PersonalWebsite
