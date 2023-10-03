/* Fallback.jsx */

import { Suspense } from 'react'
import Loading from '../../pages/Loading'

function Fallback(props) {
  const { page } = props

  return <Suspense fallback={<Loading />}>{page}</Suspense>
}

export default Fallback
