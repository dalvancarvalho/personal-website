/* MenuList/index.jsx */

export function MenuList({ children, title }) {
  // Unordered list with title

  return (
    <>
      <p className="pl-6 sm:pl-5 py-4 font-bold text-2xl text-slate-800 dark:text-gray-200 color-transition">
        {title}
      </p>
      <ul className="relative flex flex-col items-start text-xl" role="listbox">
        {children}
      </ul>
    </>
  )
}
