import React, { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput';

const INITIAL_VALUES = {
  initialInvestment: '',
  annualInvestment: '',
  expectedReturn: '',
  duration: ''
}



function App() {

  const [ inputs, setInputs ] = useState(INITIAL_VALUES);


  
  function handleInputChange(e) {
    const { value, name } = e.target;
    setInputs(prevInputs => {
      return {
        ...prevInputs,
        [name]: value
      }
    })
  }

  console.log(inputs);

  return (
    <div>
      <Header />
      <UserInput inputs={inputs} handleChange={handleInputChange}/>
    </div>
  )
}

export default App
