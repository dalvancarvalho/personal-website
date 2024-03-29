/* TextArea/index.jsx */

import useInputStyling from '../../hooks/useInputStyling'

function TextArea(props) {
  // Text area field

  const { inputName, inputs, label, setInputs } = props

  const { checkField, containerRef, inputRef } = useInputStyling(inputName, inputs)

  return (
    <div className="form-field group" ref={containerRef}>
      <label
        className={`absolute top-[10%] left-0 text-base md:text-lg 2xl:text-xl text-slate-500 dark:text-gray-400 font-medium origin-left ease-out duration-300 label-hover ${
          inputs[inputName].length === 0
            ? '-translate-y-1/2 scale-100'
            : '-translate-y-[155%] scale-[0.85]'
        }
        `}
        htmlFor={inputName}
      >
        {label}
      </label>
      <textarea
        className="w-full h-40 border-b-2 border-slate-300 dark:border-dark-3 ring-none text-base md:text-lg 2xl:text-xl pt-[0.25em] pb-[0.5em] block bg-transparent resize-none transition-[border-color] px-[0.5em] duration-300 border-hover"
        id={inputName}
        onBlur={checkField}
        onChange={() => setInputs({ ...inputs, [inputName]: inputRef.current.value })}
        onFocus={() => containerRef.current.classList.add('highlighted')}
        ref={inputRef}
        value={inputs[inputName]}
      ></textarea>
    </div>
  )
}

export default TextArea
