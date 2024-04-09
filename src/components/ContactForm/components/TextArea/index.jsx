/* TextArea/index.jsx */

import useInputStyle from '../../hooks/useInputStyle'

function TextArea(props) {
  // Form input (text area)

  const { inputName, inputs, label, setInputs } = props

  const { checkInput, ...refs } = useInputStyle(inputName, inputs)

  return (
    <div className="input-container group" ref={refs.container}>
      <label
        className={`absolute top-[10%] left-0 text-base md:text-lg text-slate-500 dark:text-gray-400 font-medium origin-left ease-out duration-300 label-hover ${
          inputs[inputName].length === 0
            ? '-translate-y-1/2 scale-100'
            : '-translate-y-[155%] scale-[0.85]'
        }`}
        htmlFor={inputName}
      >
        {label}
      </label>
      <textarea
        className="w-full h-40 border-b-2 border-slate-300 dark:border-dark-3 ring-none px-[0.5em] text-base md:text-lg pt-[0.25em] pb-[0.5em] block bg-transparent resize-none transition-[border-color] duration-300 border-hover"
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

export default TextArea
