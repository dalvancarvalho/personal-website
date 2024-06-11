/* Carousel/index.jsx */

import useEmblaCarousel from 'embla-carousel-react'

import useArrowButtons from './hooks/useArrowButtons'

import { NextButton, PrevButton } from './components/ArrowButtons'

export default function Carousel({ children }) {
  //

  const [emblaRef, emblaApi] = useEmblaCarousel()
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    useArrowButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}
