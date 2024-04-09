/* paragraphVariants.js */

const BASE_STYLE = 'text-slate-600 dark:text-gray-400 color-transition'

// prettier-ignore
const primitives = {
  // Fixed font-size
  fixed: {
    xs:    `${BASE_STYLE} text-xs`,   // font-size: 12px
    sm:    `${BASE_STYLE} text-sm`,   // font-size: 14px
    base:  `${BASE_STYLE} text-base`, // font-size: 16px
    lg:    `${BASE_STYLE} text-lg`,   // font-size: 18px
    xl:    `${BASE_STYLE} text-xl`,   // font-size: 20px
    '2xl': `${BASE_STYLE} text-2xl`,  // font-size: 24px
  },

  // Variable font-size based in the current breakpoint
  variable: {
    small:  `${BASE_STYLE} text-sm md:text-base`,                    // font-size: 14px || (min-width: 768px) 16px
    medium: `${BASE_STYLE} text-base md:text-lg`,                    // font-size: 16px || (min-width: 768px) 18px
    large:  `${BASE_STYLE} text-lg md:text-xl md:leading-[1.85rem]`, // font-size: 18px || (min-width: 768px) 20px
  },
}

// prettier-ignore
const modifiers = {
  weight: {
    thin:       'font-thin',       // font-weight: 100
    extralight: 'font-extralight', // font-weight: 200
    light:      'font-light',      // font-weight: 300
    normal:     'font-normal',     // font-weight: 400
    medium:     'font-medium',     // font-weight: 500
    semibold:   'font-semibold',   // font-weight: 600
    bold:       'font-bold',       // font-weight: 700
    extrabold:  'font-extrabold',  // font-weight: 800
    black:      'font-black',      // font-weight: 900
  },
}

