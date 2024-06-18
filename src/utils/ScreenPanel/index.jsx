/* ScreenPanel/index.jsx */

import { faChevronDown, faDisplay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useScreenPanel from '../../context/ScreenPanelContext'

import { TableData, TableHeader, TableRow } from './components/TableCells'

export default function ScreenPanel() {
  const { isPanelOpen, togglePanel, orientation, viewportSize, screen } = useScreenPanel()

  return (
    <div
      className="fixed z-50 -bottom-4 right-4 size-max rounded-xl p-4 pb-8 bg-neutral-800/80 backdrop-blur text-white grid place-items-center shadow-2xl transition-all ease-out duration-300 group/panel
      data-[open=false]:hover:bg-neutral-800/80
      data-[open=false]:bg-neutral-800/40
      data-[open=false]:translate-y-[65%]"
      data-open={isPanelOpen}
    >
      {/* Title */}
      <div className="relative mb-4 h-6 flex items-center gap-2 font-medium">
        <FontAwesomeIcon icon={faDisplay} />
        {isPanelOpen ? (
          <p>Screen properties</p>
        ) : (
          <p>
            {viewportSize} ({screen})
          </p>
        )}
      </div>

      {/* Screen properties */}
      <table>
        <tbody>
          <TableRow>
            <TableHeader className="th" scope="col">
              Property
            </TableHeader>
            <TableHeader className="th" scope="col">
              Value
            </TableHeader>
          </TableRow>

          <TableRow>
            <TableHeader className="th-scope-row" scope="row">
              Orientation
            </TableHeader>
            <TableData className="td">{orientation}</TableData>
          </TableRow>

          <TableRow>
            <TableHeader className="th-scope-row" scope="row">
              Viewport size
            </TableHeader>
            <TableData className="td">{viewportSize}</TableData>
          </TableRow>

          <TableRow>
            <TableHeader className="th-scope-row" scope="row">
              Screen size
            </TableHeader>
            <TableData className="td">{screen}</TableData>
          </TableRow>
        </tbody>
      </table>

      {/* Toggle button */}
      <button
        className="absolute top-4 right-4 w-6 rounded hover:bg-white/25 transition-colors duration-150"
        onClick={togglePanel}
      >
        <FontAwesomeIcon
          className="group-data-[open=false]/panel:rotate-180 transition-rotate duration-150 delay-300"
          icon={faChevronDown}
          size="sm"
        />
      </button>
    </div>
  )
}
