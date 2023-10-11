/* resume.js */

import cv from '../assets/cv.png' // vai mudar pra 2 arquivos webp
import resumePt from '../assets/pdf/resume-pt.pdf'
import resumeEn from '../assets/pdf/resume-en.pdf'

const resume = [
  // List of resume versions (Brazilian portuguese and English)

  {
    altText: 'imagem do currículo de Dalvan Carvalho',
    file: resumePt,
    fileName: 'Currículo - Dalvan Carvalho',
    href: '/resume-pt.pdf',
    thumbnail: cv,
    title: 'pages.resume.download.portuguese',
  },
  {
    altText: `image of Dalvan Carvalho's resume`,
    file: resumeEn,
    fileName: 'Resume - Dalvan Carvalho',
    href: '/resume-en.pdf',
    thumbnail: cv,
    title: 'pages.resume.download.english',
  },
]

export default resume
