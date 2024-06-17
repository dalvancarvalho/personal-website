/* Carousel/index.jsx */
// Component from Embla Carousel (https://www.embla-carousel.com/)

import useEmblaCarousel from 'embla-carousel-react'

import useArrowButtons from './hooks/useArrowButtons'

import { NextButton, PrevButton } from './components/ArrowButtons'

export default function Carousel({ children }) {
  // Carousel with arrow buttons to control

  const [emblaRef, emblaApi] = useEmblaCarousel()
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    useArrowButtons(emblaApi)

  return (
    <section className="m-auto w-[324px] max-w-max">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="ml-3 flex gap-6 touch-pan-y touch-pinch-zoom">{children}</div>
      </div>
      <div className="mt-8 flex justify-center gap-10">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  )
}
