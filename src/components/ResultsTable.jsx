export default function ResultsTable({data}) {

//will need some way to loop over data to create table data maybe map maybe for loop
    const tableResults = data.map(item => {
        <tr key={item.year}>
            <td>item[year]</td>
            <td>item[initialInvestment]</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    })

    return (
        <table>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </table>
    )
}