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

  const [ inputs, setInputs ] = useState({INITIAL_VALUES});

  const keys = Object.keys(inputs);
  console.log(inputs)

  // let userInputs = inputs.map((input, index) => <UserInput key={index} value={input[keys[index]]} title={keys[index]}/>);

  

  return (
    <div>
      <Header />
      {/* {userInputs} */}
    </div>
  )
}

export default App
