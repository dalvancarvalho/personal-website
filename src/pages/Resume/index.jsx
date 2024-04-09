/* Resume/index.jsx */

import { useTranslation } from 'react-i18next'

import useScrollSpy from '../../hooks/useScrollSpy'

import Footer from '../../layout/Footer'
import PageHeader from '../../layout/PageHeader'
import MainSection from '../../layout/Section/Main'

import Download from './Download'
// import NewSection from './NewSection'

import Meta from '../../components/Meta'

function Resume() {
  // Resume page

  const { t } = useTranslation()
  useScrollSpy()

  return (
    <>
      <Meta
        description="Download my resume for updated information on my professional qualifications!"
        title={t('meta.title.resume')}
        url="https://dalvanc.com/resume"
      />
      <MainSection className="flex flex-col items-center">
        <PageHeader
          github="https://github.com/dalvancarvalho/"
          linkedIn="https://www.linkedin.com/in/dalvancarvalho/"
          section="pageHeader.breadcrumbs.about"
          title="pages.resume.title"
          t={t}
        />
        {/* <NewSection t={t} /> */}
        <Download t={t} />
      </MainSection>
      <Footer />
    </>
  )
}

export default Resume
