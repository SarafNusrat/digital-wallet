// Function to get values from input boxes
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // check for proper input
    if (amountValue >= 0) {
        return amountValue;
    }
    else {
        const negStringMessage = document.getElementById("notify-negString");
        negStringMessage.style.display = "block";
        return -1;
    }
}

// event handler for Calculate Button
function calculateButton(){
    const income = getInputValue("income");
    if (income == -1) {
        return;
    }
    const totalExpense = addAllExpense();
    console.log(totalExpense);
    if (totalExpense == 0) { 
        return;
    }
    const totalBalance = income - totalExpense;
    const expences = document.getElementById("total-expense");
    expences.innerText = totalExpense;
    if (totalBalance < 0) {
        const expensesMessage = document.getElementById("notify-expenses");
        expensesMessage.style.display = "block";
    }
    else {
        const balance = document.getElementById("balance");
        balance.innerText = totalBalance;  
    }
}

// Funtion to add all expenses
function addAllExpense() {
    const foodExp = getInputValue("food-exp");
    const rentExp = getInputValue("rent-exp");
    const clothesExp = getInputValue("clothes-exp");
    if (foodExp >= 0 && rentExp >= 0 && clothesExp >= 0) {
        const totalExpense = foodExp + rentExp + clothesExp;
        return totalExpense;
    }
    else return 0;
}

// event handler for Save Button
function saveButton(){
    // get income and save input value 
    const income = getInputValue("income");
    const savePercentage = getInputValue("save-percentage");
    // calculate savings 
    const savingAmount = document.getElementById("saving-amount");
    if (savePercentage < 0 || savePercentage == false) 
    {
        return;
    }
    const calculatedSavings = income * (savePercentage/100); 
    savingAmount.innerText = calculatedSavings;
    // get balance
    const balanceText = document.getElementById("balance").innerText;
    const currenBalance = parseFloat(balanceText);
    const remainingBalance = document.getElementById("remaining-balance");
    // Check if you have enough to save 
    if (currenBalance >= savePercentage) {
        remainingBalance.innerText = currenBalance - parseFloat(calculatedSavings);
    }
    else {  
        const saveMessage = document.getElementById("notify-save");
        saveMessage.style.display = "block";
    }
}