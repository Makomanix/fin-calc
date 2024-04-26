import React from "react"

export default function UserInput({inputs, handleChange}) {

    const { initialInvestment, annualInvestment, expectedReturn, duration } = inputs;

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial" id="initial">Initial Investment</label>
                    <input id="initial" type="number" name="initialInvestment" onChange={(e) => handleChange(e)} value={initialInvestment} required></input>
                </p>
                <p>
                    <label htmlFor="annual" >Annual Investment</label>
                    <input id="annual" type="number" name="annualInvestment" onChange={(e) => handleChange(e)} value={annualInvestment} required></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected">Expected Return</label>
                    <input id="expected" type="number" name="expectedReturn" onChange={(e) => handleChange(e)} value={expectedReturn} required></input>
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input id="duration"  type="number" name="duration" onChange={(e) => handleChange(e)} value={duration} required></input>
                </p>
            </div>
        </section>
    )
}