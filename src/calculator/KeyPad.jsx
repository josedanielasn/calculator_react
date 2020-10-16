import React from 'react'
const KeyPad = ({renderNumber}) => {
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
  return (
      keyButtons.map(({clasname, id, label, action}) => {
          return <button className={clasname} key={id} onClick={(e)=>renderNumber(id, label, action)}>{label}</button>  
        })
  )
}

export default KeyPad
