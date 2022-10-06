//deposit

//step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step-2
    const depositField = document.getElementById('deposit-field');
    const newdepositAmountString = depositField.value;
    const newdepositAmount = parseFloat(newdepositAmountString)
    //step-3
    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotalString = depositTotalElement.innerText
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    //step-4
    const currentDepositTotal = previousDepositTotal + newdepositAmount;
    depositTotalElement.innerText = currentDepositTotal
    //step-5
    const totalBalanceElement = document.getElementById('total-balance')
    const previousBalanceTotalString = totalBalanceElement.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)
    //step-6
    const currentBalanceTotal = previousBalanceTotal + newdepositAmount
    totalBalanceElement.innerText = currentBalanceTotal
    //clear deposit field
    depositField.value = '';
})