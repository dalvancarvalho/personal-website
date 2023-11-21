/* ResumeCard.jsx */

import Paragraph from '../../../components/Text/Paragraph'

function ResumeCard(props) {
  // Downloadable resume

  const { altText, href, thumbnail, t, title } = props

  return (
    <a
      aria-label={t('pages.resume.download.ariaLabel')}
      className="max-w-max pb-5 px-5 md:pb-6 md:px-6 2xl:pb-7 2xl:px-7 rounded-xl
      bg-slate-100 dark:bg-dark-4 flex flex-col items-center shadow-md
      focus-visible:bg-slate-200 focus-visible:dark:bg-dark-1 color-transition
      resume-hover"
      href={href}
      rel="noopener noreferrer"
      tabIndex="0"
      target="_blank"
    >
      <div className="my-3 md:my-4 2xl:my-5 flex items-center gap-3 md:gap-4">
        <Paragraph fontWeight="font-bold" textColor="text-slate-800 dark:text-gray-200">
          {t(title)}
        </Paragraph>
        <span
          className="px-[0.7em] py-[0.35em] text-[0.65rem] md:text-xs font-semibold
          bg-red-600 text-white rounded-md select-none"
        >
          PDF
        </span>
      </div>
      <img
        className="w-72 md:w-[19rem] 2xl:w-80 rounded-md"
        alt={altText}
        src={thumbnail}
      />
    </a>
  )
}

export default ResumeCard
