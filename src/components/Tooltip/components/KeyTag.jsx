/* KeyTag.jsx */

function KeyTag(props) {
  // Indicates a key that is part of a keyboard shortcut

  return (
    <kbd
      className="px-[0.5em] py-[0.25em] rounded-[0.25em] bg-slate-150
      dark:bg-dark-6 font-urbanist transition-[background-color] duration-300"
    >
      {props.children}
    </kbd>
  )
}

export default KeyTag
