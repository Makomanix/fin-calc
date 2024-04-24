export default function ResultsTable({data}) {

//will need some way to loop over data to create table data maybe map maybe for loop
    // const tableResults = data.map(item => {
    //     <tr key={item.year}>
    //         <td>item[year]</td>
    //         <td>item[initialInvestment]</td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //     </tr>
    // })

    return (
        <table id="result">
            <tr>
                <thead>Year</thead>
                <thead>Investment Value</thead>
                <thead>Interest (Year)</thead>
                <thead>Total Interest</thead>
                <thead>Invested Capital</thead>
            </tr>
            <tbody>
                
            </tbody>
        </table>
    )
}