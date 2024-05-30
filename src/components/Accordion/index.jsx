/* Accordion/index.jsx */
// Base component from Radix

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion'

function AccordionItem({ className = '', ...props }) {
  return (
    <Item
      className={`${className} border-b border-slate-200 dark:border-dark-2 transition-[border-color] duration-300`}
      {...props}
    />
  )
}

function AccordionTrigger({ children, className = '', ...props }) {
  return (
    <Header className="flex group">
      <Trigger
        className={`${className} flex flex-1 items-center justify-between py-4 [&[data-state=open]>svg]:rotate-180`}
        {...props}
      >
        {children}
        <FontAwesomeIcon
          className="transition-transform duration-300"
          icon={faChevronDown}
        />
      </Trigger>
    </Header>
  )
}

function AccordionContent({ children, className = '', ...props }) {
  return (
    <Content
      className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={`${className} pb-4 pt-0`}>{children}</div>
    </Content>
  )
}

export { Root as default, AccordionContent, AccordionItem, AccordionTrigger }
