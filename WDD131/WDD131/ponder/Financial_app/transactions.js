

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const table = document.getElementById("transactionTable");
const search = document.getElementById("search");
const filter = document.getElementById("filterType");
const sort = document.getElementById("sortBy");

function saveTransactions() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}


function displayTransactions() {

    table.innerHTML = "";

    let filtered = [...transactions];

    
    if (filter.value !== "all") {
        filtered = filtered.filter(t => t.type === filter.value);
    }

    
    const searchText = search.value.toLowerCase();

    filtered = filtered.filter(t =>
        t.name.toLowerCase().includes(searchText)
    );

    
    switch (sort.value) {

        case "highest":
            filtered.sort((a, b) => b.amount - a.amount);
            break;

        case "lowest":
            filtered.sort((a, b) => a.amount - b.amount);
            break;

        case "oldest":
            filtered.reverse();
            break;

        case "newest":
          
            break;
    }

  
    filtered.forEach((transaction, index) => {

        table.innerHTML += `
            <tr>

                <td>${transaction.name}</td>

                <td>${transaction.category}</td>

                <td>${transaction.type}</td>

                <td>$${transaction.amount.toFixed(2)}</td>

                <td>

                    <button class="delete-btn"
                        onclick="deleteTransaction(${index})">
                        Delete
                    </button>

                </td>

            </tr>
        `;

    });

}

function deleteTransaction(index){

    if(confirm("Delete this transaction?")){

        transactions.splice(index,1);

        saveTransactions();

        displayTransactions();

    }

}


search.addEventListener("input", displayTransactions);

filter.addEventListener("change", displayTransactions);

sort.addEventListener("change", displayTransactions);


displayTransactions();