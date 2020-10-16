import React, { useState } from 'react'
import KeyPad from './KeyPad'
import Display from './Display'
import UpperDisplay from './UpperDisplay'
const Calculator = () => {

  const[display, setDisplay] = useState('0')
  const[lastButton, setLastButton] = useState('number')
  const[firstValue, setFirstValue] = useState(0)
  const[operator, setOperator] = useState(null)
  const[upper, setUpper] = useState(0)
  
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
      setUpper(display + label)
      setDisplay('0')

    }

    if(action === 'calculate'){
      setUpper(upper + display)
      setOperator(action)
      let calcValue = calculate(firstValue, display, operator)
      setDisplay(`${calcValue}`)
    }
    
    if(action === 'clear'){
        setDisplay('0')
    }

  }

  const calculate = (n1,n2 = 0) =>{
    const x1 = parseFloat(n1)
    const x2 = parseFloat(n2)
    if (operator === 'add') {
      return x1 + x2
    } else if (operator === 'subtract') {
      return x1 - x2
    } else if (operator === 'multiply') {
      return x1 * x2
    } else if (operator === 'divide') {
      return x1 / x2
    } else{
      return 0
    }
  }


  return (
    <div className ='calculator-box'>
      <UpperDisplay upper={upper}/>
      <Display displayNum={display}/>
     <div className ='calculator -keys'>
      <KeyPad renderNumber={actionForButtons}/>
    </div> 
    </div>

    
  )
}

export default Calculator
