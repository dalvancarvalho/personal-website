/* DynamicImage/index.jsx */

function DynamicImage(props) {
  // Smoothly switches two images between their light and dark versions
  // when the theme is toggled

  const { alt, className, darkVersion, lazy, lightVersion } = props

  return (
    <>
      <img
        alt={alt}
        className={`${className} opacity-100 dark:opacity-0
        transition-opacity duration-300 select-none`}
        loading={lazy ? 'lazy' : 'eager'}
        src={lightVersion}
      />
      <img
        alt={alt}
        className={`${className} opacity-0 dark:opacity-100
        transition-opacity duration-300 select-none`}
        loading={lazy ? 'lazy' : 'eager'}
        src={darkVersion}
      />
    </>
  )
}

export default DynamicImage
