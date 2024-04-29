/* Projects/index.jsx */

import { lazy } from 'react'

import useAnimate from './animations/useAnimate'

import Container from '../../../layout/Container'
import Section from '../../../layout/Section/Regular'

import Paragraph from '../../../components/Text/Paragraph'
import SectionTitle from '../../../components/Text/SectionTitle'

import projects from '../../../constants/projects'

// Dynamic import
const Card = lazy(() => import('./components/Card/Standard'))
const SmallCard = lazy(() => import('./components/Card/Small'))

function Projects(props) {
  // Projects section

  const { screenSize, t } = props

  const animation = useAnimate()

  return (
    <Section
      className="relative isolate z-10 after:absolute after:inset-0 after:-z-10 after:-skew-y-[4deg] md:after:-skew-y-2 after:bg-slate-150 after:dark:bg-dark-5 overflow-x-clip after:transition-colors after:duration-300"
      id="projects"
      ref={animation.scope}
    >
      <Container className="variable-padding flex flex-col justify-center items-center">
        <SectionTitle
          title={t('pages.home.projects.heading')}
          watermark={t('pages.home.projects.watermark')}
          watermarkColor="text-slate-250 dark:text-dark-3"
        />
        <Paragraph
          className="mb-16"
          i18nKey="pages.home.projects.paragraph"
          ref={animation.paragraph}
        />
        <div className="flex flex-col items-center gap-20 md:gap-24">
          {projects.map((props, index) =>
            screenSize.md ? (
              <Card key={props.title} index={index} t={t} {...props} />
            ) : (
              <SmallCard key={props.title} index={index} t={t} {...props} />
            )
          )}
        </div>
      </Container>
    </Section>
  )
}

export default Projects
