/* Input.jsx */

import useInputStyling from '../hooks/useInputStyling'

function Input(props) {
  // Input field

  const { inputName, inputs, label, setInputs, type } = props
  const { checkField, containerRef, inputRef } = useInputStyling(inputName, inputs)

  return (
    <div className="form-field group" ref={containerRef}>
      <label
        className={`absolute top-1/2 left-0 text-base md:text-lg 2xl:text-xl text-slate-500 dark:text-gray-400 font-medium origin-left duration-300 ease-out label-hover ${
          inputs[inputName].length === 0
            ? '-translate-y-[55%] scale-100'
            : '-translate-y-[155%] scale-[0.85]'
        }`}
        htmlFor={inputName}
      >
        {label}
      </label>
      <input
        autoComplete="on"
        className="w-full border-b-2 border-slate-300 dark:border-dark-3 outline-none dark:outline-none text-base md:text-lg 2xl:text-xl pt-[0.5em] pb-[0.25em] block bg-transparent invalid:text-rose-600 dark:invalid:text-rose-400 transition-[border-color] px-[0.5em] duration-300 border-hover"
        id={inputName}
        onBlur={checkField}
        onChange={() => setInputs({ ...inputs, [inputName]: inputRef.current.value })}
        onFocus={() => containerRef.current.classList.add('highlighted')}
        ref={inputRef}
        type={type}
        value={inputs[inputName]}
      />
    </div>
  )
}

export default Input
