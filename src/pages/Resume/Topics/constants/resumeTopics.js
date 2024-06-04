/* resumeTopics.js */

import {
  faBook,
  faCode,
  faLanguage,
  faScrewdriverWrench,
  faUserGraduate,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons'

import css3 from '../../../../assets/svg/logos/css3.svg'
import html5 from '../../../../assets/svg/logos/html5.svg'
import javaScript from '../../../../assets/svg/logos/javascript.svg'
import sass from '../../../../assets/svg/logos/sass.svg'
import typeScript from '../../../../assets/svg/logos/typescript.svg'

import chartJs from '../../../../assets/svg/logos/chartjs.svg'
import framerMotion from '../../../../assets/svg/logos/framer-motion.svg'
import gsap from '../../../../assets/svg/logos/gsap.svg'
import nextJs from '../../../../assets/svg/logos/nextjs.svg'
import react from '../../../../assets/svg/logos/react.svg'
import tailwindCss from '../../../../assets/svg/logos/tailwindcss.svg'

import figma from '../../../../assets/svg/logos/figma.svg'
import git from '../../../../assets/svg/logos/git.svg'
import github from '../../../../assets/svg/logos/github.svg'
import postgreSql from '../../../../assets/svg/logos/postgresql.svg'
import vercel from '../../../../assets/svg/logos/vercel.svg'

import dalvanc from '../../../../assets/svg/logos/dalvanc.svg'
import idb from '../../../../assets/svg/logos/idb.svg'
import topocart from '../../../../assets/svg/logos/topocart.svg'

import coursera from '../../../../assets/svg/logos/coursera.svg'
import devByEd from '../../../../assets/svg/logos/dev-by-ed.svg'
import google from '../../../../assets/svg/logos/google.svg'
import googleCoursera from '../../../../assets/svg/logos/google-coursera.svg'
import progBr from '../../../../assets/svg/logos/prog-br.svg'
import udemy from '../../../../assets/svg/logos/udemy.svg'
import unisc from '../../../../assets/svg/logos/unisc.svg'

import en from '../../../../assets/svg/logos/en.svg'
import es from '../../../../assets/svg/logos/es.svg'
import pt from '../../../../assets/svg/logos/pt.svg'

const RESUME_TOPICS = [
  // Resume information categorized by topics

  {
    // Programming languages
    id: crypto.randomUUID(),
    title: 'pages.resume.topics.progLanguages.title',
    icon: faCode,
    largeItems: false,
    items: [
      {
        id: crypto.randomUUID(),
        heading: 'HTML',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        image: {
          src: html5,
          alt: 'HTML5 logo',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: 'CSS',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        image: {
          src: css3,
          alt: 'CSS3 logo',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: 'Sass',
        url: 'https://sass-lang.com/',
        image: {
          src: sass,
          alt: 'Sass logo',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: 'JavaScript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        image: {
          src: javaScript,
          alt: 'JavaScript logo',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: 'TypeScript',
        url: 'https://www.typescriptlang.org/',
        image: {
          src: typeScript,
          alt: 'TypeScript logo',
        },
      },
    ],
  },
  {
    // Libraries and frameworks
    id: crypto.randomUUID(),
    title: 'pages.resume.topics.libraries.title',
    icon: faBook,
    largeItems: false,
    items: [
      {
        id: crypto.randomUUID(),
        heading: 'React',
        url: 'https://react.dev/',
        image: {
          src: react,
          alt: 'React logo',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: 'Next.js',
        url: 'https://nextjs.org/',
        image: {
          src: nextJs,
          alt: 'Next.js logo',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: 'Tailwind CSS',
        url: 'https://tailwindcss.com/',
        image: {
          src: tailwindCss,
          alt: 'Tailwind CSS logo',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: 'GSAP',
        url: 'https://greensock.com/gsap/',
        image: {
          src: gsap,
          alt: 'GSAP logo',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: 'Framer Motion',
        url: 'https://www.framer.com/motion/',
        image: {
          src: framerMotion,
          alt: 'Framer Motion logo',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: 'Chart.js',
        url: 'https://www.chartjs.org/',
        image: {
          src: chartJs,
          alt: 'Chart.js logo',
        },
      },
    ],
  },
  {
    // Tools, platforms and others
    id: crypto.randomUUID(),
    title: 'pages.resume.topics.tools.title',
    icon: faScrewdriverWrench,
    largeItems: false,
    items: [
      {
        id: crypto.randomUUID(),
        heading: 'Git',
        url: 'https://git-scm.com/',
        image: {
          src: git,
          alt: 'Git logo',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: 'GitHub',
        url: 'https://github.com/',
        image: {
          src: github,
          alt: 'GitHub logo',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: 'PostgreSQL',
        url: 'https://www.postgresql.org/',
        image: {
          src: postgreSql,
          alt: 'PostgreSQL logo',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: 'Vercel',
        url: 'https://vercel.com/',
        image: {
          src: vercel,
          alt: 'Vercel logo',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: 'Figma',
        url: 'https://www.figma.com/',
        image: {
          src: figma,
          alt: 'Figma logo',
        },
      },
    ],
  },
  {
    // Professional experience
    id: crypto.randomUUID(),
    title: 'pages.resume.topics.professionalExp.title',
    icon: faUserTie,
    largeItems: true,
    items: [
      {
        id: crypto.randomUUID(),
        heading: 'pages.resume.topics.professionalExp.companyIII.heading',
        subheading: 'pages.resume.topics.professionalExp.companyIII.subheading',
        url: 'https://dalvanc.com/',
        image: {
          src: dalvanc,
          alt: 'pages.resume.topics.professionalExp.companyIII.altText',
        },
        roles: ['pages.resume.topics.professionalExp.companyIII.roleI'],
        bulletPoints: [
          'pages.resume.topics.professionalExp.companyIII.bulletI',
          'pages.resume.topics.professionalExp.companyIII.bulletII',
          'pages.resume.topics.professionalExp.companyIII.bulletIII',
        ],
      },
      {
        id: crypto.randomUUID(),
        heading: 'pages.resume.topics.professionalExp.companyII.heading',
        subheading: 'pages.resume.topics.professionalExp.companyII.subheading',
        url: 'https://www.topocart.com.br/',
        image: {
          src: topocart,
          alt: 'pages.resume.topics.professionalExp.companyII.altText',
        },
        roles: [
          'pages.resume.topics.professionalExp.companyII.roleI',
          'pages.resume.topics.professionalExp.companyII.roleII',
        ],
        bulletPoints: [
          'pages.resume.topics.professionalExp.companyII.bulletI',
          'pages.resume.topics.professionalExp.companyII.bulletII',
          'pages.resume.topics.professionalExp.companyII.bulletIII',
        ],
      },
      {
        id: crypto.randomUUID(),
        heading: 'pages.resume.topics.professionalExp.companyI.heading',
        subheading: 'pages.resume.topics.professionalExp.companyI.subheading',
        url: 'http://idbinfo.com.br/',
        image: {
          src: idb,
          alt: 'pages.resume.topics.professionalExp.companyI.altText',
        },
        roles: ['pages.resume.topics.professionalExp.companyI.roleI'],
        bulletPoints: [
          'pages.resume.topics.professionalExp.companyI.bulletI',
          'pages.resume.topics.professionalExp.companyI.bulletII',
        ],
      },
    ],
  },
  {
    // Education
    id: crypto.randomUUID(),
    title: 'pages.resume.topics.education.title',
    icon: faUserGraduate,
    largeItems: true,
    items: [
      {
        id: crypto.randomUUID(),
        heading: 'Google UX Design',
        subheading: 'pages.resume.topics.education.courseVII.subheading',
        url: 'https://www.coursera.org/professional-certificates/conception-ux-google',
        image: {
          src: googleCoursera,
          alt: 'pages.resume.topics.education.courseVII.altText',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: '"The Creative React & Redux Course"',
        subheading: '2023 · developedbyed',
        url: 'https://developedbyed.com/p/the-creative-react-and-redux-course',
        image: {
          src: devByEd,
          alt: 'pages.resume.topics.education.courseVI.altText',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: '"The Creative JavaScript Course"',
        subheading: '2023 · developedbyed',
        url: 'https://developedbyed.com/p/the-creative-javascript-course',
        image: {
          src: devByEd,
          alt: 'pages.resume.topics.education.courseV.altText',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: 'pages.resume.topics.education.courseIV.heading',
        subheading: '2022 - 2023 · Programador BR',
        url: 'https://programadorbr.com/',
        image: {
          src: progBr,
          alt: 'pages.resume.topics.education.courseIV.altText',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: '"The Creative HTML5 & CSS3 Course"',
        subheading: '2022 · developedbyed',
        url: 'https://developedbyed.com/p/the-creative-html5-css3-course',
        image: {
          src: devByEd,
          alt: 'pages.resume.topics.education.courseIII.altText',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: 'pages.resume.topics.education.courseII.heading',
        subheading: '2019 · Udemy',
        url: 'https://www.udemy.com/',
        image: {
          src: udemy,
          alt: 'pages.resume.topics.education.courseII.altText',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: 'pages.resume.topics.education.courseI.heading',
        subheading: '2012 - 2018 · UNISC',
        url: 'https://www.unisc.br/pt/cursos/todos-os-cursos/graduacao/bacharelado/engenharia-civil',
        image: {
          src: unisc,
          alt: 'pages.resume.topics.education.courseI.altText',
        },
      },
    ],
  },
  {
    // Languages
    id: crypto.randomUUID(),
    title: 'pages.resume.topics.languages.title',
    icon: faLanguage,
    largeItems: false,
    items: [
      {
        id: crypto.randomUUID(),
        heading: 'pages.resume.topics.languages.languageI.heading',
        subheading: 'pages.resume.topics.languages.languageI.subheading',
        url: null,
        image: {
          src: pt,
          alt: 'PT logo',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: 'pages.resume.topics.languages.languageII.heading',
        subheading: 'pages.resume.topics.languages.languageII.subheading',
        url: null,
        image: {
          src: en,
          alt: 'EN logo',
        },
      },
      {
        id: crypto.randomUUID(),
        heading: 'pages.resume.topics.languages.languageIII.heading',
        subheading: 'pages.resume.topics.languages.languageIII.subheading',
        url: null,
        image: {
          src: es,
          alt: 'ES logo',
        },
      },
    ],
  },
]

export default RESUME_TOPICS
