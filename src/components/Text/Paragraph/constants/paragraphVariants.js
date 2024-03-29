/* paragraphVariants.js */

const BASE_STYLE = 'text-slate-600 dark:text-gray-400 color-transition'

const primitives = {
  // Fixed text-size
  fixed: {
    xs: `${BASE_STYLE} text-xs`,
    sm: `${BASE_STYLE} text-sm`,
    base: `${BASE_STYLE} text-base`,
    lg: `${BASE_STYLE} text-lg`,
    xl: `${BASE_STYLE} text-xl`,
    '2xl': `${BASE_STYLE} text-2xl`,
  },

  // Variable text-size based in the current breakpoint
  variable: {
    sm: `${BASE_STYLE} text-base 2xl:text-lg`,
    base: `${BASE_STYLE} text-base md:text-lg 2xl:text-xl 2xl:leading-[1.85rem]`,
    lg: `${BASE_STYLE} text-base md:text-xl 2xl:text-2xl 2xl:leading-9`,
  },
}

const modifiers = {
  // prettier-ignore
  weight: {
    thin: 'font-thin'             /* font-weight: 100 */,
    extralight: 'font-extralight' /* font-weight: 200 */,
    light: 'font-light'           /* font-weight: 300 */,
    normal: 'font-normal'         /* font-weight: 400 */,
    medium: 'font-medium'         /* font-weight: 500 */,
    semibold: 'font-semibold'     /* font-weight: 600 */,
    bold: 'font-bold'             /* font-weight: 700 */,
    extrabold: 'font-extrabold'   /* font-weight: 800 */,
    black: 'font-black'           /* font-weight: 900 */,
  },
}

