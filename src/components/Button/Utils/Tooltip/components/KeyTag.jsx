/* KeyTag.jsx */

function KeyTag(props) {
  // Indicates a key that is part of a keyboard shortcut

  return (
    <kbd className="px-1.5 py-[0.2rem] rounded-sm bg-slate-150 dark:bg-dark-1 font-urbanist transition-[background-color] duration-300">
      {props.children}
    </kbd>
  )
}

export default KeyTag
