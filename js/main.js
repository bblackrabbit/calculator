window.onload = () => {
    const operandHandler = (event) => {
        const firstNumber = document.getElementById('firstNumber').value;
        const secondNumber = document.getElementById('secondNumber').value;

        const operand = event.target.dataset.handler;

        if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
            const calc = new RealCalculator;
            const result = calc[operand](firstNumber - 0, secondNumber - 0);
            document.getElementById('result').value = result;
        }
    }

    const buttons = document.querySelectorAll('.operand');
    buttons.forEach(button => {
        button.addEventListener('click', operandHandler);
    });

}

