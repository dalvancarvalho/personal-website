/* ResumeCard.jsx */

import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CallToAction from '../../../components/Button/CallToAction'
import Paragraph from '../../../components/Text/Paragraph'

function ResumeCard(props) {
  // Downloadable resume

  const { altText, file, fileName, href, thumbnail, title } = props

  return (
    <div
      className="relative max-w-max pt-4 pb-6 px-6 sm:pt-6 sm:pb-10 sm:px-10 rounded-xl
      bg-slate-100 dark:bg-dark-3 flex flex-col items-center shadow-md color-transition
      group resume-hover"
    >
      <a
        className="absolute inset-0 z-10 w-full h-full rounded-xl"
        href={href}
        rel="noopener noreferrer"
        tabIndex="0"
        target="_blank"
      ></a>
      <div className="mb-4 sm:mb-6 flex items-center gap-4">
        <Paragraph fontWeight="font-bold" textColor="text-slate-800 dark:text-gray-200">
          {title}
        </Paragraph>
        <span
          className="px-2 py-1 text-xs font-semibold bg-red-600 text-white
          rounded-md select-none"
        >
          PDF
        </span>
      </div>
      <div className="relative rounded-md overflow-hidden">
        <img className="w-[350px] 2xl:w-[400px]" alt={altText} src={thumbnail} />
        <a download={fileName} href={file} rel="noopener noreferrer" tabIndex="-1">
          <CallToAction
            className="!absolute z-20 bottom-4 left-1/2 -translate-x-1/2 mt-6
            translate-y-2 resume-button-hover"
          >
            Download
            <FontAwesomeIcon icon={faDownload} />
          </CallToAction>
        </a>
      </div>
    </div>
  )
}

export default ResumeCard
