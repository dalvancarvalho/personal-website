/* variants.js */

const buttonVariants = {
  minimalist: {
    style:
      'relative text-slate-500 dark:text-gray-400 focus-visible:text-slate-900 focus-visible:dark:text-gray-200 cursor-pointer color-transition button-hover group',
  },
  primary: {
    style:
      'relative px-[1.5em] py-[0.75em] rounded-[0.5em] flex items-center justify-center gap-[0.5em] bg-accent focus-visible:bg-blue-500 focus-visible:dark:bg-orange-400 text-white dark:text-black text-sm 2xl:text-base font-semibold tracking-wider whitespace-nowrap shadow-md color-transition call-to-action-hover group/button',
  },
  secondary: {
    style:
      'relative ring-none py-[0.75em] rounded-[0.5em] flex items-center justify-center gap-2 text-accent text-sm 2xl:text-base font-semibold decoration-2 focus-visible:underline tracking-wider whitespace-nowrap color-transition secondary-button-hover group',
  },
}

export default buttonVariants
