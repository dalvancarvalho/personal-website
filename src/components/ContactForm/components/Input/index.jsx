/* Input/index.jsx */

import { useInputStyle } from '../../hooks/useInputStyle'

export function Input({ inputName, inputs, label, setInputs, type }) {
  // Form input (text or email)

  const { checkInput, ...refs } = useInputStyle(inputName, inputs)

  return (
    <div className="input-container group/input" ref={refs.container}>
      <label
        className={`absolute top-1.5 left-0 text-base md:text-lg text-slate-500 dark:text-gray-400 font-medium origin-left duration-300 ease-out
        group-hover/input:text-slate-800
        group-hover/input:dark:text-gray-200 ${
          inputs[inputName].length !== 0
            ? '-translate-y-full scale-[0.85] text-blue-600 dark:text-orange-500'
            : null
        }`}
        htmlFor={inputName}
      >
        {label}
      </label>
      <input
        autoComplete="on"
        className="w-full border-b-2 border-slate-300 dark:border-dark-3 ring-none px-[0.5em] text-base md:text-lg pt-[0.5em] pb-[0.25em] block bg-transparent transition-[border-color] duration-300
        invalid:text-rose-600
        invalid:dark:text-rose-400 
        group-hover/input:border-slate-350
        group-hover/input:dark:border-dark-1"
        id={inputName}
        onBlur={checkInput}
        onChange={() => setInputs({ ...inputs, [inputName]: refs.input.current.value })}
        onFocus={() => refs.container.current.classList.add('highlighted')}
        ref={refs.input}
        type={type}
        value={inputs[inputName]}
      />
    </div>
  )
}
