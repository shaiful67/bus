//  increase 1st-class input value.
getCalculationOfTickets('plus-btn-firstClass', 'input-value-firstClass', true)
// decrease 1st-class input value.
getCalculationOfTickets('minus-btn-firstClass', 'input-value-firstClass', false)
// increase economy class input value.
getCalculationOfTickets('plus-btn-economy', 'input-value-economy', true)
// decrease economy class input value.
getCalculationOfTickets('minus-btn-economy', 'input-value-economy', false)


// calculation of tickets and it's a main function.
function getCalculationOfTickets(button, input, isIncrease) {
    document.getElementById(button).addEventListener("click", function () {
        const inputValueNumber = getInputNumber(input);
        if (isIncrease == true) {
            const increaseNumber = inputValueNumber + 1;
            document.getElementById(input).value = increaseNumber;
            moneyCalculation();
        }
        else if (isIncrease == false && inputValueNumber > 0) {
            const decreaseNumber = inputValueNumber - 1;
            document.getElementById(input).value = decreaseNumber;
            moneyCalculation();
        }
    })
}


// calculation of total and subtotal and vat.
function moneyCalculation() {
    const inputFirstTotal = getInputNumber('input-value-firstClass') * 150;
    const inputEconomyTotal = getInputNumber('input-value-economy') * 100;
    const subtotal = inputFirstTotal + inputEconomyTotal;
    document.getElementById('subtotal').innerText = subtotal;
    const vat = subtotal * .10;
    document.getElementById('vat').innerText = vat;
    const total = subtotal + vat;
    document.getElementById('total').innerText = total;
    // to show the value of total and subtotal and vat in afterPurchase.
    document.getElementById('first-class-afterPurchase').innerText
        = getInputNumber('input-value-firstClass');
    document.getElementById('economy-class-afterPurchase').innerText
        = getInputNumber('input-value-economy');
    document.getElementById('total-afterPurchase').innerText = total;
}


//to convert string to number.
function getInputNumber(input) {
    const inputNumber = parseInt(document.getElementById(input).value);
    return inputNumber;
}


//to add event handler on book, now button and to show afterPurchase.
document.getElementById('book-now').addEventListener('click', function () {
    document.getElementById('afterPurchase').style.display = 'block';
    document.getElementById('booking-section').style.display = 'none';
})
