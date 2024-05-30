/* projects.js */

import brGeoThumb from '../assets/webp/br-geo.webp'
import personalWebsiteThumb from '../assets/webp/personal-website.webp'
import splitItThumb from '../assets/webp/split-it.webp'

// List of attributes of each project displayed in the 'Projects' section
const PROJECTS = [
  {
    title: 'pages.home.projects.brGeo.title',
    description: 'pages.home.projects.brGeo.description',
    route: 'br-geo',
    isFinished: true,
    links: {
      demo: null,
      repo: null,
    },
    thumbnail: {
      src: brGeoThumb,
      altText: 'pages.home.projects.brGeo.altText',
    },
    stack: [
      {
        tech: 'HTML',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      {
        tech: 'CSS',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
      {
        tech: 'JavaScript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        tech: 'IBGE API',
        url: 'https://servicodados.ibge.gov.br/api/docs',
      },
      {
        tech: 'Chart.js',
        url: 'https://www.chartjs.org/',
      },
    ],
  },
  {
    title: 'pages.home.projects.personalWebsite.title',
    description: 'pages.home.projects.personalWebsite.description',
    route: 'personal-website',
    isFinished: true,
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
        tech: 'Vite',
        url: 'https://vitejs.dev/',
      },
      {
        tech: 'React',
        url: 'https://react.dev/',
      },
      {
        tech: 'Tailwind CSS',
        url: 'https://tailwindcss.com/',
      },
      {
        tech: 'React Router',
        url: 'https://reactrouter.com/en/main',
      },
      {
        tech: 'i18next',
        url: 'https://react.i18next.com/',
      },
      {
        tech: 'EmailJS',
        url: 'https://www.emailjs.com/',
      },
      {
        tech: 'GSAP',
        url: 'https://greensock.com/gsap/',
      },
    ],
  },
  {
    title: 'pages.home.projects.splitIt.title',
    description: 'pages.home.projects.splitIt.description',
    route: 'split-it',
    isFinished: false,
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
        tech: 'Next.js',
        url: 'https://nextjs.org/',
      },
      {
        tech: 'TypeScript',
        url: 'https://www.typescriptlang.org/',
      },
      {
        tech: 'Tailwind CSS',
        url: 'https://tailwindcss.com/',
      },
      {
        tech: 'Framer Motion',
        url: 'https://www.framer.com/motion/',
      },
    ],
  },
]

// Data used inside each project's page
const BR_GEO = PROJECTS[0]
const PERSONAL_WEBSITE = PROJECTS[1]
const SPLIT_IT = PROJECTS[2]

export { PROJECTS as default, BR_GEO, PERSONAL_WEBSITE, SPLIT_IT }
