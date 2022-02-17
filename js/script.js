function calculateButton(){
    debugger;
    const income = getInputValue("income");
    const totalExpense = addAllExpense();
    const totalBalance = income - totalExpense;
    const expences = document.getElementById("total-expense");
    expences.innerText = totalExpense;
    const balance = document.getElementById("balance");
    balance.innerText = totalBalance;
}

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
     const inputAmountText = inputField.value;
     const amountValue = parseFloat(inputAmountText);
     return amountValue;
}

function addAllExpense() {
    const foodExp = getInputValue("food-exp");
    const rentExp = getInputValue("rent-exp");
    const clothesExp = getInputValue("clothes-exp");
    const totalExpense = foodExp + rentExp + clothesExp;
    return totalExpense;
}

function saveButton(){
    debugger;
    // get income and save input value 
    const income = getInputValue("income");
    const savePercentage = getInputValue("save-percentage");
    // calculate savings 
    const savingAmount = document.getElementById("saving-amount");
    const calculatedSavings = income * (savePercentage/100); 
    savingAmount.innerText = calculatedSavings;
    // get balance
    const balanceText = document.getElementById("balance").innerText;
    const currenBalance = parseFloat(balanceText);
    const remainingBalance = document.getElementById("remaining-balance");
    // Check if you have enough to save 
    debugger;
    if (currenBalance > savePercentage) {
        remainingBalance.innerText = currenBalance - parseFloat(calculatedSavings);
    }
    else {  
        const saveMessage = document.getElementById("notify-save");
        saveMessage.style.display = "block";
    }
}



// function updateTotalField(totalFieldId, depositAmount){
//     const totalElement = document.getElementById(totalFieldId);
//      const totalText = totalElement.innerText;
//      const previousTotal = parseFloat(totalText);

//      totalElement.innerText = previousTotal + depositAmount; 
// }

// function getCurrentBalance() {
//     const balanceTotal= document.getElementById('balance-total');
//     const balanceTotalText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(balanceTotalText);
//     return previousBalanceTotal;
// }

// function updateBalance(amount, isAdd){
//     const balanceTotal= document.getElementById('balance-total');
//     const previousBalanceTotal = getCurrentBalance();
//     if(isAdd == true) {
//         balanceTotal.innerText = previousBalanceTotal + amount;
//     }
//     else {
//         balanceTotal.innerText = previousBalanceTotal - amount;
//     }  
// }


// document.getElementById('deposit-button').addEventListener('click', function()
// {
//     const depositAmount = getInputValue('deposit-input');
//     if (depositAmount > 0)
//     {
//         updateTotalField('deposit-total',depositAmount);
//         updateBalance(depositAmount, true);
//     }
// })

// document.getElementById('withdraw-button').addEventListener('click', function()
// {
//      const withdrawAmount = getInputValue('withdraw-input');
//      const currenBalance = getCurrentBalance();
//      if (withdrawAmount > 0 && withdrawAmount < currenBalance)
//      {
//         updateTotalField('withdraw-total',withdrawAmount);
//         updateBalance(withdrawAmount, false);
//      }
//      if (withdrawAmount > currenBalance)
//      {
//         console.log('You can not withdraw more than what you have in your account.');
//      }
// })


/* 

function verifyPin() {
    debugger;
    const pin = document.getElementById("display-pin").value;
    const typedNumbers = document
    .getElementById("typed-numbers").value;
    const successMessage = document.getElementById("notify-success");
    const failError = document.getElementById("notify-fail");
    if (pin == typedNumbers) {
        successMessage.style.display = "block";
        failError.style.display = "none"
    }
    else {
        successMessage.style.display = "none";
        failError.style.display = "block";
    }
}
 */

// if (withdrawAmount > 0 && withdrawAmount < currenBalance)
// {
//    updateTotalField('withdraw-total',withdrawAmount);
//    updateBalance(withdrawAmount, false);
// }
// if (withdrawAmount > currenBalance)
// {
//    console.log('You can not withdraw more than what you have in your account.');
// }
