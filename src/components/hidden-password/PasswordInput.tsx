import { FaEye } from 'react-icons/fa'
import { useState } from 'react'

export default function PasswordInput() {
    const [inputType, setInputType] = useState('password')
    const [toolTip, setTooltip] = useState('none')

    const toggleVisibility = () => {
        setInputType(inputType === 'password' ? 'text' : 'password')
    }

    const toggleTooltip = () => {
        setTooltip(display => display === 'none' ? 'block' : 'none');
    }

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      
      <input type={inputType} /> 
      <div style={{width: 90, display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
        <FaEye style={{width: 40, height: 40}} onMouseDown={toggleVisibility} onMouseUp={toggleVisibility} onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}/>
        <p style={{display:toolTip, padding:0, margin:0}}>Show</p>
      </div>
    </div>
    </>
  )
}
