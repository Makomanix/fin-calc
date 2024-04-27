import React, { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput';
import ResultsTable from './components/ResultsTable';

const INITIAL_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
}


function App() {

  const [ inputs, setInputs ] = useState(INITIAL_VALUES);

  const inputIsValid = inputs.duration >= 1;

  // console.log(inputs)
  
  function handleInputChange(e) {
    const { value, name } = e.target;
    // console.log(name, typeof(value));
    setInputs(prevInputs => {
      return {
        ...prevInputs,
        [name]: +value
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput inputs={inputs} handleChange={handleInputChange}/>
      {inputIsValid ? <ResultsTable inputs={inputs}/> : <p className='center'>Please enter a duration greater than zero.</p>} 
    </>
  )
}

export default App
