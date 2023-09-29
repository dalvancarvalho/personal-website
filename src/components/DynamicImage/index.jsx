/* DynamicImage/index.jsx */

function DynamicImage({ alt, className, darkVersion, lazy, lightVersion }) {
  // Smoothly switches two images between their light and dark versions

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
