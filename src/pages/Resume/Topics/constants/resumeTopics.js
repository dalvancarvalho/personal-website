/* resumeTopics.js */

import {
  faBook,
  faCode,
  faLanguage,
  faScrewdriverWrench,
  faUserGraduate,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons'

import css3 from '../../../../assets/svg/css3-logo.svg'
import html5 from '../../../../assets/svg/html5-logo.svg'
import javaScript from '../../../../assets/svg/javascript-logo.svg'
import sass from '../../../../assets/svg/sass-logo.svg'
import typeScript from '../../../../assets/svg/typescript-logo.svg'

import chartJs from '../../../../assets/svg/chartjs-logo.svg'
import framerMotion from '../../../../assets/svg/framer-motion-logo.svg'
import gsap from '../../../../assets/svg/gsap-logo.svg'
import nextJs from '../../../../assets/svg/nextjs-logo.svg'
import react from '../../../../assets/svg/react-logo.svg'
import tailwindCss from '../../../../assets/svg/tailwindcss-logo.svg'

import figma from '../../../../assets/svg/figma-logo.svg'
import git from '../../../../assets/svg/git-logo.svg'
import github from '../../../../assets/svg/github-logo.svg'
import postgreSql from '../../../../assets/svg/postgresql-logo.svg'
import vercel from '../../../../assets/svg/vercel-logo.svg'

import dalvanc from '../../../../assets/svg/dalvanc-logo.svg'
import dalvancDark from '../../../../assets/svg/dalvanc-dark-logo.svg'
import idb from '../../../../assets/svg/idb-logo.svg'
import topocart from '../../../../assets/svg/topocart-logo.svg'
import topocartDark from '../../../../assets/svg/topocart-dark-logo.svg'

import devByEd from '../../../../assets/svg/dev-by-ed-logo.svg'
import devByEdDark from '../../../../assets/svg/dev-by-ed-dark-logo.svg'
import progBr from '../../../../assets/svg/prog-br-logo.svg'
import udemy from '../../../../assets/svg/udemy-logo.svg'
import udemyDark from '../../../../assets/svg/udemy-dark-logo.svg'
import unisc from '../../../../assets/svg/unisc-logo.svg'
import uniscDark from '../../../../assets/svg/unisc-dark-logo.svg'

import en from '../../../../assets/svg/en-logo.svg'
import es from '../../../../assets/svg/es-logo.svg'
import pt from '../../../../assets/svg/pt-logo.svg'

const RESUME_TOPICS = [
  // Resume information categorized by topics

  {
    // Programming languages
    largeCards: false,
    topic: 'pages.resume.topics.progLanguages.title',
    icon: faCode,
    items: [
      {
        heading: 'HTML',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        image: {
          src: html5,
          alt: 'HTML5 logo',
        },
      },
      {
        heading: 'CSS',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        image: {
          src: css3,
          alt: 'CSS3 logo',
        },
      },
      {
        heading: 'Sass',
        url: 'https://sass-lang.com/',
        image: {
          src: sass,
          alt: 'Sass logo',
        },
      },
      {
        heading: 'JavaScript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        image: {
          src: javaScript,
          alt: 'JavaScript logo',
        },
      },
      {
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
    largeCards: false,
    topic: 'pages.resume.topics.libraries.title',
    icon: faBook,
    items: [
      {
        heading: 'React',
        url: 'https://react.dev/',
        image: {
          src: react,
          alt: 'React logo',
        },
      },
      {
        heading: 'Next.js',
        url: 'https://nextjs.org/',
        image: {
          src: nextJs,
          alt: 'Next.js logo',
        },
      },
      {
        heading: 'Tailwind CSS',
        url: 'https://tailwindcss.com/',
        image: {
          src: tailwindCss,
          alt: 'Tailwind CSS logo',
        },
      },
      {
        heading: 'GSAP',
        url: 'https://greensock.com/gsap/',
        image: {
          src: gsap,
          alt: 'GSAP logo',
        },
      },
      {
        heading: 'Framer Motion',
        url: 'https://www.framer.com/motion/',
        image: {
          src: framerMotion,
          alt: 'Framer Motion logo',
        },
      },
      {
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
    largeCards: false,
    topic: 'pages.resume.topics.tools.title',
    icon: faScrewdriverWrench,
    items: [
      {
        heading: 'Git',
        url: 'https://git-scm.com/',
        image: {
          src: git,
          alt: 'Git logo',
        },
      },
      {
        heading: 'GitHub',
        url: 'https://github.com/',
        image: {
          src: github,
          alt: 'GitHub logo',
        },
      },
      {
        heading: 'PostgreSQL',
        url: 'https://www.postgresql.org/',
        image: {
          src: postgreSql,
          alt: 'PostgreSQL logo',
        },
      },
      {
        heading: 'Vercel',
        url: 'https://vercel.com/',
        image: {
          src: vercel,
          alt: 'Vercel logo',
        },
      },
      {
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
    largeCards: true,
    topic: 'pages.resume.topics.professionalExp.title',
    icon: faUserTie,
    items: [
      {
        heading: 'pages.resume.topics.professionalExp.companyIII.heading',
        subheading: 'pages.resume.topics.professionalExp.companyIII.subheading',
        url: 'https://dalvanc.com/',
        image: {
          src: dalvanc,
          srcDark: dalvancDark,
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
        heading: 'pages.resume.topics.professionalExp.companyII.heading',
        subheading: 'pages.resume.topics.professionalExp.companyII.subheading',
        url: 'https://www.topocart.com.br/',
        image: {
          src: topocart,
          srcDark: topocartDark,
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
        heading: 'pages.resume.topics.professionalExp.companyI.heading',
        subheading: 'pages.resume.topics.professionalExp.companyI.subheading',
        url: 'http://idbinfo.com.br/',
        image: {
          src: idb,
          srcDark: idb,
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
    largeCards: true,
    topic: 'pages.resume.topics.education.title',
    icon: faUserGraduate,
    items: [
      {
        heading: '"The Creative React and Redux Course"',
        subheading: '2023 · developed by ed',
        url: 'https://developedbyed.com/p/the-creative-react-and-redux-course',
        image: {
          src: devByEd,
          srcDark: devByEdDark,
          alt: 'pages.resume.topics.education.courseVI.altText',
        },
      },
      {
        heading: '"The Creative JavaScript Course"',
        subheading: '2023 · developed by ed',
        url: 'https://developedbyed.com/p/the-creative-javascript-course',
        image: {
          src: devByEd,
          srcDark: devByEdDark,
          alt: 'pages.resume.topics.education.courseV.altText',
        },
      },
      {
        heading: 'pages.resume.topics.education.courseIV.heading',
        subheading: '2022 - 2023 · Programador BR',
        url: 'https://programadorbr.com/',
        image: {
          src: progBr,
          srcDark: progBr,
          alt: 'pages.resume.topics.education.courseIV.altText',
        },
      },
      {
        heading: '"The Creative HTML5 & CSS3 Course"',
        subheading: '2022 · developed by ed',
        url: 'https://developedbyed.com/p/the-creative-html5-css3-course',
        image: {
          src: devByEd,
          srcDark: devByEdDark,
          alt: 'pages.resume.topics.education.courseIII.altText',
        },
      },
      {
        heading: 'pages.resume.topics.education.courseII.heading',
        subheading: '2019 · Udemy',
        url: 'https://www.udemy.com/',
        image: {
          src: udemy,
          srcDark: udemyDark,
          alt: 'pages.resume.topics.education.courseII.altText',
        },
      },
      {
        heading: 'pages.resume.topics.education.courseI.heading',
        subheading: '2012 - 2018 · UNISC',
        url: 'https://www.unisc.br/pt/',
        image: {
          src: unisc,
          srcDark: uniscDark,
          alt: 'pages.resume.topics.education.courseI.altText',
        },
      },
    ],
  },
  {
    // Languages
    largeCards: false,
    topic: 'pages.resume.topics.languages.title',
    icon: faLanguage,
    items: [
      {
        heading: 'pages.resume.topics.languages.languageI.heading',
        subheading: 'pages.resume.topics.languages.languageI.subheading',
        url: null,
        image: {
          src: pt,
          alt: 'PT logo',
        },
      },
      {
        heading: 'pages.resume.topics.languages.languageII.heading',
        subheading: 'pages.resume.topics.languages.languageII.subheading',
        url: null,
        image: {
          src: en,
          alt: 'EN logo',
        },
      },
      {
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
