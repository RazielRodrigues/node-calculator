const assert = require('assert');
const CalculatorCientific = require('../src/CalculatorCientific');

describe("Test suite CalculatorCientific", () => {

    it("Should return the AVG", async () => {
        const calculatorCientific = new CalculatorCientific(50,33);
        assert.deepEqual(calculatorCientific.avg(2), 41.5);
    });

})