/* TransparencyToggle/index.jsx */

export function TransparencyToggle({ handleTransparency }) {
  //

  return (
    <form className="mt-12">
      <fieldset>
        <legend className="mb-4">
          Please select whether the component is transparent or not:
        </legend>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            id="transparencyChoice1"
            name="transparency"
            value={true}
            onClick={(event) => handleTransparency(event)}
          />
          <label className="mr-2.5" for="transparencyChoice1">
            Enabled
          </label>

          <input
            type="radio"
            id="transparencyChoice2"
            name="transparency"
            value={false}
            onClick={(event) => handleTransparency(event)}
          />
          <label className="mr-2.5" for="transparencyChoice2">
            Disabled
          </label>
        </div>
      </fieldset>
    </form>
  )
}
