/* buttonVariants.js */

const BASE_STYLE = `relative py-[0.75em] rounded-[0.5em] flex items-center justify-center gap-[0.5em] text-sm font-semibold tracking-wider whitespace-nowrap color-transition group/button`

const primitives = {
  primary: `${BASE_STYLE} px-[1.5em] bg-accent focus-visible:bg-blue-500 focus-visible:dark:bg-orange-400 text-white dark:text-black 2xl:text-base shadow-md primary-button-hover`,
  secondary: `${BASE_STYLE} ring-none text-accent 2xl:text-base decoration-2 focus-visible:underline secondary-button-hover`,
  submitting: `${BASE_STYLE} px-[1.5em] bg-gray-400 dark:bg-gray-500 text-white 2xl:text-base shadow-md pointer-events-none`,
  unstyled: `relative text-slate-500 dark:text-gray-400 focus-visible:text-slate-900 focus-visible:dark:text-gray-200 cursor-pointer color-transition unstyled-button-hover group`,
}

const modifiers = {
  text: {
    lg: 'md:text-base 2xl:text-lg',
  },
  height: {
    full: 'h-full',
  },
  width: {
    full: 'w-full',
  },
}

const buttonVariants = {
  primary: primitives.primary,
  'primary-lg': `${primitives.primary} ${modifiers.text.lg}`,
  'primary-h-full': `${primitives.primary} ${modifiers.height.full}`,
  'primary-w-full': `${primitives.primary} ${modifiers.width.full}`,

  secondary: primitives.secondary,
  'secondary-lg': `${primitives.secondary} ${modifiers.text.lg}`,
  'secondary-h-full': `${primitives.secondary} ${modifiers.height.full}`,
  'secondary-w-full': `${primitives.secondary} ${modifiers.width.full}`,

  submitting: primitives.submitting,
  'submitting-lg': `${primitives.submitting} ${modifiers.text.lg}`,
  'submitting-h-full': `${primitives.submitting} ${modifiers.height.full}`,
  'submitting-w-full': `${primitives.submitting} ${modifiers.width.full}`,

  unstyled: primitives.unstyled,
}

export default buttonVariants
