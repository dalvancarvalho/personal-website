/* .../index.jsx */

import Container from '../../../layout/Container'
import Section from '../../../layout/Section/Regular'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/Accordion'
import SectionTitle from '../../../components/Text/SectionTitle'

function Download(props) {
  // Download section

  const { t } = props

  return (
    <Section id="download">
      <Container className="h-full variable-padding">
        <SectionTitle
          animation={false}
          title={t('pages.resume.download.heading')}
          watermark="watermark"
        />
        <Accordion type="multiple" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Educação</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Habilidades</AccordionTrigger>
            <AccordionContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet itaque
              obcaecati voluptate nostrum, expedita modi placeat labore sapiente tempore
              quia consectetur accusantium, minus tempora officiis sed ad pariatur facere
              repellendus similique! Ipsum ipsam pariatur ad tempore labore sed id
              voluptatem. Quod nihil obcaecati cum, magnam totam consequatur incidunt at
              unde!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Experiência profissional</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
              voluptatum perferendis. Provident explicabo temporibus libero veniam dolorum
              iste aliquid, nostrum expedita? Nulla veritatis distinctio aliquam id modi
              quod doloremque a, repellat sequi enim dignissimos commodi magni sint! Ipsam
              maxime iure facilis qui a et nemo quia eligendi facere ea autem natus, iusto
              nisi culpa excepturi architecto? Sit ad illo nesciunt eos vero? Blanditiis
              fugiat, magni distinctio et optio aliquid animi, repellendus eaque, ullam
              voluptates non ab laboriosam exercitationem iste impedit?
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Container>
    </Section>
  )
}

export default Download
