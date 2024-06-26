/* Download/index.jsx */

import useScreenProps from '../../../hooks/useScreenProps'

import Container from '../../../layout/Container'
import Section from '../../../layout/Section/Regular'

import Carousel from '../../../components/Carousel'
import Paragraph from '../../../components/Text/Paragraph'
import Heading from '../../../components/Text/Heading'
import ResumeCard from './components/ResumeCard'

import RESUMES from './constants/resumes'

export default function Download({ t }) {
  // Download section

  const { screenSize } = useScreenProps()

  return (
    <Section className="skewed-bg" id="download">
      {/* 🩹 The <div> below fills the gap left by the skewed background above the right portion of the footer */}
      <div className="absolute -z-10 bottom-0 right-0 w-full h-52 bg-slate-150 dark:bg-dark-5 color-transition select-none pointer-events-none"></div>

      <Container className="h-full variable-padding">
        <Heading
          animate={false}
          heading="pages.resume.download.heading"
          sectionName="pages.resume.download.sectionName"
          sectionNameColor="text-slate-250 dark:text-dark-3"
        />
        <Paragraph className="mb-10 md:mb-16" i18nKey="pages.resume.download.paragraph" />
        {screenSize.md ? (
          // 💻 in medium/large screens, it displays the resumes directly on the page
          <div className="flex items-center justify-evenly max-lg:gap-12">
            {RESUMES.map(({ id, ...props }) => (
              <ResumeCard key={id} t={t} {...props} />
            ))}
          </div>
        ) : (
          // 📱 in small screens, it displays the resumes inside a carousel
          <Carousel>
            {RESUMES.map(({ id, ...props }) => (
              <div className="mt-2 flex-[0_0_100%]" key={id}>
                <ResumeCard t={t} {...props} />
              </div>
            ))}
          </Carousel>
        )}
      </Container>
    </Section>
  )
}
