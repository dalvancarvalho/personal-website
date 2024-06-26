/* paragraphVariants.js */

const BASE_STYLE = 'text-slate-600 dark:text-gray-400 text-pretty color-transition'

// prettier-ignore
const PRIMITIVES = {
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
const MODIFIERS = {
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
const PARAGRAPH_VARIANTS = {
  // The font-weight defaults to 500

  'fixed-xs': `${PRIMITIVES.fixed.xs} ${MODIFIERS.weight.medium}`,                     // font-size: 12px; font-weight: 500
  'fixed-xs-thin': `${PRIMITIVES.fixed.xs} ${MODIFIERS.weight.thin}`,                  // font-size: 12px; font-weight: 100
  'fixed-xs-extralight': `${PRIMITIVES.fixed.xs} ${MODIFIERS.weight.extralight}`,      // font-size: 12px; font-weight: 200
  'fixed-xs-light': `${PRIMITIVES.fixed.xs} ${MODIFIERS.weight.light}`,                // font-size: 12px; font-weight: 300
  'fixed-xs-normal': `${PRIMITIVES.fixed.xs} ${MODIFIERS.weight.normal}`,              // font-size: 12px; font-weight: 400
  'fixed-xs-semibold': `${PRIMITIVES.fixed.xs} ${MODIFIERS.weight.semibold}`,          // font-size: 12px; font-weight: 600
  'fixed-xs-bold': `${PRIMITIVES.fixed.xs} ${MODIFIERS.weight.bold}`,                  // font-size: 12px; font-weight: 700
  'fixed-xs-extrabold': `${PRIMITIVES.fixed.xs} ${MODIFIERS.weight.extrabold}`,        // font-size: 12px; font-weight: 800
  'fixed-xs-black': `${PRIMITIVES.fixed.xs} ${MODIFIERS.weight.black}`,                // font-size: 12px; font-weight: 900

  'fixed-sm': `${PRIMITIVES.fixed.sm} ${MODIFIERS.weight.medium}`,                     // font-size: 14px; font-weight: 500
  'fixed-sm-thin': `${PRIMITIVES.fixed.sm} ${MODIFIERS.weight.thin}`,                  // font-size: 14px; font-weight: 100
  'fixed-sm-extralight': `${PRIMITIVES.fixed.sm} ${MODIFIERS.weight.extralight}`,      // font-size: 14px; font-weight: 200
  'fixed-sm-light': `${PRIMITIVES.fixed.sm} ${MODIFIERS.weight.light}`,                // font-size: 14px; font-weight: 300
  'fixed-sm-normal': `${PRIMITIVES.fixed.sm} ${MODIFIERS.weight.normal}`,              // font-size: 14px; font-weight: 400
  'fixed-sm-semibold': `${PRIMITIVES.fixed.sm} ${MODIFIERS.weight.semibold}`,          // font-size: 14px; font-weight: 600
  'fixed-sm-bold': `${PRIMITIVES.fixed.sm} ${MODIFIERS.weight.bold}`,                  // font-size: 14px; font-weight: 700
  'fixed-sm-extrabold': `${PRIMITIVES.fixed.sm} ${MODIFIERS.weight.extrabold}`,        // font-size: 14px; font-weight: 800
  'fixed-sm-black': `${PRIMITIVES.fixed.sm} ${MODIFIERS.weight.black}`,                // font-size: 14px; font-weight: 900

  'fixed-base': `${PRIMITIVES.fixed.base} ${MODIFIERS.weight.medium}`,                 // font-size: 16px; font-weight: 500
  'fixed-base-thin': `${PRIMITIVES.fixed.base} ${MODIFIERS.weight.thin}`,              // font-size: 16px; font-weight: 100
  'fixed-base-extralight': `${PRIMITIVES.fixed.base} ${MODIFIERS.weight.extralight}`,  // font-size: 16px; font-weight: 200
  'fixed-base-light': `${PRIMITIVES.fixed.base} ${MODIFIERS.weight.light}`,            // font-size: 16px; font-weight: 300
  'fixed-base-normal': `${PRIMITIVES.fixed.base} ${MODIFIERS.weight.normal}`,          // font-size: 16px; font-weight: 400
  'fixed-base-semibold': `${PRIMITIVES.fixed.base} ${MODIFIERS.weight.semibold}`,      // font-size: 16px; font-weight: 600
  'fixed-base-bold': `${PRIMITIVES.fixed.base} ${MODIFIERS.weight.bold}`,              // font-size: 16px; font-weight: 700
  'fixed-base-extrabold': `${PRIMITIVES.fixed.base} ${MODIFIERS.weight.extrabold}`,    // font-size: 16px; font-weight: 800
  'fixed-base-black': `${PRIMITIVES.fixed.base} ${MODIFIERS.weight.black}`,            // font-size: 16px; font-weight: 900

  'fixed-lg': `${PRIMITIVES.fixed.lg} ${MODIFIERS.weight.medium}`,                     // font-size: 18px; font-weight: 500
  'fixed-lg-thin': `${PRIMITIVES.fixed.lg} ${MODIFIERS.weight.thin}`,                  // font-size: 18px; font-weight: 100
  'fixed-lg-extralight': `${PRIMITIVES.fixed.lg} ${MODIFIERS.weight.extralight}`,      // font-size: 18px; font-weight: 200
  'fixed-lg-light': `${PRIMITIVES.fixed.lg} ${MODIFIERS.weight.light}`,                // font-size: 18px; font-weight: 300
  'fixed-lg-normal': `${PRIMITIVES.fixed.lg} ${MODIFIERS.weight.normal}`,              // font-size: 18px; font-weight: 400
  'fixed-lg-semibold': `${PRIMITIVES.fixed.lg} ${MODIFIERS.weight.semibold}`,          // font-size: 18px; font-weight: 600
  'fixed-lg-bold': `${PRIMITIVES.fixed.lg} ${MODIFIERS.weight.bold}`,                  // font-size: 18px; font-weight: 700
  'fixed-lg-extrabold': `${PRIMITIVES.fixed.lg} ${MODIFIERS.weight.extrabold}`,        // font-size: 18px; font-weight: 800
  'fixed-lg-black': `${PRIMITIVES.fixed.lg} ${MODIFIERS.weight.black}`,                // font-size: 18px; font-weight: 900

  'fixed-xl': `${PRIMITIVES.fixed.xl} ${MODIFIERS.weight.medium}`,                     // font-size: 20px; font-weight: 500
  'fixed-xl-thin': `${PRIMITIVES.fixed.xl} ${MODIFIERS.weight.thin}`,                  // font-size: 20px; font-weight: 100
  'fixed-xl-extralight': `${PRIMITIVES.fixed.xl} ${MODIFIERS.weight.extralight}`,      // font-size: 20px; font-weight: 200
  'fixed-xl-light': `${PRIMITIVES.fixed.xl} ${MODIFIERS.weight.light}`,                // font-size: 20px; font-weight: 300
  'fixed-xl-normal': `${PRIMITIVES.fixed.xl} ${MODIFIERS.weight.normal}`,              // font-size: 20px; font-weight: 400
  'fixed-xl-semibold': `${PRIMITIVES.fixed.xl} ${MODIFIERS.weight.semibold}`,          // font-size: 20px; font-weight: 600
  'fixed-xl-bold': `${PRIMITIVES.fixed.xl} ${MODIFIERS.weight.bold}`,                  // font-size: 20px; font-weight: 700
  'fixed-xl-extrabold': `${PRIMITIVES.fixed.xl} ${MODIFIERS.weight.extrabold}`,        // font-size: 20px; font-weight: 800
  'fixed-xl-black': `${PRIMITIVES.fixed.xl} ${MODIFIERS.weight.black}`,                // font-size: 20px; font-weight: 900

  'fixed-2xl': `${PRIMITIVES.fixed['2xl']} ${MODIFIERS.weight.medium}`,                // font-size: 24px; font-weight: 500
  'fixed-2xl-thin': `${PRIMITIVES.fixed['2xl']} ${MODIFIERS.weight.thin}`,             // font-size: 24px; font-weight: 100
  'fixed-2xl-extralight': `${PRIMITIVES.fixed['2xl']} ${MODIFIERS.weight.extralight}`, // font-size: 24px; font-weight: 200
  'fixed-2xl-light': `${PRIMITIVES.fixed['2xl']} ${MODIFIERS.weight.light}`,           // font-size: 24px; font-weight: 300
  'fixed-2xl-normal': `${PRIMITIVES.fixed['2xl']} ${MODIFIERS.weight.normal}`,         // font-size: 24px; font-weight: 400
  'fixed-2xl-semibold': `${PRIMITIVES.fixed['2xl']} ${MODIFIERS.weight.semibold}`,     // font-size: 24px; font-weight: 600
  'fixed-2xl-bold': `${PRIMITIVES.fixed['2xl']} ${MODIFIERS.weight.bold}`,             // font-size: 24px; font-weight: 700
  'fixed-2xl-extrabold': `${PRIMITIVES.fixed['2xl']} ${MODIFIERS.weight.extrabold}`,   // font-size: 24px; font-weight: 800
  'fixed-2xl-black': `${PRIMITIVES.fixed['2xl']} ${MODIFIERS.weight.black}`,           // font-size: 24px; font-weight: 900

  small: `${PRIMITIVES.variable.small} ${MODIFIERS.weight.medium}`,                    // font-size: 14px || (min-width: 768px) 16px; font-weight: 500
  'small-thin': `${PRIMITIVES.variable.small} ${MODIFIERS.weight.thin}`,               // font-size: 14px || (min-width: 768px) 16px; font-weight: 100
  'small-extralight': `${PRIMITIVES.variable.small} ${MODIFIERS.weight.extralight}`,   // font-size: 14px || (min-width: 768px) 16px; font-weight: 200
  'small-light': `${PRIMITIVES.variable.small} ${MODIFIERS.weight.light}`,             // font-size: 14px || (min-width: 768px) 16px; font-weight: 300
  'small-normal': `${PRIMITIVES.variable.small} ${MODIFIERS.weight.normal}`,           // font-size: 14px || (min-width: 768px) 16px; font-weight: 400
  'small-semibold': `${PRIMITIVES.variable.small} ${MODIFIERS.weight.semibold}`,       // font-size: 14px || (min-width: 768px) 16px; font-weight: 600
  'small-bold': `${PRIMITIVES.variable.small} ${MODIFIERS.weight.bold}`,               // font-size: 14px || (min-width: 768px) 16px; font-weight: 700
  'small-extrabold': `${PRIMITIVES.variable.small} ${MODIFIERS.weight.extrabold}`,     // font-size: 14px || (min-width: 768px) 16px; font-weight: 800
  'small-black': `${PRIMITIVES.variable.small} ${MODIFIERS.weight.black}`,             // font-size: 14px || (min-width: 768px) 16px; font-weight: 900

  medium: `${PRIMITIVES.variable.medium} ${MODIFIERS.weight.medium}`,                  // font-size: 16px || (min-width: 768px) 18px; font-weight: 500
  'medium-thin': `${PRIMITIVES.variable.medium} ${MODIFIERS.weight.thin}`,             // font-size: 16px || (min-width: 768px) 18px; font-weight: 100
  'medium-extralight': `${PRIMITIVES.variable.medium} ${MODIFIERS.weight.extralight}`, // font-size: 16px || (min-width: 768px) 18px; font-weight: 200
  'medium-light': `${PRIMITIVES.variable.medium} ${MODIFIERS.weight.light}`,           // font-size: 16px || (min-width: 768px) 18px; font-weight: 300
  'medium-normal': `${PRIMITIVES.variable.medium} ${MODIFIERS.weight.normal}`,         // font-size: 16px || (min-width: 768px) 18px; font-weight: 400
  'medium-semibold': `${PRIMITIVES.variable.medium} ${MODIFIERS.weight.semibold}`,     // font-size: 16px || (min-width: 768px) 18px; font-weight: 600
  'medium-bold': `${PRIMITIVES.variable.medium} ${MODIFIERS.weight.bold}`,             // font-size: 16px || (min-width: 768px) 18px; font-weight: 700
  'medium-extrabold': `${PRIMITIVES.variable.medium} ${MODIFIERS.weight.extrabold}`,   // font-size: 16px || (min-width: 768px) 18px; font-weight: 800
  'medium-black': `${PRIMITIVES.variable.medium} ${MODIFIERS.weight.black}`,           // font-size: 16px || (min-width: 768px) 18px; font-weight: 900

  large: `${PRIMITIVES.variable.large} ${MODIFIERS.weight.medium}`,                    // font-size: 18px || (min-width: 768px) 20px; font-weight: 500
  'large-thin': `${PRIMITIVES.variable.large} ${MODIFIERS.weight.thin}`,               // font-size: 18px || (min-width: 768px) 20px; font-weight: 100
  'large-extralight': `${PRIMITIVES.variable.large} ${MODIFIERS.weight.extralight}`,   // font-size: 18px || (min-width: 768px) 20px; font-weight: 200
  'large-light': `${PRIMITIVES.variable.large} ${MODIFIERS.weight.light}`,             // font-size: 18px || (min-width: 768px) 20px; font-weight: 300
  'large-normal': `${PRIMITIVES.variable.large} ${MODIFIERS.weight.normal}`,           // font-size: 18px || (min-width: 768px) 20px; font-weight: 400
  'large-semibold': `${PRIMITIVES.variable.large} ${MODIFIERS.weight.semibold}`,       // font-size: 18px || (min-width: 768px) 20px; font-weight: 600
  'large-bold': `${PRIMITIVES.variable.large} ${MODIFIERS.weight.bold}`,               // font-size: 18px || (min-width: 768px) 20px; font-weight: 700
  'large-extrabold': `${PRIMITIVES.variable.large} ${MODIFIERS.weight.extrabold}`,     // font-size: 18px || (min-width: 768px) 20px; font-weight: 800
  'large-black': `${PRIMITIVES.variable.large} ${MODIFIERS.weight.black}`,             // font-size: 18px || (min-width: 768px) 20px; font-weight: 900

  // Special combination for the Hero section
  'hero': `text-base md:text-xl text-slate-600 dark:text-gray-400 color-transition ${MODIFIERS.weight.medium}`,
}

export default PARAGRAPH_VARIANTS
