/* SecondaryButton/index.jsx */

function SecondaryButton(props) {
  // Secondary button

  const {
    children,
    className = '', // any other class needed goes here
    onClick,
    tabIndex = '0',
    textSize = 'text-sm 2xl:text-base',
    type = 'button',
  } = props

  return (
    <button
      className={`${className} ${textSize} relative py-[0.75em] rounded-[0.5em] flex gap-2 items-center justify-center text-accent font-semibold decoration-2 focus-visible:underline outline-none dark:outline-none tracking-wider whitespace-nowrap color-transition group secondary-button-hover`}
      onClick={onClick}
      tabIndex={tabIndex}
      type={type}
    >
      {children}
    </button>
  )
}

export default SecondaryButton
