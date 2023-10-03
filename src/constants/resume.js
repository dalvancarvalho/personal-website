/* resume.js */

import cv from '../assets/cv.png' // vai mudar pra 2 arquivos webp
import resumePtBr from '../../public/resume-pt-br.pdf'
import resumeEnUs from '../../public/resume-en-us.pdf'

const resume = [
  // List of resume versions (Brazilian portuguese and English)

  {
    altText: 'imagem do currículo de Dalvan Carvalho',
    file: resumePtBr,
    fileName: 'Currículo - Dalvan Carvalho',
    href: '/resume-pt-br.pdf',
    thumbnail: cv,
    title: 'pages.resume.download.portuguese',
  },
  {
    altText: `image of Dalvan Carvalho's resume`,
    file: resumeEnUs,
    fileName: 'Resume - Dalvan Carvalho',
    href: '/resume-en-us.pdf',
    thumbnail: cv,
    title: 'pages.resume.download.english',
  },
]

export default resume
