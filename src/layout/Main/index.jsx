/* Main/index.jsx */

import useScrollToTop from './hooks/useScrollToTop'

function Main({ children }) {
  // Wraps the pages of the application

  useScrollToTop()

  return <main className="main overflow-hidden">{children}</main>
}

export default Main
