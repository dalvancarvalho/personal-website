/* SecondaryButton.jsx */

function SecondaryButton({
  children,
  className = '', // any other class needed goes here
  onClick,
  tabIndex = '0',
  textSize = 'text-sm 2xl:text-base',
  type = 'button',
}) {
  // Secondary button

  return (
    <button
      className={`${className} relative py-[0.75em] rounded-[0.5em] flex gap-2
      items-center justify-center text-accent font-semibold ${textSize}
      hover:text-blue-500 hover:dark:text-orange-400 focus-visible:text-blue-500
      focus-visible:dark:text-orange-400 underline-offset-2 decoration-2 hover:underline
      focus-visible:underline outline-none dark:outline-none tracking-wider
      whitespace-nowrap color-transition group`}
      onClick={onClick}
      tabIndex={tabIndex}
      type={type}
    >
      {children}
    </button>
  )
}

export default SecondaryButton
