/* index.jsx */

import { useTranslation } from 'react-i18next'
import useScreenProps from '../../hooks/useScreenProps'
import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Footer from '../../components/Footer'
import SEO from '../../components/SEO'

function Home() {
  // Home page

  const screenProps = useScreenProps()
  const { t } = useTranslation()

  return (
    <>
      <SEO
        description="Dalvan Carvalho is a Front-End Developer who channels his creativity to transform the web into an enjoyable place for everyone."
        title={t('meta.title.home')}
        url="https://dalvanc.com/"
      />
      <section className="w-full overflow-hidden md:overflow-y-clip md:overflow-x-visible">
        <Hero t={t} />
        <About screenProps={screenProps} t={t} />
        <Projects screenProps={screenProps} t={t} />
        <Contact screenProps={screenProps} t={t} />
      </section>
      <Footer />
    </>
  )
}

export default Home
