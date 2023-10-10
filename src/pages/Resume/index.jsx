/* Resume/index.jsx */

import { useTranslation } from 'react-i18next'
import useScrollSpy from '../../hooks/useScrollSpy'
import MainSection from '../../layout/Section/MainSection'
import Meta from '../../components/Meta'
import PageTitle from '../../components/Text/PageTitle'
import Download from './Download'

function Resume() {
  // Resume page

  const { t } = useTranslation()
  useScrollSpy()

  return (
    <>
      <Meta
        description="..."
        title={t('meta.title.resume')}
        url="https://dalvanc.com/resume"
      />
      <MainSection className="h-full flex flex-col items-center">
        <PageTitle
          id="home"
          linkedInUrl="https://google.com.br/"
          name={t('pages.resume.name')}
          subject={t('title.breadcrumbs.about')}
          t={t}
        />
        <Download t={t} />
      </MainSection>
    </>
  )
}

export default Resume
