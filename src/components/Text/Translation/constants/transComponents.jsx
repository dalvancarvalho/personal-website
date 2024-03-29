/* transComponents.jsx */

const transComponents = {
  // Set of components used throughout the project in combination with the i18next 'Trans' component

  // Highlights a word/sentence inside the paragraph
  highlight: (
    <span className="font-bold text-slate-800 dark:text-gray-200 color-transition" />
  ),

  // Smaller portion of the hero section H1
  small: (
    <span className="block mb-3 md:mb-4 2xl:mb-5 font-medium text-lg md:text-2xl 2xl:text-3xl tracking-tighter" />
  ),

  // Light-weighted portion of the hero section H1
  thin: <span className="font-normal" />,
}

export default transComponents
