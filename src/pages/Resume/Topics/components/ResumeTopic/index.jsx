/* ResumeTopic/index.jsx */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useTheme from '../../../../../context/ThemeContext'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../../../components/Accordion'
import Paragraph from '../../../../../components/Text/Paragraph'

export default function ResumeTopic({ icon, index, items, largeItems, t, title }) {
  // Displays all the items related to a topic of the resume

  const { theme } = useTheme()

  return (
    <AccordionItem value={`item-${index + 1}`}>
      <AccordionTrigger>
        <Paragraph
          variant="medium-bold"
          className="flex items-center gap-3 !text-slate-800 dark:!text-gray-200"
        >
          <FontAwesomeIcon
            className="w-6 group-hover:text-accent bg-slate-200 dark:bg-dark-1 text-slate-800 dark:text-gray-200 transition-colors duration-300 p-2 rounded-full"
            icon={icon}
          />
          {t(title)}
        </Paragraph>
      </AccordionTrigger>
      <AccordionContent>
        <ul className={!largeItems ? 'grid grid-cols-2 lg:grid-cols-3 gap-x-2' : null}>
          {items.map(({ bulletPoints, heading, id, image, roles, subheading, url }) =>
            largeItems ? (
              <li className={bulletPoints ? 'mb-8 last:mb-0' : null} key={id}>
                <a
                  className={`rounded-md border-l-[5px] border-accent hover:border-blue-500 hover:dark:border-orange-400 px-[15px] py-2 bg-slate-100 dark:bg-dark-2 hover:bg-slate-150 hover:dark:bg-dark-1 flex items-center overflow-hidden color-transition group ${
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
                      className="!text-slate-600 dark:!text-gray-400 text-pretty"
                      i18nKey={subheading}
                      variant="small-semibold"
                    />
                  </div>
                  <img
                    className="ml-3.5 w-24 max-h-12 h-auto"
                    src={theme === 'light' ? image?.src : image?.srcDark}
                    alt={t(image?.alt)}
                  />
                </a>
                {roles?.map((role) => (
                  <Paragraph
                    className="ml-5 !text-slate-800 dark:!text-gray-200"
                    i18nKey={role}
                    key={role}
                    variant="medium-semibold"
                  />
                ))}
                <ul>
                  {bulletPoints?.map((bulletPoint) => (
                    <li className="mt-2 ml-5 flex gap-3.5" key={bulletPoint}>
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
                  className="relative isolate min-h-12 h-full rounded-md border-l-[5px] border-accent hover:border-blue-500 hover:dark:border-orange-400 px-[15px] py-2 bg-slate-100 dark:bg-dark-2 hover:bg-slate-150 hover:dark:bg-dark-1 flex items-center overflow-hidden color-transition group"
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
                    className={`absolute -z-10 -right-4 md:right-0 h-32 select-none group-hover:scale-125 rotate-[15deg] transition-[opacity, scale] duration-300 ${
                      theme === 'light' ? 'opacity-10' : 'opacity-5'
                    }`}
                    src={image?.src}
                  />
                  <img className="ml-2 w-8" src={image?.src} alt={image?.alt} />
                </a>
              </li>
            )
          )}
        </ul>
      </AccordionContent>
    </AccordionItem>
  )
}
