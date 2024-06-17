/* Accordion/index.jsx */
// Component from Radix (https://www.radix-ui.com/)

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion'

export function AccordionItem({ className = '', ...props }) {
  // Wraps the 'AccordionTrigger' and 'AccordionContent' components

  return (
    <Item
      className={`${className} border-b border-slate-200 dark:border-dark-2 transition-[border-color] duration-300`}
      {...props}
    />
  )
}

export function AccordionTrigger({ children, className = '', ...props }) {
  // Toggles the visibility of the 'AccordionContent'

  return (
    <Header className="flex group">
      <Trigger
        className={`${className} p-4 flex flex-1 items-center justify-between hover:bg-slate-100 hover:dark:bg-dark-4 text-left [&[data-state=open]>svg]:rotate-180`}
        {...props}
      >
        {children}
        <FontAwesomeIcon
          className="ml-3 transition-transform duration-300"
          icon={faChevronDown}
        />
      </Trigger>
    </Header>
  )
}

export function AccordionContent({ children, className = '', ...props }) {
  // Displays the content when the 'AccordionTrigger' is opened

  return (
    <Content
      className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={`${className} pb-4 pt-0`}>{children}</div>
    </Content>
  )
}

export default Root
