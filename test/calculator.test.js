const assert = require('assert');
const Calculator = require('../src/Calculator.js');

describe("Suite de testes principal", () => {

    const calculator = new Calculator(1 , 2);

    it("Should sum", () => {
        assert.deepEqual(calculator.sum(), 3)
    })

    it("Should sub", () => {
        assert.deepEqual(calculator.sub(), -1);
    })

    it("Should multiply", () => {
        assert.deepEqual(calculator.multiply(), 2);
    })

    it("Should divide", () => { 
        assert.deepEqual(calculator.divide(), 0.5);
    })

    it("Should return error", () => {
        try {
            calculator.firstNumber = 0;
            calculator.secondNumber = 0;
        } catch (error) {
            assert.deepEqual(error, 'You must pass a first number!');
            assert.deepEqual(error, 'You must pass a second number!');
        }
    })

})