    const calculator = document.createElement('div');
    calculator.style.width = '300px';
    calculator.style.margin = '50px auto';
    calculator.style.padding = '20px';
    calculator.style.border = '1px solid #ccc';
    calculator.style.borderRadius = '10px';
    calculator.style.boxShadow = '0 0 10px black';
    calculator.style.fontFamily = 'Arial, sans-serif';
    
    const result = document.createElement('input');
    result.type = 'text';
    result.disabled = true;
    result.style.width = '100%';
    result.style.height = '60px';
    result.style.fontSize = '20px';
    result.style.textAlign = 'right';
    result.style.marginBottom = '10px';
    calculator.appendChild(result);

    function appendToResult(value) {
        result.value += value;
    }

    function clearResult() {
        result.value = '';
    }

    function calculateResult() {
        try {
            const evalResult = eval(result.value);
            result.value = evalResult;
        } catch (error) {
            alert('Invalid input');
            clearResult();
        }
    }

    const buttons = [
        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '*',
        '0', 'C', '=', '/'
    ];

    buttons.forEach(button => {
        const btn = document.createElement('input');
        btn.type = 'button';
        btn.value = button;
        btn.style.width = '60px';
        btn.style.height = '60px';
        btn.style.fontSize = '20px';
        btn.style.margin = '5px';
        btn.onclick = () => {
            if (button === 'C') {
                clearResult();
            } else if (button === '=') {
                calculateResult();
            } else {
                appendToResult(button);
            }
        };
        calculator.appendChild(btn);
    });
    document.body.appendChild(calculator);


