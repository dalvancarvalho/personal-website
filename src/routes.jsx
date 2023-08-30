/* routes.jsx */

import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Loading from './components/Loading'
// import Home from './pages/Home'

// Main page
const Home = lazy(() => import('./pages/Home'))

// Projects
const BRGeo = lazy(() => import('./pages/BRGeo'))
const PersonalPage = lazy(() => import('./pages/PersonalPage'))
const SplitIt = lazy(() => import('./pages/SplitIt'))

// 404 page
const NotFound = lazy(() => import('./pages/NotFound'))

function AppRoutes() {
  // Manages the page rendered to each specified route
  // Note: If a new route is added, update the file 'logoText.js'

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/br-geo"
        element={
          <Suspense fallback={<Loading />}>
            <BRGeo />
          </Suspense>
        }
      />
      <Route
        path="/personal-page"
        element={
          <Suspense fallback={<Loading />}>
            <PersonalPage />
          </Suspense>
        }
      />
      <Route
        path="/split-it"
        element={
          <Suspense fallback={<Loading />}>
            <SplitIt />
          </Suspense>
        }
      />
      <Route
        path="/404"
        element={
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  )
}

export default AppRoutes
