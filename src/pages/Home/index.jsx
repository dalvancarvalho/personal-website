/* Home/index.jsx */

import { useTranslation } from 'react-i18next'

import useScreenProps from '../../hooks/useScreenProps'
import useScrollSpy from '../../hooks/useScrollSpy'

import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Projects from './Projects'

import Footer from '../../layout/Footer'
import MainSection from '../../layout/Section/MainSection'

import Meta from '../../components/Meta'

function Home() {
  // Home page

  const { t } = useTranslation()
  const screenProps = useScreenProps()
  useScrollSpy()

  return (
    <>
      <Meta
        description="Dalvan Carvalho is a front-end developer who channels his creativity to transform the web into an enjoyable place for everyone."
        title={t('meta.title.home')}
        url="https://dalvanc.com/"
      />
      <MainSection className="min-h-dvh w-full overflow-hidden md:overflow-visible">
        <Hero t={t} />
        <About t={t} />
        <Projects {...screenProps} t={t} />
        <Contact {...screenProps} t={t} />
      </MainSection>
      <Footer />
    </>
  )
}

export default Home
