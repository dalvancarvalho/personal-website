/* MenuList.jsx */

function MenuList({ children, title }) {
  // Unordered list with title

  return (
    <>
      <h4
        className="pl-6 sm:pl-5 py-4 font-bold text-2xl text-slate-800
        dark:text-gray-200 color-transition"
      >
        {title}
      </h4>
      <ul className="flex flex-col items-start text-xl" role="listbox">
        {children}
      </ul>
    </>
  )
}

export default MenuList
