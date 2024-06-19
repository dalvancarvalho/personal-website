/* ScreenPanel/index.jsx */

import {
  faChevronDown,
  faDisplay,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useScreenPanel from '../../context/ScreenPanelContext'

import { TableData, TableHeader, TableRow } from './components/TableCells'

export default function ScreenPanel() {
  const { isPanelExpanded, togglePanel, orientation, viewportSize, screen } =
    useScreenPanel()

  return (
    <div
      className="fixed z-50 -bottom-4 right-4 size-max rounded-xl p-4 pb-8 bg-neutral-800/80 backdrop-blur text-white grid place-items-center shadow-2xl transition-all ease-out duration-300 group/panel
      data-[panel-expanded=false]:hover:bg-neutral-800/80
      data-[panel-expanded=false]:bg-neutral-800/40
      data-[panel-expanded=false]:translate-y-[68%]
      data-[panel-expanded=false]:cursor-pointer"
      data-panel-expanded={isPanelExpanded}
      onClick={(event) => (isPanelExpanded ? null : togglePanel(event))}
    >
      {/* Title */}
      <div className="relative mb-4 h-6 flex items-center gap-2 font-medium">
        <FontAwesomeIcon icon={faDisplay} />
        {isPanelExpanded ? (
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
              <a
                className="ml-2 cursor-pointer group/link"
                href="https://tailwindcss.com/docs/responsive-design"
                rel="noopener noreferrer"
                target="_blank"
                title="Learn more about the screen sizes..."
              >
                <FontAwesomeIcon
                  className="w-6 opacity-70 group-hover/link:opacity-100 transition-all duration-300"
                  icon={faQuestionCircle}
                  size="sm"
                />
              </a>
            </TableHeader>
            <TableData className="td">{screen}</TableData>
          </TableRow>
        </tbody>
      </table>

      {/* Toggle button */}
      <button
        className="absolute top-4 right-4 w-8 h-6 rounded-lg hover:bg-white/25 hover:transition-colors duration-150"
        onClick={(event) => togglePanel(event)}
        title="Expand panel"
      >
        <FontAwesomeIcon
          className="group-data-[panel-expanded=false]/panel:rotate-180 transition-rotate duration-150 delay-300"
          icon={faChevronDown}
          size="sm"
        />
      </button>
    </div>
  )
}
