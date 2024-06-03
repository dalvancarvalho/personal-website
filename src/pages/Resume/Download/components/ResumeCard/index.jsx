/* ResumeCard/index.jsx */

import Paragraph from '../../../../../components/Text/Paragraph'

export default function ResumeCard({ href, thumbnail, t, title }) {
  // Downloadable resume

  return (
    <a
      aria-label={t('pages.resume.download.ariaLabel')}
      className="max-w-max pb-5 px-5 md:pb-6 md:px-6 rounded-xl bg-slate-100 dark:bg-dark-4 flex flex-col items-center shadow-md transition-all duration-300 resume-hover"
      href={href}
      rel="noopener noreferrer"
      tabIndex="0"
      target="_blank"
    >
      <div className="my-3 md:my-4 flex items-center gap-3 md:gap-4">
        <Paragraph
          className="!text-slate-800 dark:!text-gray-200"
          i18nKey={title}
          variant="medium-bold"
        />
        <span className="px-[0.7em] py-[0.35em] text-[0.65rem] md:text-xs font-semibold bg-red-600 text-white rounded-sm select-none">
          PDF
        </span>
      </div>
      <img
        alt={t('pages.resume.download.altText')}
        className="w-72 md:w-[19rem] rounded-md"
        src={thumbnail}
      />
    </a>
  )
}
