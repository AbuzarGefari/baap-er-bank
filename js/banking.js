document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-amount');
    const newdepositText = depositInput.value;
    const newdepositAmount =parseFloat(newdepositText) ;
    // console.log(depositAmount);

    const totalDeposit = document.getElementById('total-deposit');
    const previousDepositText = totalDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    
    const newDepositTotal = parseFloat(previousDepositAmount) + newdepositAmount;

    totalDeposit.innerText = newDepositTotal ;
    
// update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText)
    const newBalanceTotal = previousBalanceTotal + newdepositAmount;

    balanceTotal.innerHTML = newBalanceTotal; 


    depositInput.value = ""; 


})

//handel withdrow event handel
document.getElementById('withdrow-btn').addEventListener('click', function () {
    const withdrowInput = document.getElementById('withdrow-input');
    const withdrowAmountText = withdrowInput.value;

    const newWithdrowAmount = parseFloat(withdrowAmountText);
    console.log(withdrowAmountText)

    //set withdrow Total
    const withdrowTotal = document.getElementById('withdrow-tatal');
    const previousWithdrowText = withdrowTotal.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowText);

    const newWithdrowTotal = previousWithdrowTotal + newWithdrowAmount;
    withdrowTotal.innerText = newWithdrowTotal

//update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrowAmount;
    balanceTotal.innerText = newBalanceTotal;
    

    // clear withdrow input

    withdrowInput.value = '';
})