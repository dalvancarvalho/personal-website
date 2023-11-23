/* projects.js */

import brGeoImg from '../assets/webp/br-geo.webp'
import personalWebsiteImg from '../assets/webp/personal-website.webp'
import splitItImg from '../assets/webp/split-it.webp'

const projects = [
  // List of attributes of each project displayed in the 'Projects' section

  {
    altText: 'pages.home.projects.brGeo.altText',
    demoUrl: null,
    description: 'pages.home.projects.brGeo.description',
    githubRepoUrl: null,
    isFinished: true,
    name: 'pages.home.projects.brGeo.name',
    routeName: 'br-geo',
    stack: [
      {
        name: 'HTML',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      {
        name: 'Sass',
        url: 'https://sass-lang.com/',
      },
      {
        name: 'JavaScript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'IBGE API',
        url: 'https://servicodados.ibge.gov.br/api/docs',
      },
      {
        name: 'Chart.js',
        url: 'https://www.chartjs.org/',
      },
    ],
    subject: 'pageHeader.breadcrumbs.projects',
    thumbnail: brGeoImg,
  },
  {
    altText: 'pages.home.projects.personalWebsite.altText',
    demoUrl: null,
    description: 'pages.home.projects.personalWebsite.description',
    githubRepoUrl: 'https://github.com/dalvancarvalho/personal-website',
    isFinished: true,
    name: 'pages.home.projects.personalWebsite.name',
    routeName: 'personal-website',
    stack: [
      {
        name: 'Vite',
        url: 'https://vitejs.dev/',
      },
      {
        name: 'Tailwind CSS',
        url: 'https://tailwindcss.com/',
      },
      {
        name: 'React',
        url: 'https://react.dev/',
      },
      {
        name: 'React Router',
        url: 'https://reactrouter.com/en/main',
      },
      {
        name: 'i18next',
        url: 'https://react.i18next.com/',
      },
      {
        name: 'EmailJS',
        url: 'https://www.emailjs.com/',
      },
      {
        name: 'GSAP',
        url: 'https://greensock.com/gsap/',
      },
    ],
    subject: 'pageHeader.breadcrumbs.projects',
    thumbnail: personalWebsiteImg,
  },
  {
    altText: 'pages.home.projects.splitIt.altText',
    demoUrl: null,
    description: 'pages.home.projects.splitIt.description',
    githubRepoUrl: null,
    isFinished: false,
    name: 'pages.home.projects.splitIt.name',
    routeName: 'split-it',
    stack: [
      {
        name: 'Next.js',
        url: 'https://nextjs.org/',
      },
      {
        name: 'Tailwind CSS',
        url: 'https://tailwindcss.com/',
      },
      {
        name: 'TypeScript',
        url: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Framer Motion',
        url: 'https://www.framer.com/motion/',
      },
    ],
    subject: 'pageHeader.breadcrumbs.projects',
    thumbnail: splitItImg,
  },
]

// Data used inside each project's page
const brGeoData = projects[0]
const personalWebsiteData = projects[1]
const splitItData = projects[2]

export { projects as default, brGeoData, personalWebsiteData, splitItData }
