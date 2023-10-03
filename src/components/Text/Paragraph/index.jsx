/* Paragraph/index.jsx */

function Paragraph(props) {
  // Regular paragraph

  const {
    children,
    className = '', // any other class needed goes here
    fontWeight = 'font-medium',
    textColor = 'text-slate-600 dark:text-gray-400',
    textSize = 'text-base md:text-lg 2xl:text-xl 2xl:leading-[1.85rem]',
  } = props

  return (
    <p className={`${className} ${textSize} ${textColor} ${fontWeight} color-transition`}>
      {children}
    </p>
  )
}

export default Paragraph
