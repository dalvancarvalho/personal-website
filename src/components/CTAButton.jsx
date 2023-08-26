/* CTAButton.jsx */

function CTAButton({
  children,
  className = '', // any other class needed goes here
  onClick,
  tabIndex = '0',
  textSize = 'text-sm 2xl:text-base',
  type = 'button',
}) {
  // Call to Action button

  return (
    <button
      className={`${className} relative px-[1.5em] py-[0.75em] rounded-[0.5em]
      bg-accent hover:bg-blue-500 dark:hover:bg-orange-400 focus-visible:bg-blue-500
      focus-visible:dark:bg-orange-400 active:bg-blue-700 active:dark:bg-orange-600
      flex items-center justify-center gap-[0.5em] font-semibold ${textSize}
      tracking-wider whitespace-nowrap text-white dark:text-black shadow-md
      color-transition group`}
      onClick={onClick}
      tabIndex={tabIndex}
      type={type}
    >
      {children}
    </button>
  )
}

export default CTAButton
