import React from 'react'
import Calculator from './Calculator'
const KeyPad = ({keyButton: {label, id, clasname, action}, renderNumber}) => {
  return (
      <button className={clasname} onClick={(e)=>renderNumber(id, label, action)}>{label}</button>  
  )
}

export default KeyPad
