let results = []; // Store valid results for summary table

// Get references to the divs where we will insert tables
const resultDiv = document.getElementById("resultTable");
const summaryDiv = document.getElementById("summaryTable");

// Create the initial result table structure
let resultTable = document.createElement("table");
let headerRow = resultTable.insertRow();
headerRow.innerHTML = "<th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th>";
resultDiv.appendChild(resultTable); // Append the table to the webpage

while (true) {
    // Prompt user for inputs
    let x = prompt("Enter the first number (x):");
    if (x === null) break; // Exit loop if user cancels
    let y = prompt("Enter the second number (y):");
    if (y === null) break;
    let operator = prompt("Enter an operator (+, -, *, /, %):");
    if (operator === null) break;

    // Convert inputs to numbers
    x = parseFloat(x);
    y = parseFloat(y);

    let result;
    if (isNaN(x) || isNaN(y)) {
        result = "Error: Non-numeric input";
    } else {
        // Perform calculation based on the operator
        switch (operator) {
            case '+':
                result = x + y;
                break;
            case '-':
                result = x - y;
                break;
            case '*':
                result = x * y;
                break;
            case '/':
                result = y !== 0 ? x / y : "Error: Division by zero";
                break;
            case '%':
                result = x % y;
                break;
            default:
                result = "Error: Invalid operator";
        }
    }

    // Add a new row to the result table
    let row = resultTable.insertRow();
    row.innerHTML = `<td>${x}</td><td>${operator}</td><td>${y}</td><td>${result}</td>`;

    // Store valid results for summary table
    if (typeof result === "number") {
        results.push(result);
    }
}

// Summary Table Calculation
if (results.length > 0) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((acc, val) => acc + val, 0);
    let avg = total / results.length;

    // Create and append the summary table
    let summaryTable = document.createElement("table");
    summaryTable.innerHTML = `
        <tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>
        <tr><td>${min}</td><td>${max}</td><td>${avg}</td><td>${total}</td></tr>
    `;
    summaryDiv.appendChild(summaryTable); // Append summary table to the webpage
} else {
    summaryDiv.innerHTML = "<p>No valid results to display.</p>";
}
