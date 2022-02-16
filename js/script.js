function calculateButton(){
    const incomeText = document.getElementById("income").value;
    const income = parseFloat(incomeText);
    const totalExpense = addAllExpense();
    const totalBalance = income - totalExpense;
    const expences = document.getElementById("total-expense");
    expences.innerText = totalExpense;
    const balance = document.getElementById("balance");
    balance.innerText = totalBalance;
}

function addAllExpense() {

    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    // //get the previous deposit total 
    // function getInputValue(inputId){
    //     const inputField = document.getElementById(inputId);
    //      const inputAmountText = inputField.value;
    //      const amountValue = parseFloat(inputAmountText);
    //      inputField.value = "";
    //      return amountValue;
    // }
    
    // function updateTotalField(totalFieldId, depositAmount){
    //     const totalElement = document.getElementById(totalFieldId);
    //      const totalText = totalElement.innerText;
    //      const previousTotal = parseFloat(totalText);
    
    //      totalElement.innerText = previousTotal + depositAmount; 
    // }
    const foodExpText = document.getElementById("food-exp").value; 
    const foodExp = parseFloat(foodExpText);

    const rentExpText = document.getElementById("rent-exp").value;
    const rentExp = parseFloat(rentExpText);
    
    const clothesExpText = document.getElementById("clothes-exp").value;
    const clothesExp = parseFloat(clothesExpText);

    const totalExpense = foodExp + rentExp + clothesExp;
    console.log(totalExpense);
    return totalExpense;
}

function saveButton(){
    const incomeText = document.getElementById("income").value;
    const income = parseFloat(incomeText);
    const totalExpense = addAllExpense();
    const totalBalance = income - totalExpense;
    const expences = document.getElementById("total-expense");
    expences.innerText = totalExpense;
    const balance = document.getElementById("balance");
    balance.innerText = totalBalance;
}


// function getInputValue(inputId){
//     const inputField = document.getElementById(inputId);
//      const inputAmountText = inputField.value;
//      const amountValue = parseFloat(inputAmountText);
//      inputField.value = "";
//      return amountValue;
// }

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

