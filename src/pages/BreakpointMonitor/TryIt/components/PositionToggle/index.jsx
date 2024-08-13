/* PositionToggle/index.jsx */

export function PositionToggle({ handlePosition }) {
  //

  return (
    <form className="mt-12">
      <fieldset>
        <legend className="mb-4">
          Please select the position where the component will be rendered:
        </legend>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            id="positionChoice1"
            name="position"
            value="bottom-left"
            onClick={(event) => handlePosition(event)}
          />
          <label className="mr-2.5" for="positionChoice1">
            bottom-left
          </label>

          <input
            type="radio"
            id="positionChoice2"
            name="position"
            value="bottom-center"
            onClick={(event) => handlePosition(event)}
          />
          <label className="mr-2.5" for="positionChoice2">
            bottom-center
          </label>

          <input
            type="radio"
            id="positionChoice3"
            name="position"
            value="bottom-right"
            checked={undefined}
            onClick={(event) => handlePosition(event)}
          />
          <label className="mr-2.5" for="positionChoice3">
            bottom-right
          </label>

          <input
            type="radio"
            id="positionChoice4"
            name="position"
            value="top-left"
            onClick={(event) => handlePosition(event)}
          />
          <label className="mr-2.5" for="positionChoice4">
            top-left
          </label>

          <input
            type="radio"
            id="positionChoice5"
            name="position"
            value="top-center"
            onClick={(event) => handlePosition(event)}
          />
          <label className="mr-2.5" for="positionChoice5">
            top-center
          </label>

          <input
            type="radio"
            id="positionChoice6"
            name="position"
            value="top-right"
            onClick={(event) => handlePosition(event)}
          />
          <label className="mr-2.5" for="positionChoice6">
            top-right
          </label>
        </div>
      </fieldset>
    </form>
  )
}
