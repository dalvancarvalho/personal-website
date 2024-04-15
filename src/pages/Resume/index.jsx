/* Resume/index.jsx */

import { useTranslation } from 'react-i18next'

import useScrollSpy from '../../hooks/useScrollSpy'

import Meta from '../../components/Meta'

import Footer from '../../layout/Footer'
import PageHeader from '../../layout/PageHeader'
import MainSection from '../../layout/Section/Main'

import Download from './Download'
// import NewSection from './NewSection'

function Resume() {
  // Resume page

  const { t } = useTranslation()
  useScrollSpy()

  return (
    <>
      <Meta
        title={t('meta.title.resume')}
        description="Download my resume for updated information on my professional qualifications!"
        url="https://dalvanc.com/resume"
      />
      <MainSection>
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
