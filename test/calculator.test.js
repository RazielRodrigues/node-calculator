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

})

describe("Suite de erros principal", () => {

    it("Should return error undefined first number", () => {
        try {
            const calculator = new Calculator(undefined, 2);
        } catch (error) {
            assert.deepEqual(error instanceof Error, true);
            assert.equal(error.message, 'You must pass a first number!');
        }
    })

    it("Should return error undefined second number", () => {
        try {
            const calculator = new Calculator(2, undefined);
        } catch (error) {
            assert.deepEqual(error instanceof Error, true);
            assert.equal(error.message, 'You must pass a second number!');
        }
    })

})