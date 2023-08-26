/* Input.jsx */

import { useEffect, useRef } from 'react'

function Input({ inputs, label, inputName, setInputs, type }) {
  // Input field

  const containerRef = useRef(null)
  const fieldRef = useRef(null)

  useEffect(() => {
    // Removes the 'highlighted' class from the field after data submission

    checkField()
  }, [inputs[inputName]])

  function checkField() {
    // Removes the 'highlighted' class if the field is empty and not focused

    if (
      fieldRef.current.value.length === 0 &&
      fieldRef.current !== document.activeElement
    )
      containerRef.current.classList.remove('highlighted')
  }

  return (
    <div className="form-element form-field" ref={containerRef}>
      <label
        className={`${
          inputs[inputName].length === 0
            ? '-translate-y-[55%] scale-100'
            : '-translate-y-[155%] scale-[0.85]'
        }
        absolute top-1/2 left-0 text-base md:text-lg 2xl:text-xl text-slate-500
        dark:text-gray-400 font-medium origin-left duration-300`}
        htmlFor={inputName}
      >
        {label}
      </label>
      <input
        className="w-full border-b-2 border-slate-300 dark:border-dark-4 outline-none
        dark:outline-none text-base md:text-lg 2xl:text-xl pt-[0.5em] pb-[0.25em] block
        bg-transparent invalid:text-rose-600 dark:invalid:text-rose-400
        transition-[border-color] px-[0.5em] duration-300"
        id={inputName}
        inputs={inputs}
        onBlur={checkField}
        onChange={() => setInputs({ ...inputs, [inputName]: fieldRef.current.value })}
        onFocus={() => containerRef.current.classList.add('highlighted')}
        ref={fieldRef}
        type={type}
        value={inputs[inputName]}
      />
    </div>
  )
}

export default Input
