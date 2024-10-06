document.getElementById('conversionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNumber = document.getElementById('inputNumber').value;
    const conversionType = document.getElementById('conversionType').value;
    const resultDiv = document.getElementById('result');
    let result;

    switch (conversionType) {
        case 'decToOct':
            result = parseInt(inputNumber, 10).toString(8);
            break;
        case 'decToBin':
            result = parseInt(inputNumber, 10).toString(2);
            break;
        case 'decToHex':
            result = parseInt(inputNumber, 10).toString(16).toUpperCase();
            break;
        case 'octToDec':
            result = parseInt(inputNumber, 8);
            break;
        case 'octToBin':
            result = parseInt(inputNumber, 8).toString(2);
            break;
        case 'octToHex':
            result = parseInt(inputNumber, 8).toString(16).toUpperCase();
            break;
        case 'hexToBin':
            result = parseInt(inputNumber, 16).toString(2);
            break;
        case 'hexToOct':
            result = parseInt(inputNumber, 16).toString(8);
            break;
        case 'hexToDec':
            result = parseInt(inputNumber, 16);
            break;
        case 'binToDec':
            result = parseInt(inputNumber, 2);
            break;
        case 'binToOct':
            result = parseInt(inputNumber, 2).toString(8);
            break;
        case 'binToHex':
            result = parseInt(inputNumber, 2).toString(16).toUpperCase();
            break;
        default:
            result = 'Invalid conversion type';
    }

    resultDiv.textContent = `Result: ${result}`;
});
