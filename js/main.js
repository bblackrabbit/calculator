window.onload = function () {
    const operandHandler = (event) => {
        const calc = new Calculator();
        const firstNumber = calc.getValue(document.getElementById('firstNumber').value);
        const secondNumber = calc.getValue(document.getElementById('secondNumber').value);
        const operand = event.target.dataset.operand;
        const result = calc[operand](firstNumber, secondNumber);

        document.getElementById('result').value = result.toString();
    }

    const buttons = document.querySelectorAll('.operand');
    buttons.forEach(button => {
        button.addEventListener('click', operandHandler);
    });
}

