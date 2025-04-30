import React from 'react'
import TextBox from './TextBox'
import Line from './Line'

function TextList() {
  return (
    <div className='w-fit'>
      <div className='flex items-center '>
      <h1 className='pr-4 text-xl'>We have generated 1,023 slogans for “cozy”</h1>
      <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
            Download all
          </button>

      </div>
      
      <TextBox text="halwa lele" />
      <TextBox text="bala lele" />
      <TextBox text="thela lele" />
      <TextBox text="halwa lele" />
      <TextBox text="bala lele" />
      <TextBox text="thela lele" />
      <TextBox text="halwa lele" />
      <TextBox text="bala lele" />
      <TextBox text="thela lele" />
      <TextBox text="halwa lele" />
      <TextBox text="bala lele" />
      <TextBox text="thela lele" />
      <TextBox text="halwa lele" />
      <TextBox text="bala lele" />
      <TextBox text="thela lele" />

      
    </div>
  )
}

export default TextList
