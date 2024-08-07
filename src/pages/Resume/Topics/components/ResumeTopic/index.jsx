/* ResumeTopic/index.jsx */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../../../components/Accordion'
import { Paragraph } from '../../../../../components/Text/Paragraph'

export function ResumeTopic({ icon, index, items, largeItems, title }) {
  // Displays all the items related to a topic of the resume

  const normalizedIndex = index + 1

  const { t } = useTranslation()

  return (
    <AccordionItem value={`item-${normalizedIndex}`}>
      <AccordionTrigger>
        <Paragraph
          className="flex items-center gap-3 !text-slate-800 dark:!text-gray-200"
          variant="medium-bold"
        >
          <FontAwesomeIcon
            className="w-6 rounded-full p-2 bg-slate-200 dark:bg-dark-1 text-slate-800 dark:text-gray-200 transition-colors duration-300
            group-focus-visible:bg-blue-400/25
                    group-hover:bg-blue-400/25
            group-focus-visible:dark:bg-orange-500/25
                    group-hover:dark:bg-orange-500/25"
            icon={icon}
          />
          {t(title)}
        </Paragraph>
      </AccordionTrigger>
      <AccordionContent>
        <ul
          className="mt-2 md:px-4 grid gap-x-2 data-[large-items=true]:grid-cols-1 data-[large-items=false]:grid-cols-2 data-[large-items=false]:lg:grid-cols-3"
          data-large-items={largeItems}
        >
          {items.map(({ bulletPoints, heading, id, image, roles, subheading, url }) =>
            largeItems ? (
              <li
                className="data-[bullet-points=true]:mb-8 data-[bullet-points=true]:last:mb-0 group"
                data-bullet-points={bulletPoints ? true : false}
                key={id}
              >
                <a
                  className="relative group-data-[bullet-points=true]:mb-3.5 group-data-[bullet-points=false]:mb-1.5 rounded-lg pl-5 pr-[15px] py-2 bg-slate-100 dark:bg-dark-2 hover:bg-slate-150 hover:dark:bg-dark-1 flex items-center overflow-hidden color-transition group"
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="absolute left-0 w-[5px] h-full bg-accent color-transition"></div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-semibold text-slate-800 dark:text-gray-200 color-transition">
                      {t(heading)}
                    </h4>
                    <Paragraph
                      className="flex flex-wrap items-center gap-x-1 !text-slate-600 dark:!text-gray-400 text-pretty"
                      i18nKey={subheading}
                      variant="small-semibold"
                    />
                  </div>
                  <img
                    alt={t(image?.alt)}
                    className="ml-3.5 w-24 max-h-11 h-auto select-none dark:opacity-60 group-hover:dark:opacity-90 dark:brightness-0 dark:invert transition-[filter,opacity] duration-300"
                    src={image?.src}
                  />
                </a>
                {roles?.map(({ id, role }) => (
                  <Paragraph
                    className="ml-5 !text-slate-800 dark:!text-gray-200"
                    i18nKey={role}
                    key={id}
                    variant="medium-semibold"
                  />
                ))}
                <ul>
                  {bulletPoints?.map(({ bulletPoint, id }) => (
                    <li className="mt-2 ml-5 flex gap-3.5" key={id}>
                      <span className="pt-0.5 text-slate-800 dark:text-gray-200 font-black color-transition select-none">
                        •
                      </span>
                      <Paragraph i18nKey={bulletPoint} variant="medium" />
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li className="mb-1.5" key={id}>
                <a
                  className="relative isolate min-h-12 h-full rounded-md pl-5 pr-[15px] py-2 bg-slate-100 dark:bg-dark-2 hover:bg-slate-150 hover:dark:bg-dark-1 flex items-center overflow-hidden color-transition group"
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="absolute left-0 w-[5px] h-full bg-accent color-transition"></div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-semibold text-slate-800 dark:text-gray-200 color-transition">
                      {t(heading)}
                    </h4>
                    {subheading && (
                      <Paragraph
                        className="!text-slate-600 dark:!text-gray-400 text-pretty"
                        i18nKey={subheading}
                        variant="small-semibold"
                      />
                    )}
                  </div>
                  <img
                    className="absolute -z-10 -right-4 md:right-0 h-32 select-none opacity-[3%] group-hover:scale-125 brightness-0 dark:invert rotate-[15deg] transition-[opacity, scale] duration-300"
                    src={image?.src}
                  />
                  <img
                    alt={image?.alt}
                    className="ml-2 w-8 select-none opacity-30 dark:opacity-60 group-hover:opacity-100 group-hover:dark:opacity-90 brightness-0 group-hover:brightness-100 group-hover:dark:brightness-0 dark:invert transition-all duration-300"
                    src={image?.src}
                  />
                </a>
              </li>
            )
          )}
        </ul>
      </AccordionContent>
    </AccordionItem>
  )
}
