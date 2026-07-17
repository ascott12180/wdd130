
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

let savingsGoal =
    Number(localStorage.getItem("savingsGoal")) || 0;

const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expensesEl = document.getElementById("expenses");

const transactionList = document.getElementById("transactionList");
const categoryTotals = document.getElementById("categoryTotals");

const goalText = document.getElementById("goalText");
const progressFill = document.getElementById("progressFill");
const progressPercent = document.getElementById("progressPercent");

const form = document.getElementById("transactionForm");

const goalInput = document.getElementById("goalInput");
const saveGoal = document.getElementById("saveGoal");


function saveTransactions() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}


function updateDashboard() {

    let income = 0;
    let expenses = 0;

    transactionList.innerHTML = "";
    categoryTotals.innerHTML = "";

    const categoryTotalsObject = {};

    transactions.forEach((transaction) => {

        if (transaction.type === "income") {
            income += transaction.amount;
        } else {
            expenses += transaction.amount;

            if (!categoryTotalsObject[transaction.category]) {
                categoryTotalsObject[transaction.category] = 0;
            }

            categoryTotalsObject[transaction.category] += transaction.amount;
        }

        transactionList.innerHTML += `
        <tr>
            <td>${transaction.name}</td>
            <td>${transaction.category}</td>
            <td>${transaction.type}</td>
            <td>$${transaction.amount.toFixed(2)}</td>
        </tr>
        `;
    });

    const balance = income - expenses;

    balanceEl.textContent = "$" + balance.toFixed(2);
    incomeEl.textContent = "$" + income.toFixed(2);
    expensesEl.textContent = "$" + expenses.toFixed(2);

    for (const category in categoryTotalsObject) {

        categoryTotals.innerHTML += `
        <li>
            ${category}: $${categoryTotalsObject[category].toFixed(2)}
        </li>
        `;

    }

    goalText.textContent = "$" + balance.toFixed(2) + " / $" + savingsGoal;

    let percent = (balance / savingsGoal) * 100;

    if (percent > 100) {
        percent = 100;
    }

    if (percent < 0) {
        percent = 0;
    }

    progressFill.style.width = percent + "%";
    progressPercent.textContent = percent.toFixed(0) + "%";

    saveTransactions();
}



form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;

    const amount = Number(document.getElementById("amount").value);

    const type = document.getElementById("type").value;

    const category = document.getElementById("category").value;

    transactions.push({
        name,
        amount,
        type,
        category
    });

    form.reset();

    updateDashboard();

});


updateDashboard();

saveGoal.addEventListener("click", () => {

    const newGoal = Number(goalInput.value);

    if(newGoal <= 0){

        alert("Please enter a valid goal.");

        return;
    }

    savingsGoal = newGoal;

    localStorage.setItem("savingsGoal", savingsGoal);

    goalInput.value = "";

    updateDashboard();

});