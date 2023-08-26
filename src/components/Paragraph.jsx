/* Paragraph.jsx */

function Paragraph({
  children,
  className = '', // any other class needed goes here
  textColor = 'text-slate-600 dark:text-gray-400',
  textSize = 'text-base md:text-lg 2xl:text-xl 2xl:leading-[1.85rem]',
  textWeight = 'font-medium',
}) {
  // Regular paragraph

  return (
    <p className={`${className} ${textSize} ${textColor} ${textWeight} color-transition`}>
      {children}
    </p>
  )
}

export default Paragraph
