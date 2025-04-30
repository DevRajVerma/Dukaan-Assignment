import React from 'react'

function TextBox({text}) {
  return (
    <div className="bg-slate-100 cursor-pointer p-2 m-4 h-10 w-full rounded-xl border-slate-200">
        {text}
      </div>
  )
}

export default TextBox
