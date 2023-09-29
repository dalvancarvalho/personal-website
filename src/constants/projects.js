/* projects.js */

import brGeoImg from '../assets/webp/br-geo.webp'
import personalPageImg from '../assets/webp/personal-page.webp'
import splitItImg from '../assets/webp/split-it.webp'

const projects = [
  // List of attributes of each project displayed in the 'Projects' section

  {
    altText: 'pages.home.projects.brGeo.altText',
    demoUrl: null,
    description: 'pages.home.projects.brGeo.description',
    githubUrl: null,
    isFinished: true,
    name: 'pages.home.projects.brGeo.name',
    routeName: 'br-geo',
    stack: [
      {
        tech: 'HTML',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      {
        tech: 'Sass',
        url: 'https://sass-lang.com/',
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
    thumbnail: brGeoImg,
  },
  {
    altText: 'pages.home.projects.personalPage.altText',
    demoUrl: null,
    description: 'pages.home.projects.personalPage.description',
    githubUrl: 'https://github.com/dalvancarvalho/personal-page',
    isFinished: true,
    name: 'pages.home.projects.personalPage.name',
    routeName: 'personal-page',
    stack: [
      {
        tech: 'Vite',
        url: 'https://vitejs.dev/',
      },
      {
        tech: 'Tailwind CSS',
        url: 'https://tailwindcss.com/',
      },
      {
        tech: 'React',
        url: 'https://react.dev/',
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
    thumbnail: personalPageImg,
  },
  {
    altText: 'pages.home.projects.splitIt.altText',
    demoUrl: null,
    description: 'pages.home.projects.splitIt.description',
    githubUrl: null,
    isFinished: false,
    name: 'pages.home.projects.splitIt.name',
    routeName: 'split-it',
    stack: [
      {
        tech: 'Next.js',
        url: 'https://nextjs.org/',
      },
      {
        tech: 'Tailwind CSS',
        url: 'https://tailwindcss.com/',
      },
      {
        tech: 'TypeScript',
        url: 'https://www.typescriptlang.org/',
      },
      {
        tech: 'Framer Motion',
        url: 'https://www.framer.com/motion/',
      },
    ],
    thumbnail: splitItImg,
  },
]

// Data used inside each project's page
const brGeoData = projects[0]
const personalPageData = projects[1]
const splitItData = projects[2]

export { projects as default, brGeoData, personalPageData, splitItData }
