import React, { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput';
import ResultsTable from './components/ResultsTable';
import { calculateInvestmentResults } from './util/investment'

const INITIAL_VALUES = {
  initialInvestment: '',
  annualInvestment: '',
  expectedReturn: '',
  duration: ''
}



function App() {

  const [ inputs, setInputs ] = useState(INITIAL_VALUES);

console.log(calculateInvestmentResults(inputs))
  
  function handleInputChange(e) {
    const { value, name } = e.target;
    setInputs(prevInputs => {
      return {
        ...prevInputs,
        [name]: value
      }
    })
  }

  console.log();

  return (
    <div>
      <Header />
      <UserInput inputs={inputs} handleChange={handleInputChange}/>
      <ResultsTable />
    </div>
  )
}

export default App
