const Calculator = require("./Calculator");

class CalculatorCientific extends Calculator {
    constructor(firstNumber, secondNumber) {
        super(firstNumber, secondNumber);
    }

    avg(distributionBy){ return this.sum() / distributionBy; }

}

module.exports = CalculatorCientific;