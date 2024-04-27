import { calculateInvestmentResults, formatter } from '../util/investment'

export default function ResultsTable({ inputs }) {
    const { initialInvestment, duration } = inputs


    const results = calculateInvestmentResults(inputs)

    const tableResults = results.map(yearResults => {
        const totalInterest = yearResults.valueEndOfYear - yearResults.annualInvestment * yearResults.year - initialInvestment;
        const investedCapital = initialInvestment + yearResults.annualInvestment * yearResults.year;
        return (
        <tr key={yearResults.year}>
            <td>{yearResults.year}</td>
            <td>{formatter.format(yearResults.valueEndOfYear)}</td>
            <td>{formatter.format(yearResults.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(investedCapital)}</td>
        </tr>
        )
    })

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {tableResults}
            </tbody>
        </table>
    )
}