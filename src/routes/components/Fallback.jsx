/* Fallback.jsx */

import { Suspense } from 'react'
import Loading from '../../pages/Loading'

function Fallback({ page }) {
  return <Suspense fallback={<Loading />}>{page}</Suspense>
}

export default Fallback
