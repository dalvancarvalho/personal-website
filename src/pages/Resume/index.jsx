/* Resume/index.jsx */

import { useTranslation } from 'react-i18next'

import { useScrollSpy } from '../../hooks/useScrollSpy'

import { Meta } from '../../components/Meta'

import { PageHeader } from '../../layout/PageHeader'
import { MainSection } from '../../layout/Section/Main'

import { Download } from './Download'
import { Topics } from './Topics'

export default function Resume() {
  // Resume page

  const { t } = useTranslation()
  useScrollSpy()

  return (
    <>
      <Meta
        title={t('meta.title.resume')}
        description="Check my resume for updated information on my professional qualifications!"
        url="https://dalvanc.com/resume"
      />
      <MainSection>
        <PageHeader
          section="pageHeader.breadcrumbs.about"
          heading="pages.resume.heading"
          github="https://github.com/dalvancarvalho/"
          linkedIn="https://www.linkedin.com/in/dalvancarvalho/"
          t={t}
        />
        <Topics />
        <Download />
      </MainSection>
    </>
  )
}
