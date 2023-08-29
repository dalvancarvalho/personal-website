/* index.jsx */

import { useTranslation } from 'react-i18next'
import Introduction from './sections/Introduction'
import Footer from '../../components/Footer'
import MainSection from '../../components/MainSection'
import PageTitle from '../../components/PageTitle'
import SEO from '../../components/SEO'
import { splitItData } from '../../constants/projects'

function SplitIt() {
  // Split it!

  const { demoUrl, githubUrl, name } = splitItData
  const { t } = useTranslation()

  return (
    <>
      <SEO
        description="Split it! allows for a fair division of expenses among all group members in a simple and intuitive way!"
        title={t('meta.title.splitIt')}
        url="https://dalvanc.com/split-it"
      />
      <MainSection className="h-full flex flex-col items-center">
        <PageTitle demoUrl={demoUrl} githubUrl={githubUrl} id="home" name={name} t={t} />
        <Introduction t={t} />
        {/* Details... */}
      </MainSection>
      <Footer />
    </>
  )
}

export default SplitIt
