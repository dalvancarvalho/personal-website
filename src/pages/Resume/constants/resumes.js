/* resumes.js */

import thumbEn from '../../../assets/webp/resume-en.webp'
import thumbPt from '../../../assets/webp/resume-pt.webp'

const RESUMES = [
  // List of resume versions (Brazilian Portuguese and English)

  {
    title: 'pages.resume.download.portuguese',
    href: '/resume-pt.pdf',
    thumbnail: thumbPt,
    altText: 'imagem do currículo de Dalvan Carvalho',
  },
  {
    title: 'pages.resume.download.english',
    href: '/resume-en.pdf',
    thumbnail: thumbEn,
    altText: `image of Dalvan Carvalho's resume`,
  },
]

export default RESUMES
