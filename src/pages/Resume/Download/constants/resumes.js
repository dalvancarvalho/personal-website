/* resumes.js */

import thumbPt from '../../../../assets/webp/resume-pt.webp'
import thumbEn from '../../../../assets/webp/resume-en.webp'

const RESUMES = [
  // List of resume versions (Brazilian Portuguese and English)

  {
    id: crypto.randomUUID(),
    title: 'pages.resume.download.portuguese',
    href: '/resume-pt.pdf',
    thumbnail: thumbPt,
  },
  {
    id: crypto.randomUUID(),
    title: 'pages.resume.download.english',
    href: '/resume-en.pdf',
    thumbnail: thumbEn,
  },
]

export default RESUMES
