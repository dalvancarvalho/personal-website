/* Fallback.jsx */

import { Suspense } from 'react'
import Loading from '../../pages/Loading'

function Fallback(props) {
  // Fallback component that displays a loading page while the selected route loads

  const { page } = props

  return <Suspense fallback={<Loading />}>{page}</Suspense>
}

export default Fallback
