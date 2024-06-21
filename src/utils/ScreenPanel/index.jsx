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
      className="fixed z-50 bottom-0 min-w-max max-h-max backdrop-blur flex flex-col text-white shadow-2xl overflow-hidden transition-all ease-out duration-300 group/panel
      data-[transparency=true]:data-[panel-expanded=true]:bg-neutral-800/80
      data-[transparency=true]:data-[panel-expanded=false]:bg-neutral-800/40
      data-[transparency=true]:data-[panel-expanded=false]:hover:bg-neutral-800/80
      data-[transparency=false]:data-[panel-expanded]:bg-neutral-800
      data-[transparency=false]:data-[panel-expanded=false]:hover:bg-neutral-700
      data-[panel-expanded=false]:translate-y-[74%]
      data-[position=bottom-center]:right-1/2
      data-[position=bottom-center]:translate-x-1/2
      data-[position=bottom-center]:rounded-t-2xl
      data-[position=bottom-left]:left-4
      data-[position=bottom-left]:rounded-t-2xl
      data-[position=bottom-right]:right-4
      data-[position=bottom-right]:rounded-t-2xl
      data-[position=top-center]:!top-0
      data-[position=top-center]:right-1/2
      data-[position=top-center]:translate-x-1/2
      data-[position=top-center]:rounded-b-2xl
      data-[position=top-center]:flex-col-reverse
      data-[position=top-center]:data-[panel-expanded=false]:!-translate-y-[74%]
      data-[position=top-left]:!top-0
      data-[position=top-left]:left-4
      data-[position=top-left]:rounded-b-2xl
      data-[position=top-left]:flex-col-reverse
      data-[position=top-left]:data-[panel-expanded=false]:!-translate-y-[74%]
      data-[position=top-right]:!top-0
      data-[position=top-right]:right-4
      data-[position=top-right]:rounded-b-2xl
      data-[position=top-right]:flex-col-reverse
      data-[position=top-right]:data-[panel-expanded=false]:!-translate-y-[74%]"
      data-panel-expanded={isPanelExpanded}
      data-position={position}
      data-transparency={transparency}
      ref={ref}
    >
      {/* Toggle button */}
      <button
        className="absolute right-4 w-8 h-6 rounded-lg hover:transition-colors duration-150
        group-data-[position=bottom-center]/panel:top-4
        group-data-[position=bottom-left]/panel:top-4
        group-data-[position=bottom-right]/panel:top-4
        group-data-[position=top-center]/panel:bottom-4
        group-data-[position=top-left]/panel:bottom-4
        group-data-[position=top-right]/panel:bottom-4
        group-data-[transparency=true]/panel:hover:bg-white/25
        group-data-[transparency=false]/panel:hover:bg-white/15"
        onClick={(event) => togglePanel(event)}
        title={isPanelExpanded ? 'Collapse panel' : 'Expand panel'}
      >
        <FontAwesomeIcon
          className="transition-rotate duration-150 delay-300
          group-data-[position=bottom-center]/panel:group-data-[panel-expanded=false]/panel:rotate-180
          group-data-[position=bottom-left]/panel:group-data-[panel-expanded=false]/panel:rotate-180
          group-data-[position=bottom-right]/panel:group-data-[panel-expanded=false]/panel:rotate-180
          group-data-[position=top-center]/panel:group-data-[panel-expanded=true]/panel:rotate-180
          group-data-[position=top-left]/panel:group-data-[panel-expanded=true]/panel:rotate-180
          group-data-[position=top-right]/panel:group-data-[panel-expanded=true]/panel:rotate-180"
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
        group-data-[position=top-center]/panel:mt-4
        group-data-[position=top-left]/panel:mt-4
        group-data-[position=top-right]/panel:mt-4
        group-data-[position=bottom-center]/panel:mb-4
        group-data-[position=bottom-left]/panel:mb-4
        group-data-[position=bottom-right]/panel:mb-4"
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
