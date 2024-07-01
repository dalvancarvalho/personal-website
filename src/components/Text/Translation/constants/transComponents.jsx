/* transComponents.jsx */

const TRANS_COMPONENTS = {
  // Set of components used throughout the project in combination with the i18next 'Trans' component

  /* Utils */
  highlight: (
    // Highlights a word/sentence inside the paragraph
    <span className="font-bold text-slate-800 dark:text-gray-200 color-transition" />
  ),

  softHighlight: (
    // Highlights a word/sentence inside the paragraph (semibold variant)
    <span className="font-semibold text-slate-800 dark:text-gray-200 color-transition" />
  ),

  italic: (
    // Styles a word/sentence in italic
    <span className="italic" />
  ),

  /* Home page > Hero section */
  small: (
    // Smaller portion of the hero section H1
    <span className="block ml-0.5 mb-3 md:mb-5 font-medium text-base md:text-xl tracking-tighter" />
  ),

  thin: (
    // Light-weighted portion of the hero section H1
    <span className="font-normal" />
  ),

  /* Home page > Projects section */
  iss: (
    // Link to ISS Tracker
    <a
      className="font-bold text-slate-800 dark:text-gray-200 color-transition underline hover:decoration-2 underline-offset-2"
      href="https://iss.dalvanc.com"
      rel="noopener noreferrer"
      target="_blank"
    />
  ),

  /* Home page > Contacts section */
  deploy: (
    // Link to Vercel's website
    <a
      className="font-bold text-slate-600 dark:text-gray-400 hover:text-slate-900 hover:dark:text-gray-200 focus-visible:text-slate-900 focus-visible:dark:text-gray-200 color-transition"
      href="https://vercel.com"
      target="_blank"
      rel="noopener noreferrer"
    />
  ),

  developer: (
    // Link to Dalvan Carvalho's website
    <a
      className="font-bold text-slate-600 dark:text-gray-400 hover:text-slate-900 hover:dark:text-gray-200 focus-visible:text-slate-900 focus-visible:dark:text-gray-200 color-transition"
      href="https://dalvanc.com"
      target="_blank"
      rel="noopener noreferrer"
    />
  ),

  /* Resume page > Topics section */
  contact: (
    // Link to email
    <a
      className="font-bold text-slate-800 dark:text-gray-200 color-transition underline hover:decoration-2 underline-offset-2"
      href="mailto:contato@dalvanc.com?subject=Message from dalvanc.com!"
    />
  ),

  period: (
    // Role's period of activity
    <span className="text-sm md:text-base text-slate-600 dark:text-gray-400 color-transition" />
  ),

  pulse: (
    // Pulse animation
    <span className="text-sm md:text-base text-accent animate-pulse color-transition whitespace-nowrap" />
  ),
}

export default TRANS_COMPONENTS
