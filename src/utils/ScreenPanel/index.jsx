/* ScreenPanel/index.jsx */

import { forwardRef } from 'react'
import {
  faChevronDown,
  faDisplay,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useScreenPanel from './hooks/useScreenPanel'

import { TableData, TableHeader, TableRow } from './components/TableCells'

const ScreenPanel = forwardRef(function ScreenPanel(
  { position = 'bottom-right', transparency = true },
  ref
) {
  const { isPanelExpanded, togglePanel, orientation, viewportSize, screen } =
    useScreenPanel()

  return (
    <div
      className="fixed z-50 min-w-max max-h-max backdrop-blur flex flex-col text-white shadow-2xl overflow-hidden transition-all ease-out duration-300 group/panel
      data-[transparency=true]:data-[panel-expanded=true]:bg-neutral-800/80
      data-[transparency=true]:data-[panel-expanded=false]:bg-neutral-800/40
      data-[transparency=true]:data-[panel-expanded=false]:hover:bg-neutral-800/80
      data-[transparency=false]:data-[panel-expanded]:bg-neutral-800
      data-[transparency=false]:data-[panel-expanded=false]:hover:bg-neutral-700
      data-[position|=top]:top-0
      data-[position|=top]:rounded-b-2xl
      data-[position|=top]:flex-col-reverse
      data-[position|=top]:data-[panel-expanded=false]:-translate-y-[74%]
      data-[position|=bottom]:bottom-0
      data-[position|=bottom]:rounded-t-2xl
      data-[position|=bottom]:data-[panel-expanded=false]:translate-y-[74%]
      data-[position$=left]:left-4
      data-[position$=center]:right-1/2
      data-[position$=center]:translate-x-1/2
      data-[position$=right]:right-4"
      data-panel-expanded={isPanelExpanded}
      data-position={position}
      data-transparency={transparency}
      ref={ref}
    >
      {/* Toggle button */}
      <button
        className="absolute right-4 w-8 h-6 rounded-lg hover:transition-colors duration-150
        group-data-[position|=bottom]/panel:top-4
        group-data-[position|=top]/panel:bottom-4
        group-data-[transparency=true]/panel:hover:bg-white/25
        group-data-[transparency=false]/panel:hover:bg-white/15"
        onClick={(event) => togglePanel(event)}
        title={isPanelExpanded ? 'Collapse panel' : 'Expand panel'}
      >
        <FontAwesomeIcon
          className="transition-rotate duration-150 delay-300
          group-data-[position|=bottom]/panel:group-data-[panel-expanded=false]/panel:rotate-180
          group-data-[position|=top]/panel:group-data-[panel-expanded=true]/panel:rotate-180"
          icon={faChevronDown}
          size="sm"
        />
      </button>

      {/* Heading */}
      <div
        className="size-full p-4 flex items-center gap-2 justify-center font-medium cursor-pointer"
        onClick={(event) => togglePanel(event)}
      >
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
      <table
        className="mx-4
        group-data-[position|=top]/panel:mt-4
        group-data-[position|=bottom]/panel:mb-4"
      >
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
                className="ml-2 group/link"
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
    </div>
  )
})
ScreenPanel.displayName = 'ScreenPanel'

export default ScreenPanel
