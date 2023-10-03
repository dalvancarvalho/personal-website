/* Main/index.jsx */

import useScrollToTop from './hooks/useScrollToTop'

function Main(props) {
  // Wraps the pages of the application

  useScrollToTop()

  return <main className="main overflow-hidden">{props.children}</main>
}

export default Main
