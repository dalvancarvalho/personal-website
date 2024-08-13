/* BreakpointMonitor/index.jsx */

import { useTranslation } from 'react-i18next'

import { useScrollSpy } from '../../hooks/useScrollSpy'

import { Meta } from '../../components/Meta'

import { PageHeader } from '../../layout/PageHeader'
import { MainSection } from '../../layout/Section/Main'

import { About } from './About'
import { TryIt } from './TryIt'
import { Installation } from './Installation'

import { breakpointMonitor } from '../../constants/projects'

export default function BreakpointMonitor() {
  // Personal website

  const { t } = useTranslation()
  useScrollSpy()

  return (
    <>
      <Meta
        title={t('meta.title.breakpointMonitor')}
        description="A React component that displays the current Tailwind CSS breakpoint in the corner of the screen."
        url="https://dalvanc.com/breakpoint-monitor"
      />
      <MainSection>
        <PageHeader
          section="pageHeader.breadcrumbs.projects"
          t={t}
          {...breakpointMonitor}
        />
        <About t={t} />
        <TryIt t={t} />
        <Installation />
      </MainSection>
    </>
  )
}
