/* resume.js */

import resumeEn from '../assets/pdf/resume-en.pdf'
import resumePt from '../assets/pdf/resume-pt.pdf'
import thumbEn from '../assets/webp/resume-en.webp'
import thumbPt from '../assets/webp/resume-pt.webp'

const resume = [
  // List of resume versions (Brazilian Portuguese and English)

  {
    altText: 'imagem do currículo de Dalvan Carvalho',
    file: resumePt,
    fileName: 'Currículo — Dalvan Carvalho',
    href: '/curriculo.pdf',
    thumbnail: thumbPt,
    title: 'pages.resume.download.portuguese',
  },
  {
    altText: `image of Dalvan Carvalho's resume`,
    file: resumeEn,
    fileName: 'Resume — Dalvan Carvalho',
    href: '/resume.pdf',
    thumbnail: thumbEn,
    title: 'pages.resume.download.english',
  },
]

export default resume
