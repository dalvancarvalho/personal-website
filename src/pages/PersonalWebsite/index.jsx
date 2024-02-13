/* PersonalWebsite/index.jsx */

import { useTranslation } from 'react-i18next'

import useScrollSpy from '../../hooks/useScrollSpy'

import Introduction from './Introduction'
import Footer from '../../layout/Footer'
import PageHeader from '../../layout/PageHeader'
import MainSection from '../../layout/Section/MainSection'
import Meta from '../../components/Meta'

import { personalWebsiteData } from '../../constants/projects'

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
      <MainSection className="min-h-[100dvh] flex flex-col items-center">
        <PageHeader id="home" t={t} {...personalWebsiteData} />
        <Introduction t={t} />
        {/* Details... */}
      </MainSection>
      <Footer />
    </>
  )
}

export default PersonalWebsite
