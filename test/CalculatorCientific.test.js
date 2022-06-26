const assert = require('assert');
const CalculatorCientific = require('../src/CalculatorCientific');

describe("Test suite CalculatorCientific", () => {

    const CalculatorCientific = new CalculatorCientific(50,33);

    it("Should return the AVG", async () => {
        assert.deepEqual(CalculatorCientific.avg(2), 41.5);
    });

})