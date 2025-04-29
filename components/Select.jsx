import React from 'react'

export default function Select({lable,id,name,value,onChange,options,defaultoption, error}) {
  return (
    <div className="input-container">
    <label htmlFor="category">{lable}</label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    >
      {
        defaultoption&&<option hidden value="">
        {defaultoption}
      </option>
      }
     {
        options.map((option,i)=> <option key={i} value={option}>{option}</option>)
     }
    </select>
    <p className="error">{error}</p>
  </div>
  
  )
}
