document.getElementById('deposit-btn').addEventListener('click', function () {

    //get the amount deposit
    const depositInput = document.getElementById('deposit-amount')
    const depositBalance = depositInput.value;
    const deositeCurrent = document.getElementById('total-deposit')
    deositeCurrent.innerText = depositBalance
    depositInput.value = '';
})