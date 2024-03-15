/* Accordion/index.jsx */
// Component from Radix

import { forwardRef } from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

const Accordion = AccordionPrimitive.Root

const AccordionItem = forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={`${className} border-b`} {...props} />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={`${className} flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180`}
      {...props}
    >
      {children}
      <FontAwesomeIcon className="transition-all" icon={faChevronDown} />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={`${className} pb-4 pt-0`}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
