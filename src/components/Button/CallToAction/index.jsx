/* CallToAction/index.jsx */

function CallToAction(props) {
  // Call to Action button

  const {
    children,
    className = '', // any other class needed goes here
    onClick,
    tabIndex = '0',
    textColor = 'text-white dark:text-black',
    textSize = 'text-sm 2xl:text-base',
    type = 'button',
  } = props

  return (
    <button
      className={`${className} relative px-[1.5em] py-[0.75em] rounded-[0.5em]
      flex items-center justify-center gap-[0.5em] bg-accent  focus-visible:bg-blue-500
      focus-visible:dark:bg-orange-400 font-semibold ${textSize} ${textColor} group/button
      call-to-action-hover tracking-wider whitespace-nowrap shadow-md color-transition`}
      onClick={onClick}
      tabIndex={tabIndex}
      type={type}
    >
      {children}
    </button>
  )
}

export default CallToAction
