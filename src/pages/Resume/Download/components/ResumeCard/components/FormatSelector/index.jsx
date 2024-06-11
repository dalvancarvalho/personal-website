/* FormatSelector/index.jsx */

export default function FormatSelector({ format, setFormat }) {
  // Sets the format in which the resume will be downloaded (.pdf or .png)

  return (
    <div className="flex gap-1.5 md:-translate-y-1/2 group-hover/card:translate-y-0 md:opacity-0 group-hover/card:opacity-100 transition-[transform,opacity] duration-300">
      <button
        className="relative w-10 h-6 rounded data-[active=false]:border-2 border-slate-300 dark:border-gray-500 text-xs overflow-hidden color-transition group"
        data-active={format === 'pdf' ? true : false}
        onClick={() => setFormat('pdf')}
        tabIndex="-1"
      >
        <div className="absolute top-0 group-data-[active=true]:right-0 group-data-[active=false]:-right-[128%] size-full rounded bg-red-500 dark:bg-red-600 transition-all ease-out duration-150"></div>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-data-[active=true]:text-white group-data-[active=false]:text-slate-500 group-data-[active=false]:dark:text-gray-400 color-transition select-none">
          PDF
        </span>
      </button>
      <button
        className="relative w-10 h-6 rounded data-[active=false]:border-2 border-slate-300 dark:border-gray-500 text-xs overflow-hidden color-transition group"
        data-active={format === 'png' ? true : false}
        onClick={() => setFormat('png')}
        tabIndex="-1"
      >
        <div className="absolute top-0 group-data-[active=true]:left-0 group-data-[active=false]:-left-[128%] size-full rounded bg-blue-500 dark:bg-blue-600 transition-all ease-out duration-150"></div>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-data-[active=true]:text-white group-data-[active=false]:text-slate-500 group-data-[active=false]:dark:text-gray-400 color-transition select-none">
          PNG
        </span>
      </button>
    </div>
  )
}
