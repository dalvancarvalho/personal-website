/* Projects.jsx */

import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { Trans } from 'react-i18next'
import Card from '../../../components/Card'
import CardMobile from '../../../components/CardMobile'
import Container from '../../../components/Container'
import Highlight from '../../../components/Highlight'
import Paragraph from '../../../components/Paragraph'
import Section from '../../../components/Section'
import SectionTitle from '../../../components/SectionTitle'
import projects from '../../../constants/projects'

function Projects({ screenProps, t }) {
  // Projects section

  const { screenSize } = screenProps

  useLayoutEffect(() => {
    // Paragraph animation

    gsap.fromTo(
      '.projects-paragraph',
      { opacity: 0, x: 32 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-paragraph',
          start: 'bottom bottom',
        },
      }
    )
  }, [])

  return (
    <Section
      className="relative isolate z-10 after:absolute after:inset-0 after:-z-10
      after:-skew-y-[4deg] md:after:-skew-y-2 after:bg-slate-150 after:dark:bg-dark-2
      overflow-x-clip after:transition-colors after:duration-300"
      id="projects"
    >
      <Container
        className="px-6 md:px-8 xl:px-40 2xl:px-44 flex flex-col justify-center
        items-center"
      >
        <SectionTitle
          watermark={t('pages.home.projects.watermark')}
          watermarkColor="text-slate-250 dark:text-dark-4"
        >
          {t('pages.home.projects.heading')}
        </SectionTitle>
        <Paragraph className="projects-paragraph mb-16 2xl:mb-20 lg:mx-12 2xl:mx-20">
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
              <Card index={index} key={project.name} project={project} t={t} />
            ) : (
              <CardMobile index={index} key={project.name} project={project} t={t} />
            )
          )}
        </div>
      </Container>
    </Section>
  )
}

export default Projects
