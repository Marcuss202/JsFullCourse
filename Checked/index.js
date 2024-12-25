const myCheckbox = document.getElementById('myCheckbox');
const visaBtn = document.getElementById('visaBtn');
const mastercardBtn = document.getElementById('mastercardBtn');
const PayPalBtn = document.getElementById('PayPalBtn');
const myButton = document.getElementById('myButton');

const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');


myButton.onclick = function() {
    if(myCheckbox.checked) {
        subResult.textContent = 'You are subscribed';
    }
    else{
        subResult.textContent = 'You are not subscribed';
    }

    if(visaBtn.checked) {
        paymentResult.textContent = 'You have selected Visa';
    }
    else if(mastercardBtn.checked) {
        paymentResult.textContent = 'You have selected Mastercard';
    }
    else if(PayPalBtn.checked) {
        paymentResult.textContent = 'You have selected PayPal';
    }
    else{
        paymentResult.textContent = 'You have not selected any payment method';
    }
}