const paragraphVariants = {
  // The font-weight defaults to 500

  'fixed-xs': `${primitives.fixed.xs} ${modifiers.weight.medium}`,
  'fixed-xs-thin': `${primitives.fixed.xs} ${modifiers.weight.thin}`,
  'fixed-xs-extralight': `${primitives.fixed.xs} ${modifiers.weight.extralight}`,
  'fixed-xs-light': `${primitives.fixed.xs} ${modifiers.weight.light}`,
  'fixed-xs-normal': `${primitives.fixed.xs} ${modifiers.weight.normal}`,
  'fixed-xs-semibold': `${primitives.fixed.xs} ${modifiers.weight.semibold}`,
  'fixed-xs-bold': `${primitives.fixed.xs} ${modifiers.weight.bold}`,
  'fixed-xs-extrabold': `${primitives.fixed.xs} ${modifiers.weight.extrabold}`,
  'fixed-xs-black': `${primitives.fixed.xs} ${modifiers.weight.black}`,

  'fixed-sm': `${primitives.fixed.sm} ${modifiers.weight.medium}`,
  'fixed-sm-thin': `${primitives.fixed.sm} ${modifiers.weight.thin}`,
  'fixed-sm-extralight': `${primitives.fixed.sm} ${modifiers.weight.extralight}`,
  'fixed-sm-light': `${primitives.fixed.sm} ${modifiers.weight.light}`,
  'fixed-sm-normal': `${primitives.fixed.sm} ${modifiers.weight.normal}`,
  'fixed-sm-semibold': `${primitives.fixed.sm} ${modifiers.weight.semibold}`,
  'fixed-sm-bold': `${primitives.fixed.sm} ${modifiers.weight.bold}`,
  'fixed-sm-extrabold': `${primitives.fixed.sm} ${modifiers.weight.extrabold}`,
  'fixed-sm-black': `${primitives.fixed.sm} ${modifiers.weight.black}`,

  'fixed-base': `${primitives.fixed.base} ${modifiers.weight.medium}`,
  'fixed-base-thin': `${primitives.fixed.base} ${modifiers.weight.thin}`,
  'fixed-base-extralight': `${primitives.fixed.base} ${modifiers.weight.extralight}`,
  'fixed-base-light': `${primitives.fixed.base} ${modifiers.weight.light}`,
  'fixed-base-normal': `${primitives.fixed.base} ${modifiers.weight.normal}`,
  'fixed-base-semibold': `${primitives.fixed.base} ${modifiers.weight.semibold}`,
  'fixed-base-bold': `${primitives.fixed.base} ${modifiers.weight.bold}`,
  'fixed-base-extrabold': `${primitives.fixed.base} ${modifiers.weight.extrabold}`,
  'fixed-base-black': `${primitives.fixed.base} ${modifiers.weight.black}`,

  'fixed-lg': `${primitives.fixed.lg} ${modifiers.weight.medium}`,
  'fixed-lg-thin': `${primitives.fixed.lg} ${modifiers.weight.thin}`,
  'fixed-lg-extralight': `${primitives.fixed.lg} ${modifiers.weight.extralight}`,
  'fixed-lg-light': `${primitives.fixed.lg} ${modifiers.weight.light}`,
  'fixed-lg-normal': `${primitives.fixed.lg} ${modifiers.weight.normal}`,
  'fixed-lg-semibold': `${primitives.fixed.lg} ${modifiers.weight.semibold}`,
  'fixed-lg-bold': `${primitives.fixed.lg} ${modifiers.weight.bold}`,
  'fixed-lg-extrabold': `${primitives.fixed.lg} ${modifiers.weight.extrabold}`,
  'fixed-lg-black': `${primitives.fixed.lg} ${modifiers.weight.black}`,

  'fixed-xl': `${primitives.fixed.xl} ${modifiers.weight.medium}`,
  'fixed-xl-thin': `${primitives.fixed.xl} ${modifiers.weight.thin}`,
  'fixed-xl-extralight': `${primitives.fixed.xl} ${modifiers.weight.extralight}`,
  'fixed-xl-light': `${primitives.fixed.xl} ${modifiers.weight.light}`,
  'fixed-xl-normal': `${primitives.fixed.xl} ${modifiers.weight.normal}`,
  'fixed-xl-semibold': `${primitives.fixed.xl} ${modifiers.weight.semibold}`,
  'fixed-xl-bold': `${primitives.fixed.xl} ${modifiers.weight.bold}`,
  'fixed-xl-extrabold': `${primitives.fixed.xl} ${modifiers.weight.extrabold}`,
  'fixed-xl-black': `${primitives.fixed.xl} ${modifiers.weight.black}`,

  'fixed-2xl': `${primitives.fixed['2xl']} ${modifiers.weight.medium}`,
  'fixed-2xl-thin': `${primitives.fixed['2xl']} ${modifiers.weight.thin}`,
  'fixed-2xl-extralight': `${primitives.fixed['2xl']} ${modifiers.weight.extralight}`,
  'fixed-2xl-light': `${primitives.fixed['2xl']} ${modifiers.weight.light}`,
  'fixed-2xl-normal': `${primitives.fixed['2xl']} ${modifiers.weight.normal}`,
  'fixed-2xl-semibold': `${primitives.fixed['2xl']} ${modifiers.weight.semibold}`,
  'fixed-2xl-bold': `${primitives.fixed['2xl']} ${modifiers.weight.bold}`,
  'fixed-2xl-extrabold': `${primitives.fixed['2xl']} ${modifiers.weight.extrabold}`,
  'fixed-2xl-black': `${primitives.fixed['2xl']} ${modifiers.weight.black}`,

  sm: `${primitives.variable.sm} ${modifiers.weight.medium}`,
  'sm-thin': `${primitives.variable.sm} ${modifiers.weight.thin}`,
  'sm-extralight': `${primitives.variable.sm} ${modifiers.weight.extralight}`,
  'sm-light': `${primitives.variable.sm} ${modifiers.weight.light}`,
  'sm-normal': `${primitives.variable.sm} ${modifiers.weight.normal}`,
  'sm-semibold': `${primitives.variable.sm} ${modifiers.weight.semibold}`,
  'sm-bold': `${primitives.variable.sm} ${modifiers.weight.bold}`,
  'sm-extrabold': `${primitives.variable.sm} ${modifiers.weight.extrabold}`,
  'sm-black': `${primitives.variable.sm} ${modifiers.weight.black}`,

  base: `${primitives.variable.base} ${modifiers.weight.medium}`,
  'base-thin': `${primitives.variable.base} ${modifiers.weight.thin}`,
  'base-extralight': `${primitives.variable.base} ${modifiers.weight.extralight}`,
  'base-light': `${primitives.variable.base} ${modifiers.weight.light}`,
  'base-normal': `${primitives.variable.base} ${modifiers.weight.normal}`,
  'base-semibold': `${primitives.variable.base} ${modifiers.weight.semibold}`,
  'base-bold': `${primitives.variable.base} ${modifiers.weight.bold}`,
  'base-extrabold': `${primitives.variable.base} ${modifiers.weight.extrabold}`,
  'base-black': `${primitives.variable.base} ${modifiers.weight.black}`,

  lg: `${primitives.variable.lg} ${modifiers.weight.medium}`,
  'lg-thin': `${primitives.variable.lg} ${modifiers.weight.thin}`,
  'lg-extralight': `${primitives.variable.lg} ${modifiers.weight.extralight}`,
  'lg-light': `${primitives.variable.lg} ${modifiers.weight.light}`,
  'lg-normal': `${primitives.variable.lg} ${modifiers.weight.normal}`,
  'lg-semibold': `${primitives.variable.lg} ${modifiers.weight.semibold}`,
  'lg-bold': `${primitives.variable.lg} ${modifiers.weight.bold}`,
  'lg-extrabold': `${primitives.variable.lg} ${modifiers.weight.extrabold}`,
  'lg-black': `${primitives.variable.lg} ${modifiers.weight.black}`,
}

export default paragraphVariants
