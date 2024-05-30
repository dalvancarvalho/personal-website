/* Input/index.jsx */

import useInputStyle from '../../hooks/useInputStyle'

function Input({ inputName, inputs, label, setInputs, type }) {
  // Form input (text or email)

  const { checkInput, ...refs } = useInputStyle(inputName, inputs)

  return (
    <div className="input-container group" ref={refs.container}>
      <label
        className={`absolute top-1/2 left-0 text-base md:text-lg text-slate-500 dark:text-gray-400 font-medium origin-left duration-300 ease-out label-hover ${
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
        className="w-full border-b-2 border-slate-300 dark:border-dark-3 ring-none px-[0.5em] text-base md:text-lg pt-[0.5em] pb-[0.25em] block bg-transparent invalid:text-rose-600 dark:invalid:text-rose-400 transition-[border-color] duration-300 border-hover"
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

export default Input
