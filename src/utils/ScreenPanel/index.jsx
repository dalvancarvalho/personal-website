/* ScreenPanel/index.jsx */

import { forwardRef } from 'react'
import {
  faChevronDown,
  faDisplay,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useScreenPanel } from './hooks/useScreenPanel'

export const ScreenPanel = forwardRef(function ScreenPanel(
  { position = 'bottom-right', transparency = true },
  ref
) {
  const { isPanelExpanded, togglePanel, ...screenProps } = useScreenPanel()

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
      data-[position|=top]:data-[panel-expanded=false]:-translate-y-[80%]
      data-[position|=bottom]:bottom-0
      data-[position|=bottom]:rounded-t-2xl
      data-[position|=bottom]:data-[panel-expanded=false]:translate-y-[80%]
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
        className="absolute z-10 right-4 w-8 h-6 rounded-lg hover:transition-colors duration-150
        group-data-[transparency=true]/panel:hover:bg-white/25
        group-data-[transparency=false]/panel:hover:bg-white/15
        group-data-[position|=top]/panel:bottom-4
        group-data-[position|=bottom]/panel:top-4"
        onClick={(event) => togglePanel(event)}
        title={isPanelExpanded ? 'Collapse panel' : 'Expand panel'}
      >
        <FontAwesomeIcon
          className="transition-rotate duration-150 delay-300
          group-data-[position|=top]/panel:group-data-[panel-expanded=true]/panel:rotate-180
          group-data-[position|=bottom]/panel:group-data-[panel-expanded=false]/panel:rotate-180"
          icon={faChevronDown}
          size="sm"
        />
      </button>

      {/* Heading */}
      <div
        className="relative size-full h-14 w-full font-medium cursor-pointer"
        onClick={(event) => togglePanel(event)}
      >
        <p
          className="absolute inset-0 flex items-center justify-center gap-2 transition-opacity duration-500 delay-500
          group-data-[panel-expanded=false]/panel:opacity-0
          group-data-[panel-expanded=false]/panel:delay-300"
        >
          Screen properties
        </p>
        <p
          className="absolute inset-0 flex items-center justify-center gap-2 transition-opacity duration-500 delay-500
          group-data-[panel-expanded=true]/panel:opacity-0
          group-data-[panel-expanded=true]/panel:delay-300"
        >
          <FontAwesomeIcon icon={faDisplay} />
          {screenProps.viewportSize} ({screenProps.screen})
        </p>
      </div>

      {/* Screen properties */}
      <table
        className="mx-4
        group-data-[position|=top]/panel:mt-4
        group-data-[position|=bottom]/panel:mb-4"
      >
        <tbody>
          <tr>
            <th className="th" scope="col">
              Property
            </th>
            <th className="th" scope="col">
              Value
            </th>
          </tr>

          <tr>
            <th className="th-scope-row" scope="row">
              Zoom level
            </th>
            <td className="td">{screenProps.zoomLevel}</td>
          </tr>

          <tr>
            <th className="th-scope-row" scope="row">
              Orientation
            </th>
            <td className="td">{screenProps.orientation}</td>
          </tr>

          <tr>
            <th className="th-scope-row" scope="row">
              Display size
            </th>
            <td className="td">{screenProps.displaySize}</td>
          </tr>

          <tr>
            <th className="th-scope-row" scope="row">
              Viewport size
            </th>
            <td className="td">{screenProps.viewportSize}</td>
          </tr>

          <tr>
            <th className="th-scope-row" scope="row">
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
            </th>
            <td className="td">{screenProps.screen}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
})
