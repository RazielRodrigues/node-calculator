class Calculator {

    constructor(firstNumber, secondNumber) {

        if(!firstNumber) throw new Error("You must pass a first number!")
        if(!secondNumber) throw new Error("You must pass a second number!")

        this.firstNumber = parseInt(firstNumber);
        this.secondNumber = parseInt(secondNumber);
    }

    sum() { return this.firstNumber + this.secondNumber; }

    sub() { return this.firstNumber - this.secondNumber; }

    multiply() { return this.firstNumber * this.secondNumber; }

    divide() { return this.firstNumber / this.secondNumber; }

}

module.exports = Calculator;