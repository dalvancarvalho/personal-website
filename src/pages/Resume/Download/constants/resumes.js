/* resumes.js */

import thumbPt from '../../../../assets/webp/resume-pt.webp'
import thumbEn from '../../../../assets/webp/resume-en.webp'
import thumbDarkPt from '../../../../assets/webp/resume-dark-pt.webp'
import thumbDarkEn from '../../../../assets/webp/resume-dark-en.webp'

const RESUMES = [
  // List of resume versions (Brazilian Portuguese and English)

  {
    id: crypto.randomUUID(),
    title: 'pages.resume.download.portuguese',
    href: '/resume-pt.',
    thumbnail: {
      light: thumbPt,
      dark: thumbDarkPt,
    },
  },
  {
    id: crypto.randomUUID(),
    title: 'pages.resume.download.english',
    href: '/resume-en.',
    thumbnail: {
      light: thumbEn,
      dark: thumbDarkEn,
    },
  },
]

export default RESUMES
