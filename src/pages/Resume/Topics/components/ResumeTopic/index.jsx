/* ResumeTopic/index.jsx */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../../../components/Accordion'
import Paragraph from '../../../../../components/Text/Paragraph'

export default function ResumeTopic({ icon, index, items, largeItems, t, title }) {
  // Displays all the items related to a topic of the resume

  return (
    <AccordionItem value={`item-${index + 1}`}>
      <AccordionTrigger>
        <Paragraph
          variant="medium-bold"
          className="flex items-center gap-3 !text-slate-800 dark:!text-gray-200"
        >
          <FontAwesomeIcon
            className="w-6 rounded-full p-2 group-hover:text-accent bg-slate-200 dark:bg-dark-1 text-slate-800 dark:text-gray-200 transition-colors duration-300"
            icon={icon}
          />
          {t(title)}
        </Paragraph>
      </AccordionTrigger>
      <AccordionContent>
        <ul
          className={`mt-2 grid ${
            !largeItems ? 'grid-cols-2 lg:grid-cols-3 gap-x-2' : 'grid-cols-1'
          }`}
        >
          {items.map(({ bulletPoints, heading, id, image, roles, subheading, url }) =>
            largeItems ? (
              <li className={bulletPoints ? 'mb-8 last:mb-0' : null} key={id}>
                <a
                  className={`rounded-md border-l-[5px] border-accent px-[15px] py-2 bg-slate-100 dark:bg-dark-2 hover:bg-slate-150 hover:dark:bg-dark-1 flex items-center overflow-hidden color-transition group ${
                    bulletPoints ? 'mb-3.5' : 'mb-1'
                  }`}
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-semibold text-slate-800 dark:text-gray-200 color-transition">
                      {t(heading)}
                    </h4>
                    <Paragraph
                      className="flex flex-wrap items-center gap-x-2 !text-slate-600 dark:!text-gray-400 text-pretty"
                      i18nKey={subheading}
                      variant="small-semibold"
                    />
                  </div>
                  <img
                    className="ml-3.5 w-24 max-h-11 h-auto dark:opacity-60 group-hover:dark:opacity-90 dark:brightness-0 dark:invert transition-[filter,opacity] duration-300"
                    src={image?.src}
                    alt={t(image?.alt)}
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
                  {bulletPoints?.map(({ id, bulletPoint }) => (
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
              <li className="mb-1" key={id}>
                <a
                  className="relative isolate min-h-12 h-full rounded-md border-l-[5px] border-accent px-[15px] py-2 bg-slate-100 dark:bg-dark-2 hover:bg-slate-150 hover:dark:bg-dark-1 flex items-center overflow-hidden color-transition group"
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
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
                    className="ml-2 w-8 opacity-30 dark:opacity-60 group-hover:opacity-100 group-hover:dark:opacity-90 brightness-0 group-hover:brightness-100 group-hover:dark:brightness-0 dark:invert transition-all duration-300"
                    src={image?.src}
                    alt={image?.alt}
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
