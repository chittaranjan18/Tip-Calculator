document.getElementById('calculateTipBtn').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (isNaN(billAmount) || billAmount <= 0) {
        alert('Please enter a valid bill amount');
        return;
    }

   
    const tipAmount = billAmount * tipPercentage;
    const totalBillWithTip = billAmount + tipAmount;

    
    document.getElementById('tipAmount').textContent = tipAmount.toFixed(2);
    document.getElementById('totalBill').textContent = totalBillWithTip.toFixed(2);
});
