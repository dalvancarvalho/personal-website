/* useLinkAttributes.js */

function useLinkAttributes(hrefProp) {
  // Returns the proper link based in the route that the footer is rendered

  const HOME_PAGE = 'http://dalvanc.com/'
  const currentUrl = window.location.href
  const isHomePage = currentUrl === HOME_PAGE ? true : false
  const isLocalLink = hrefProp.includes('#') ? true : false

  const href = isLocalLink ? (isHomePage ? hrefProp : HOME_PAGE) : hrefProp
  const target = isLocalLink ? (isHomePage ? '_self' : '_blank') : '_blank'

  return { href, target }
}

export default useLinkAttributes
