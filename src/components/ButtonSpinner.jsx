/* Spinner.jsx */

function Spinner() {
  // Loading spinner

  return (
    <span
      className="absolute right-[1em] w-[1.5em] h-[1.5em] border-t-white
      rounded-full border-t-[0.15em]  border-r-[0.15em] border-r-transparent
      select-none animate-spin color-transition"
    ></span>
  )
}

export default Spinner
