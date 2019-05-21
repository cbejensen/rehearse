import React from 'react'

export default function CheckBox({ children, onChange, ...other }) {
  return (
    <label>
      {children}
      <input type="checkbox" onChange={onChange} {...other} />
    </label>
  )
}