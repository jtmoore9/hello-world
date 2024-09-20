let results = []; 
const resultDiv = document.getElementById("ResultsG");
const summaryDiv = document.getElementById("SumG");
let ResultsG = document.createElement("table");
let headerRow = ResultsG.insertRow();
headerRow.innerHTML = "<th>Number X</th><th>Operator</th><th>Number Y</th><th>Result</th>";
resultDiv.appendChild(ResultsG);

while (true) {
    let x = prompt("Enter your first number:");
    if (x === null) break;
    let y = prompt("Enter your second number:");
    if (y === null) break;
    let operator = prompt("The choice of operations are: (+, -, *, /, %):");
    if (operator === null) break;

    //use to convert, Can it be moved? or make user values floats from inputs
    x = parseFloat(x);
    y = parseFloat(y);
    
    let result;
    if (isNaN(x) || isNaN(y)) {
        result = "Your input is invalid";
    } else {
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
                result = "Operation could not be performed";
        }
    }
    let row = ResultsG.insertRow();
    row.innerHTML = `<td>${x}</td><td>${operator}</td><td>${y}</td><td>${result}</td>`;
    if (typeof result === "number") {
        results.push(result);
    }
}
if (results.length > 0) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((acc, val) => acc + val, 0);
    let avg = total / results.length;
    let SumG = document.createElement("table");
    SumG.innerHTML = `
        <tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>
        <tr><td>${min}</td><td>${max}</td><td>${avg}</td><td>${total}</td></tr>
    `;
    summaryDiv.appendChild(SumG);
} else {
    summaryDiv.innerHTML = "<p>No valid results to display.</p>";
}
