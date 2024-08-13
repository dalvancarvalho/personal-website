/* ActiveToggle/index.jsx */

export function ActiveToggle({ handleActive }) {
  //

  return (
    <form className="mt-12">
      <fieldset>
        <legend className="mb-4">Try it!</legend>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            id="activeChoice1"
            name="active"
            value={true}
            onClick={(event) => handleActive(event)}
          />
          <label className="mr-2.5" for="activeChoice1">
            Show component
          </label>

          <input
            type="radio"
            id="activeChoice2"
            name="active"
            value={false}
            onClick={(event) => handleActive(event)}
          />
          <label className="mr-2.5" for="activeChoice2">
            Hide component
          </label>
        </div>
      </fieldset>
    </form>
  )
}
