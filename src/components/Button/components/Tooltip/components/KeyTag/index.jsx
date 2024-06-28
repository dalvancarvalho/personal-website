/* KeyTag.jsx */

export default function KeyTag({ children }) {
  // Indicates a key that is part of a keyboard shortcut

  return (
    <kbd className="px-1.5 py-0.5 border border-neutral-600 rounded-sm bg-neutral-700 font-urbanist transition-[background-color] duration-300">
      {children}
    </kbd>
  )
}
