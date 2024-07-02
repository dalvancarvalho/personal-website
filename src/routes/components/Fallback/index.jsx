/* Fallback/index.jsx */

import { Suspense } from 'react'

import Loading from '../../../pages/Loading'

export function Fallback({ page }) {
  // Fallback component that displays a loading page while the selected route loads

  return <Suspense fallback={<Loading />}>{page}</Suspense>
}
