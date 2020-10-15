import React, { useState } from 'react'
import KeyPad from './KeyPad'
import Display from './Display'
import UpperDisplay from './UpperDisplay'
import userEvent from '@testing-library/user-event'
const Calculator = () => {
  const keyButtons = [
    {clasname:'keys' ,id: 'AC', label: 'AC', action:'clear'},
    {clasname:'keys' ,id: 'double', label: '+/-',action:'none'},
    {clasname:'keys' ,id: 'modulo', label: '%',action:'module'},
    {clasname:'keys -orange' ,id: 'divide', label: '÷',action:'divide'},
    {clasname:'keys' ,id: 7, label: '7',action:'number'},
    {clasname:'keys' ,id: 8, label: '8',action:'number'},
    {clasname:'keys' ,id: 9, label: '9',action:'number'},
    {clasname:'keys -orange' ,id: 'multiply', label: '×',action:'multiply'},
    {clasname:'keys' ,id: 4, label: '4',action:'number'},
    {clasname:'keys' ,id: 5, label: '5',action:'number'}, 
    {clasname:'keys' ,id: 6, label: '6',action:'number'},
    {clasname:'keys -orange' ,id: 'subtract', label: '-',action:'subtract'},
    {clasname:'keys' ,id: 1, label: '1',action:'number'},
    {clasname:'keys' ,id: 2, label: '2',action:'number'},
    {clasname:'keys' ,id: 3, label: '3', action:'number'},
    {clasname:'keys -orange' ,id: 'add', label: '+',action:'add'},
    {clasname:'keys -zero' ,id: 0, label: '0',action:'number'},
    {clasname:'keys' ,id: 'decimal', label: '.',action:'decimal'},
    {clasname:'keys -orange -equal' ,id: 'equal', label: '=', action:'calculate'},

  ]

  const[display, setDisplay] = useState('0')
  const[lastButton, setLastButton] = useState('number')
  const[firstValue, setFirstValue] = useState(null)
  const[secondValue, setSecondValue] = useState(null)
  const[operator, setOperator] = useState(null)

  const actionForButtons = (id,label,action) => {
    if(action === 'number'){
      if (display === '0' || lastButton === 'operator'){
        setDisplay(label)
      }
      else {
        setDisplay(display + label)
      }
    }

    if(id === 'decimal'){
      if(!display.includes('.')){
        setDisplay(display + '.')
      } else if(display === '0'){
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
    

    }

    if(action === 'calculate'){
      setSecondValue(display)
      console.log(secondValue)
      const calcValue = calculate(firstValue, secondValue, operator)
      setDisplay(calcValue)
    }
    

  }

  const calculate = (n1,n2) =>{
    let result = '';
    console.log(n1)
    console.log(n2)
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2); 
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2);
    }
  
    return result;
  }


  return (
    <div className ='calculator-box'>
      <UpperDisplay/>
      <Display displayNum={display}/>
     <div className ='calculator -keys'>
      {keyButtons.map((keyButton) => {
        // console.log(keyButton)
        return <KeyPad renderNumber={actionForButtons} key={keyButton.id} keyButton={keyButton}/>
      })}
    </div> 
    </div>

    
  )
}

export default Calculator
