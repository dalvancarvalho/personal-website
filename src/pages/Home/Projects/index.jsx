/* Projects/index.jsx */

import { Trans } from 'react-i18next'
import useProjectsAnimation from './animations/useProjectsAnimation'
import Container from '../../../layout/Container'
import Section from '../../../layout/Section'
import DesktopCard from '../../../components/Card/Desktop'
import MobileCard from '../../../components/Card/Mobile'
import Highlight from '../../../components/Text/Highlight'
import Paragraph from '../../../components/Text/Paragraph'
import SectionTitle from '../../../components/Text/SectionTitle'
import projects from '../../../constants/projects'

function Projects(props) {
  // Projects section

  const { screenProps, t } = props
  const { screenSize } = screenProps
  const refs = useProjectsAnimation()

  return (
    <Section
      className="relative isolate z-10 after:absolute after:inset-0 after:-z-10
      after:-skew-y-[4deg] md:after:-skew-y-2 after:bg-slate-150 after:dark:bg-dark-5
      overflow-x-clip after:transition-colors after:duration-300"
      id="projects"
      ref={refs.scope}
    >
      <Container
        className="px-6 md:px-8 xl:px-40 2xl:px-44 flex flex-col justify-center
        items-center"
      >
        <SectionTitle
          title={t('pages.home.projects.heading')}
          watermark={t('pages.home.projects.watermark')}
          watermarkColor="text-slate-250 dark:text-dark-3"
        />
        <Paragraph className="mb-16 2xl:mb-20 lg:mx-12 2xl:mx-20" ref={refs.paragraph}>
          <Trans components={{ highlight: <Highlight /> }}>
            pages.home.projects.paragraph
          </Trans>
        </Paragraph>
        <div
          className="lg:mx-12 2xl:mx-20 flex flex-col items-center gap-20 md:gap-24
          2xl:gap-32"
        >
          {projects.map((project, index) =>
            screenSize.md ? (
              <DesktopCard index={index} key={project.name} project={project} t={t} />
            ) : (
              <MobileCard index={index} key={project.name} project={project} t={t} />
            )
          )}
        </div>
      </Container>
    </Section>
  )
}

export default Projects