// prettier-ignore
const paragraphVariants = {
  // The font-weight defaults to 500

  'fixed-xs': `${primitives.fixed.xs} ${modifiers.weight.medium}`,                // font-size: 12px; font-weight: 500
  'fixed-xs-thin': `${primitives.fixed.xs} ${modifiers.weight.thin}`,             // font-size: 12px; font-weight: 100
  'fixed-xs-extralight': `${primitives.fixed.xs} ${modifiers.weight.extralight}`, // font-size: 12px; font-weight: 200
  'fixed-xs-light': `${primitives.fixed.xs} ${modifiers.weight.light}`,           // font-size: 12px; font-weight: 300
  'fixed-xs-normal': `${primitives.fixed.xs} ${modifiers.weight.normal}`,         // font-size: 12px; font-weight: 400
  'fixed-xs-semibold': `${primitives.fixed.xs} ${modifiers.weight.semibold}`,     // font-size: 12px; font-weight: 600
  'fixed-xs-bold': `${primitives.fixed.xs} ${modifiers.weight.bold}`,             // font-size: 12px; font-weight: 700
  'fixed-xs-extrabold': `${primitives.fixed.xs} ${modifiers.weight.extrabold}`,   // font-size: 12px; font-weight: 800
  'fixed-xs-black': `${primitives.fixed.xs} ${modifiers.weight.black}`,           // font-size: 12px; font-weight: 900

  'fixed-sm': `${primitives.fixed.sm} ${modifiers.weight.medium}`,                // font-size: 14px; font-weight: 500
  'fixed-sm-thin': `${primitives.fixed.sm} ${modifiers.weight.thin}`,             // font-size: 14px; font-weight: 100
  'fixed-sm-extralight': `${primitives.fixed.sm} ${modifiers.weight.extralight}`, // font-size: 14px; font-weight: 200
  'fixed-sm-light': `${primitives.fixed.sm} ${modifiers.weight.light}`,           // font-size: 14px; font-weight: 300
  'fixed-sm-normal': `${primitives.fixed.sm} ${modifiers.weight.normal}`,         // font-size: 14px; font-weight: 400
  'fixed-sm-semibold': `${primitives.fixed.sm} ${modifiers.weight.semibold}`,     // font-size: 14px; font-weight: 600
  'fixed-sm-bold': `${primitives.fixed.sm} ${modifiers.weight.bold}`,             // font-size: 14px; font-weight: 700
  'fixed-sm-extrabold': `${primitives.fixed.sm} ${modifiers.weight.extrabold}`,   // font-size: 14px; font-weight: 800
  'fixed-sm-black': `${primitives.fixed.sm} ${modifiers.weight.black}`,           // font-size: 14px; font-weight: 900

  'fixed-base': `${primitives.fixed.base} ${modifiers.weight.medium}`,                // font-size: 16px; font-weight: 500
  'fixed-base-thin': `${primitives.fixed.base} ${modifiers.weight.thin}`,             // font-size: 16px; font-weight: 100
  'fixed-base-extralight': `${primitives.fixed.base} ${modifiers.weight.extralight}`, // font-size: 16px; font-weight: 200
  'fixed-base-light': `${primitives.fixed.base} ${modifiers.weight.light}`,           // font-size: 16px; font-weight: 300
  'fixed-base-normal': `${primitives.fixed.base} ${modifiers.weight.normal}`,         // font-size: 16px; font-weight: 400
  'fixed-base-semibold': `${primitives.fixed.base} ${modifiers.weight.semibold}`,     // font-size: 16px; font-weight: 600
  'fixed-base-bold': `${primitives.fixed.base} ${modifiers.weight.bold}`,             // font-size: 16px; font-weight: 700
  'fixed-base-extrabold': `${primitives.fixed.base} ${modifiers.weight.extrabold}`,   // font-size: 16px; font-weight: 800
  'fixed-base-black': `${primitives.fixed.base} ${modifiers.weight.black}`,           // font-size: 16px; font-weight: 900

  'fixed-lg': `${primitives.fixed.lg} ${modifiers.weight.medium}`,                // font-size: 18px; font-weight: 500
  'fixed-lg-thin': `${primitives.fixed.lg} ${modifiers.weight.thin}`,             // font-size: 18px; font-weight: 100
  'fixed-lg-extralight': `${primitives.fixed.lg} ${modifiers.weight.extralight}`, // font-size: 18px; font-weight: 200
  'fixed-lg-light': `${primitives.fixed.lg} ${modifiers.weight.light}`,           // font-size: 18px; font-weight: 300
  'fixed-lg-normal': `${primitives.fixed.lg} ${modifiers.weight.normal}`,         // font-size: 18px; font-weight: 400
  'fixed-lg-semibold': `${primitives.fixed.lg} ${modifiers.weight.semibold}`,     // font-size: 18px; font-weight: 600
  'fixed-lg-bold': `${primitives.fixed.lg} ${modifiers.weight.bold}`,             // font-size: 18px; font-weight: 700
  'fixed-lg-extrabold': `${primitives.fixed.lg} ${modifiers.weight.extrabold}`,   // font-size: 18px; font-weight: 800
  'fixed-lg-black': `${primitives.fixed.lg} ${modifiers.weight.black}`,           // font-size: 18px; font-weight: 900

  'fixed-xl': `${primitives.fixed.xl} ${modifiers.weight.medium}`,                // font-size: 20px; font-weight: 500
  'fixed-xl-thin': `${primitives.fixed.xl} ${modifiers.weight.thin}`,             // font-size: 20px; font-weight: 100
  'fixed-xl-extralight': `${primitives.fixed.xl} ${modifiers.weight.extralight}`, // font-size: 20px; font-weight: 200
  'fixed-xl-light': `${primitives.fixed.xl} ${modifiers.weight.light}`,           // font-size: 20px; font-weight: 300
  'fixed-xl-normal': `${primitives.fixed.xl} ${modifiers.weight.normal}`,         // font-size: 20px; font-weight: 400
  'fixed-xl-semibold': `${primitives.fixed.xl} ${modifiers.weight.semibold}`,     // font-size: 20px; font-weight: 600
  'fixed-xl-bold': `${primitives.fixed.xl} ${modifiers.weight.bold}`,             // font-size: 20px; font-weight: 700
  'fixed-xl-extrabold': `${primitives.fixed.xl} ${modifiers.weight.extrabold}`,   // font-size: 20px; font-weight: 800
  'fixed-xl-black': `${primitives.fixed.xl} ${modifiers.weight.black}`,           // font-size: 20px; font-weight: 900

  'fixed-2xl': `${primitives.fixed['2xl']} ${modifiers.weight.medium}`,                // font-size: 24px; font-weight: 500
  'fixed-2xl-thin': `${primitives.fixed['2xl']} ${modifiers.weight.thin}`,             // font-size: 24px; font-weight: 100
  'fixed-2xl-extralight': `${primitives.fixed['2xl']} ${modifiers.weight.extralight}`, // font-size: 24px; font-weight: 200
  'fixed-2xl-light': `${primitives.fixed['2xl']} ${modifiers.weight.light}`,           // font-size: 24px; font-weight: 300
  'fixed-2xl-normal': `${primitives.fixed['2xl']} ${modifiers.weight.normal}`,         // font-size: 24px; font-weight: 400
  'fixed-2xl-semibold': `${primitives.fixed['2xl']} ${modifiers.weight.semibold}`,     // font-size: 24px; font-weight: 600
  'fixed-2xl-bold': `${primitives.fixed['2xl']} ${modifiers.weight.bold}`,             // font-size: 24px; font-weight: 700
  'fixed-2xl-extrabold': `${primitives.fixed['2xl']} ${modifiers.weight.extrabold}`,   // font-size: 24px; font-weight: 800
  'fixed-2xl-black': `${primitives.fixed['2xl']} ${modifiers.weight.black}`,           // font-size: 24px; font-weight: 900

  small: `${primitives.variable.small} ${modifiers.weight.medium}`,                  // font-size: 14px || (min-width: 768px) 16px; font-weight: 500
  'small-thin': `${primitives.variable.small} ${modifiers.weight.thin}`,             // font-size: 14px || (min-width: 768px) 16px; font-weight: 100
  'small-extralight': `${primitives.variable.small} ${modifiers.weight.extralight}`, // font-size: 14px || (min-width: 768px) 16px; font-weight: 200
  'small-light': `${primitives.variable.small} ${modifiers.weight.light}`,           // font-size: 14px || (min-width: 768px) 16px; font-weight: 300
  'small-normal': `${primitives.variable.small} ${modifiers.weight.normal}`,         // font-size: 14px || (min-width: 768px) 16px; font-weight: 400
  'small-semibold': `${primitives.variable.small} ${modifiers.weight.semibold}`,     // font-size: 14px || (min-width: 768px) 16px; font-weight: 600
  'small-bold': `${primitives.variable.small} ${modifiers.weight.bold}`,             // font-size: 14px || (min-width: 768px) 16px; font-weight: 700
  'small-extrabold': `${primitives.variable.small} ${modifiers.weight.extrabold}`,   // font-size: 14px || (min-width: 768px) 16px; font-weight: 800
  'small-black': `${primitives.variable.small} ${modifiers.weight.black}`,           // font-size: 14px || (min-width: 768px) 16px; font-weight: 900

  medium: `${primitives.variable.medium} ${modifiers.weight.medium}`,                  // font-size: 16px || (min-width: 768px) 18px; font-weight: 500
  'medium-thin': `${primitives.variable.medium} ${modifiers.weight.thin}`,             // font-size: 16px || (min-width: 768px) 18px; font-weight: 100
  'medium-extralight': `${primitives.variable.medium} ${modifiers.weight.extralight}`, // font-size: 16px || (min-width: 768px) 18px; font-weight: 200
  'medium-light': `${primitives.variable.medium} ${modifiers.weight.light}`,           // font-size: 16px || (min-width: 768px) 18px; font-weight: 300
  'medium-normal': `${primitives.variable.medium} ${modifiers.weight.normal}`,         // font-size: 16px || (min-width: 768px) 18px; font-weight: 400
  'medium-semibold': `${primitives.variable.medium} ${modifiers.weight.semibold}`,     // font-size: 16px || (min-width: 768px) 18px; font-weight: 600
  'medium-bold': `${primitives.variable.medium} ${modifiers.weight.bold}`,             // font-size: 16px || (min-width: 768px) 18px; font-weight: 700
  'medium-extrabold': `${primitives.variable.medium} ${modifiers.weight.extrabold}`,   // font-size: 16px || (min-width: 768px) 18px; font-weight: 800
  'medium-black': `${primitives.variable.medium} ${modifiers.weight.black}`,           // font-size: 16px || (min-width: 768px) 18px; font-weight: 900

  large: `${primitives.variable.large} ${modifiers.weight.medium}`,                  // font-size: 18px || (min-width: 768px) 20px; font-weight: 500
  'large-thin': `${primitives.variable.large} ${modifiers.weight.thin}`,             // font-size: 18px || (min-width: 768px) 20px; font-weight: 100
  'large-extralight': `${primitives.variable.large} ${modifiers.weight.extralight}`, // font-size: 18px || (min-width: 768px) 20px; font-weight: 200
  'large-light': `${primitives.variable.large} ${modifiers.weight.light}`,           // font-size: 18px || (min-width: 768px) 20px; font-weight: 300
  'large-normal': `${primitives.variable.large} ${modifiers.weight.normal}`,         // font-size: 18px || (min-width: 768px) 20px; font-weight: 400
  'large-semibold': `${primitives.variable.large} ${modifiers.weight.semibold}`,     // font-size: 18px || (min-width: 768px) 20px; font-weight: 600
  'large-bold': `${primitives.variable.large} ${modifiers.weight.bold}`,             // font-size: 18px || (min-width: 768px) 20px; font-weight: 700
  'large-extrabold': `${primitives.variable.large} ${modifiers.weight.extrabold}`,   // font-size: 18px || (min-width: 768px) 20px; font-weight: 800
  'large-black': `${primitives.variable.large} ${modifiers.weight.black}`,           // font-size: 18px || (min-width: 768px) 20px; font-weight: 900

  'large-extended': `${primitives.variable.large} 2xl:text-2xl 2xl:leading-9 ${modifiers.weight.medium}`, // font-size: 18px || (min-width: 768px) 20px || (min-width: 1536px) 24px; font-weight: 500
}

export default paragraphVariants
