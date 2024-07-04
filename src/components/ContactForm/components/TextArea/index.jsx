/* TextArea/index.jsx */

import { useInputStyle } from '../../hooks/useInputStyle'

export function TextArea({ inputName, inputs, label, setInputs }) {
  // Form input (text area)

  const { checkInput, ...refs } = useInputStyle(inputName, inputs)

  return (
    <div className="input-container group/input" ref={refs.container}>
      <label
        className="absolute top-0 left-0 text-base md:text-lg text-slate-500 dark:text-gray-400 font-medium origin-left duration-300 ease-out
        group-hover/input:text-slate-800
        group-hover/input:dark:text-gray-200"
        htmlFor={inputName}
      >
        {label}
      </label>
      <textarea
        className="w-full h-40 border-b-2 border-slate-300 dark:border-dark-3 ring-none px-[0.5em] text-base md:text-lg pt-[0.25em] pb-[0.5em] block bg-transparent resize-none md:resize-y transition-[border-color] duration-300
        group-hover/input:border-slate-350
        group-hover/input:dark:border-dark-1"
        id={inputName}
        onBlur={checkInput}
        onChange={() => setInputs({ ...inputs, [inputName]: refs.input.current.value })}
        onFocus={() => refs.container.current.classList.add('highlighted')}
        ref={refs.input}
        value={inputs[inputName]}
      ></textarea>
    </div>
  )
}
