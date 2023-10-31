/* Resume/index.jsx */

import { useTranslation } from 'react-i18next'
import useScrollSpy from '../../hooks/useScrollSpy'
import PageHeader from '../../layout/PageHeader'
import MainSection from '../../layout/Section/MainSection'
import Meta from '../../components/Meta'
import Download from './Download'

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
      <MainSection className="h-full flex flex-col items-center">
        <PageHeader
          id="home"
          linkedInUrl="https://google.com.br/"
          name={t('pages.resume.name')}
          subject={t('pageHeader.breadcrumbs.about')}
          t={t}
        />
        <Download t={t} />
      </MainSection>
    </>
  )
}

export default Resume
