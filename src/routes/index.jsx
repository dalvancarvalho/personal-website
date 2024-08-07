/* routes/index.jsx */

import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Fallback } from './components/Fallback'

// Dynamic imports
const BreakpointMonitor = lazy(() => import('../pages/BreakpointMonitor'))
const BRGeo = lazy(() => import('../pages/BRGeo'))
const Home = lazy(() => import('../pages/Home'))
const NotFound = lazy(() => import('../pages/NotFound'))
const PersonalWebsite = lazy(() => import('../pages/PersonalWebsite'))
const Resume = lazy(() => import('../pages/Resume'))
const SplitIt = lazy(() => import('../pages/SplitIt'))

// prettier-ignore
export function AppRoutes() {
  // Manages the page rendered to each specified route
  // Note: If a new route is added, update the file 'logoText.js'

  return (
    <Routes>
      <Route path="/"                   element={<Fallback page={<Home />} />} />
      <Route path="/404"                element={<Fallback page={<NotFound />} />} />
      <Route path="/breakpoint-monitor" element={<Fallback page={<BreakpointMonitor />} />} />
      <Route path="/br-geo"             element={<Fallback page={<BRGeo />} />} />
      <Route path="/personal-website"   element={<Fallback page={<PersonalWebsite />} />} />
      <Route path="/resume"             element={<Fallback page={<Resume />} />} />
      <Route path="/split-it"           element={<Fallback page={<SplitIt />} />} />
      <Route path="*"                   element={<Navigate to="/404" />} />
    </Routes>
  )
}
