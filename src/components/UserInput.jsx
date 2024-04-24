import React from "react"

export default function UserInput({inputs, handleChange}) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment
                        <input type="number" name="initialInvestment" onChange={(e) => handleChange(e)} required></input>
                    </label>
                </p>
                <p>
                    <label>Annual Investment
                        <input type="number" name="annualInvestment" onChange={(e) => handleChange(e)} required></input>
                    </label>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return
                        <input type="number" name="expectedReturn" onChange={(e) => handleChange(e)} required></input>
                    </label>
                </p>
                <p>
                    <label>Duration
                        <input type="number" name="duration" onChange={(e) => handleChange(e)} required></input>
                    </label>
                </p>
            </div>
        </section>
    )
}