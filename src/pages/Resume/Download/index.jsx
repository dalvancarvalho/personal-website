/* Download/index.jsx */

import useScreenProps from '../../../hooks/useScreenProps'

import Container from '../../../layout/Container'
import Section from '../../../layout/Section/Regular'

import Carousel from '../../../components/Carousel'
import Paragraph from '../../../components/Text/Paragraph'
import SectionHeading from '../../../components/Text/SectionHeading'
import ResumeCard from './components/ResumeCard'

import RESUMES from './constants/resumes'

export default function Download({ t }) {
  // Download section

  const { screenSize } = useScreenProps()

  return (
    <Section id="download">
      <Container className="h-full variable-padding">
        <SectionHeading
          animation={false}
          heading="pages.resume.download.heading"
          watermark="pages.resume.download.watermark"
        />
        <Paragraph className="mb-10 md:mb-16" i18nKey="pages.resume.download.paragraph" />
        {screenSize.md ? (
          // 💻 on medium/large screens, displays the resumes directly in the page
          <div className="flex items-center justify-evenly max-lg:gap-12">
            {RESUMES.map(({ id, ...props }) => (
              <ResumeCard key={id} t={t} {...props} />
            ))}
          </div>
        ) : (
          // 📱 on small screens, displays the resumes inside a carousel
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
