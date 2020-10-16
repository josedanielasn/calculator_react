import React from 'react'

const Display = ({displayNum}) => {

const parseDisplay = (result) => {
  result = parseFloat(parseFloat(result).toFixed(6))
  return (result.toString().length > 14 ? 'Number is too big': result)
}
  return (
    <div className='display'>{parseDisplay(displayNum)}</div>
    
  )
}

export default Display
