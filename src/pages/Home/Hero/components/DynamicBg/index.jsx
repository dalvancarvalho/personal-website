/* DynamicBg/index.jsx */

export default function DynamicBg({ className, darkVersion, lightVersion, ...props }) {
  // Smoothly switches the background image between its
  // light and dark versions when the theme is toggled

  return (
    <>
      <img
        className={`${className} opacity-100 dark:opacity-0 transition-opacity duration-300 select-none`}
        src={lightVersion}
        {...props}
      />
      <img
        className={`${className} opacity-0 dark:opacity-100 transition-opacity duration-300 select-none`}
        src={darkVersion}
        {...props}
      />
    </>
  )
}
