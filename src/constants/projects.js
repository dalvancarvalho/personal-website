/* projects.js */

import brGeoThumb from '../assets/webp/br-geo.webp'
import personalWebsiteThumb from '../assets/webp/personal-website.webp'
import splitItThumb from '../assets/webp/split-it.webp'

import chartJs from '../assets/svg/logos/chartjs.svg'
import css3 from '../assets/svg/logos/css3.svg'
import framerMotion from '../assets/svg/logos/framer-motion.svg'
import gsap from '../assets/svg/logos/gsap.svg'
import html5 from '../assets/svg/logos/html5.svg'
import ibge from '../assets/svg/logos/ibge.svg'
import i18next from '../assets/svg/logos/i18next.svg'
import javaScript from '../assets/svg/logos/javascript.svg'
import nextJs from '../assets/svg/logos/nextjs.svg'
import react from '../assets/svg/logos/react.svg'
import reactRouter from '../assets/svg/logos/react-router.svg'
import tailwindCss from '../assets/svg/logos/tailwind-css.svg'
import typeScript from '../assets/svg/logos/typescript.svg'
import vite from '../assets/svg/logos/vite.svg'

// List of attributes of each project displayed in the 'Projects' section
export const PROJECTS = [
  {
    id: crypto.randomUUID(),
    heading: 'pages.home.projects.brGeo.heading',
    description: 'pages.home.projects.brGeo.description',
    route: 'br-geo',
    inProgress: false,
    links: {
      demo: null,
      repo: 'https://github.com/dalvancarvalho/br-geo',
    },
    thumbnail: {
      src: brGeoThumb,
      altText: 'pages.home.projects.brGeo.altText',
    },
    stack: [
      {
        id: crypto.randomUUID(),
        tech: 'HTML5',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        image: {
          src: html5,
          alt: 'HTML5 logo',
        },
      },
      {
        id: crypto.randomUUID(),
        tech: 'CSS3',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        image: {
          src: css3,
          alt: 'CSS3 logo',
        },
      },
      {
        id: crypto.randomUUID(),
        tech: 'JavaScript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        image: {
          src: javaScript,
          alt: 'JavaScript logo',
        },
      },
      {
        id: crypto.randomUUID(),
        tech: 'IBGE API',
        url: 'https://servicodados.ibge.gov.br/api/docs',
        image: {
          src: ibge,
          alt: 'IBGE logo',
        },
      },
      {
        id: crypto.randomUUID(),
        tech: 'Chart.js',
        url: 'https://www.chartjs.org/',
        image: {
          src: chartJs,
          alt: 'Chart.js logo',
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    heading: 'pages.home.projects.personalWebsite.heading',
    description: 'pages.home.projects.personalWebsite.description',
    route: 'personal-website',
    inProgress: false,
    links: {
      demo: null,
      repo: 'https://github.com/dalvancarvalho/personal-website',
    },
    thumbnail: {
      src: personalWebsiteThumb,
      altText: 'pages.home.projects.personalWebsite.altText',
    },
    stack: [
      {
        id: crypto.randomUUID(),
        tech: 'Vite',
        url: 'https://vitejs.dev/',
        image: {
          src: vite,
          alt: 'Vite logo',
        },
      },
      {
        id: crypto.randomUUID(),
        tech: 'React',
        url: 'https://react.dev/',
        image: {
          src: react,
          alt: 'React logo',
        },
      },
      {
        id: crypto.randomUUID(),
        tech: 'Tailwind CSS',
        url: 'https://tailwindcss.com/',
        image: {
          src: tailwindCss,
          alt: 'Tailwind CSS logo',
        },
      },
      {
        id: crypto.randomUUID(),
        tech: 'GSAP',
        url: 'https://greensock.com/gsap/',
        image: {
          src: gsap,
          alt: 'GSAP logo',
        },
      },
      {
        id: crypto.randomUUID(),
        tech: 'i18next',
        url: 'https://react.i18next.com/',
        image: {
          src: i18next,
          alt: 'i18next logo',
        },
      },
      {
        id: crypto.randomUUID(),
        tech: 'React Router',
        url: 'https://reactrouter.com/en/main',
        image: {
          src: reactRouter,
          alt: 'React Router logo',
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    heading: 'pages.home.projects.splitIt.heading',
    description: 'pages.home.projects.splitIt.description',
    route: 'split-it',
    inProgress: true,
    links: {
      demo: null,
      repo: null,
    },
    thumbnail: {
      src: splitItThumb,
      altText: 'pages.home.projects.splitIt.altText',
    },
    stack: [
      {
        id: crypto.randomUUID(),
        tech: 'Next.js',
        url: 'https://nextjs.org/',
        image: {
          src: nextJs,
          alt: 'Next.js logo',
        },
      },
      {
        id: crypto.randomUUID(),
        tech: 'TypeScript',
        url: 'https://www.typescriptlang.org/',
        image: {
          src: typeScript,
          alt: 'TypeScript logo',
        },
      },
      {
        id: crypto.randomUUID(),
        tech: 'Tailwind CSS',
        url: 'https://tailwindcss.com/',
        image: {
          src: tailwindCss,
          alt: 'Tailwind CSS logo',
        },
      },
      {
        id: crypto.randomUUID(),
        tech: 'Framer Motion',
        url: 'https://www.framer.com/motion/',
        image: {
          src: framerMotion,
          alt: 'Framer Motion logo',
        },
      },
    ],
  },
]

// Data used inside each project's page
export const brGeo = PROJECTS[0]
export const personalWebsite = PROJECTS[1]
export const splitIt = PROJECTS[2]
