/* Projects/index.jsx */

import { useAnimate } from './animations/useAnimate'

import { Container } from '../../../layout/Container'
import { Section } from '../../../layout/Section/Regular'

import { Heading } from '../../../components/Text/Heading'
import { Paragraph } from '../../../components/Text/Paragraph'
import { Card } from './components/Card/Default'
import { SmallCard } from './components/Card/Small'

import { PROJECTS } from '../../../constants/projects'

export function Projects({ screenSize, t }) {
  // Projects section

  const animation = useAnimate()

  return (
    <Section
      className="relative isolate z-10 after:absolute after:inset-0 after:-z-10 after:-skew-y-[4deg] md:after:-skew-y-2 after:bg-slate-150 after:dark:bg-dark-5 overflow-x-clip after:transition-colors after:duration-300"
      id="projects"
      ref={animation.scope}
    >
      <Container className="variable-padding">
        <Heading
          heading="pages.home.projects.heading"
          sectionName="pages.home.projects.sectionName"
          sectionNameColor="text-slate-250 dark:text-dark-3"
        />
        <Paragraph
          className="mb-16"
          i18nKey="pages.home.projects.paragraph"
          ref={animation.paragraph}
        />
        <div className="flex flex-col items-center gap-20 md:gap-24">
          {PROJECTS.map(({ id, ...props }, index) =>
            screenSize.sm ? (
              // 💻 on some small screens and on medium to large screens, it displays a normal card
              <Card key={id} index={index} t={t} {...props} />
            ) : (
              // 📱 in mobile screens, it displays a card specially designed for mobile devices
              <SmallCard key={id} index={index} t={t} {...props} />
            )
          )}
        </div>
      </Container>
    </Section>
  )
}
