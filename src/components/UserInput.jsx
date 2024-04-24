import React from "react"

export default function UserInput({title, value, handleChange}) {

    return (
        <div>
            <label>{title}
                <input type="number" onChange={handleChange}>{value}</input>
            </label>
        </div>
    )
}