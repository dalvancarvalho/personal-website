/* Button/index.jsx */

function Button({
  ariaLabel,
  children,
  className = '', // any other class needed goes here
  onClick,
  textColor = 'text-slate-500 dark:text-gray-400',
  type = 'button',
}) {
  // Regular button

  return (
    <button
      aria-label={ariaLabel ?? 'button'}
      className={`${textColor} ${className} hover:text-slate-900 hover:dark:text-gray-200
      focus-visible:text-slate-900 focus-visible:dark:text-gray-200 cursor-pointer
      color-transition group`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
