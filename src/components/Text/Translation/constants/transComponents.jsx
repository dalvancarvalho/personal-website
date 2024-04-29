/* transComponents.jsx */

const transComponents = {
  // Set of components used throughout the project in combination with the i18next 'Trans' component

  /* Utils */
  highlight: (
    // Highlights a word/sentence inside the paragraph
    <span className="font-bold text-slate-800 dark:text-gray-200 color-transition" />
  ),

  /* Home page > Hero section */
  small: (
    // Smaller portion of the hero section H1
    <span className="block mb-3 md:mb-4 2xl:mb-5 font-medium text-lg md:text-2xl 2xl:text-3xl tracking-tighter" />
  ),

  thin: (
    // Light-weighted portion of the hero section H1
    <span className="font-normal" />
  ),

  /* Home page > Projects section */
  iss: (
    // Link to ISS Tracker
    <a
      className="font-bold text-slate-800 dark:text-gray-200 color-transition hover:underline underline-offset-2"
      href="https://iss.dalvanc.com"
      rel="noopener noreferrer"
      target="_blank"
    />
  ),
}

export default transComponents
