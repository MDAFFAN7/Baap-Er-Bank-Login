//withdraw

//step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)
    //step-3
    const withdrawTotalElement = document.getElementById('withdraw-total')
    const previousWithdrawTotalString = withdrawTotalElement.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)
    //step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal
    //step-5
    const totalBalanceElement = document.getElementById('total-balance')
    const previousBalanceTotalString = totalBalanceElement.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)
    //step-6
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount
    totalBalanceElement.innerText = currentBalanceTotal
    //clear deposit field
    withdrawField.value = '';
})