import React, { useState } from 'react'
import KeyPad from './KeyPad'
import Display from './Display'
import UpperDisplay from './UpperDisplay'
const Calculator = () => {

  const[display, setDisplay] = useState('0')
  const[lastButton, setLastButton] = useState('number')
  const[firstValue, setFirstValue] = useState(0)
  const[operator, setOperator] = useState(null)
  
  const actionForButtons = (id,label,action) => {
    if(action === 'number' && display.length < 14){
      if (display === '0' || lastButton === 'calculate'){
        setDisplay(label)
      }
      else {
        console.log('j')
        setDisplay(display + label)
      }
      setLastButton(action)
    }

    if(id === 'decimal' && display.length !== 14){
      if(!display.includes('.')){
        setDisplay(display + '.')
      } else if(display === '0'|| lastButton === 'operator' ){
        setDisplay('0.')
      }
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ){
      setLastButton('operator')
      setOperator(action)
      setFirstValue(display)
      setDisplay('0')
    }

    if(action === 'calculate'){
      setOperator(action)
      let calcValue = calculate(firstValue, display, operator)
      setDisplay(`${calcValue}`)
    }
    
    if(action === 'clear'){
        setDisplay('0')
    }

  }

  const calculate = (n1,n2 = 0) =>{
    let result
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2) 
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2)
    } else{
      result = 0
    }
    return result
  }


  return (
    <div className ='calculator-box'>
      <UpperDisplay/>
      <Display displayNum={display}/>
     <div className ='calculator -keys'>
      <KeyPad renderNumber={actionForButtons}/>
    </div> 
    </div>

    
  )
}

export default Calculator
