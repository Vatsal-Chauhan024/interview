import React from 'react'

const InputField = ({value, name, placeholder, className, onChange, type, maxLength}) => {
  return (
    <div>
      {type === "text" || type === "number"? <input value={value} required name={name} placeholder={placeholder} className={`w-full h-10 rounded-md flex-1 bg-gray-50 border border-gray-200 text-black px-3 font-medium ${className}`} onChange={onChange} maxLength={maxLength}/> : <input  type= "file" required/>}
    </div>
  )
}

export default InputField
