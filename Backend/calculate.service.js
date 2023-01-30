module.exports.CalculateService = (operand1, operand2, operation) => {
    switch (operation) {
        case '×':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
        case '+' : 
            return operand1 + operand2;
        case '-' : 
            return operand1 - operand2;
        case '^':
            return Math.pow(operand1, operand2); 
        case 'log' : 
            return operand1 * Math.log10(operand2);
        case 'ln': 
            return operand1 * Math.log(operand2);
        default:
            throw new Error("Unknown operation")
    }
}