const { Command } = require('commander');
const Calculator = require('./src/Calculator');

async function main() {
    try {

        const program = new Command();

        program
            .version('v1')
            .option('-n1, --number1 [value]', "Primeiro numero")
            .option('-n2, --number2 [value]', "Segundo numero")

            .option('-sm, --sum', "Sum")
            .option('-sb, --sub', "Sub")
            .option('-mp, --multiply', "Multiply")
            .option('-dv, --divide', "Division")

        
        program.parse(program.argv);
        const options = program.opts();
        const calculator = new Calculator(options.number1, options.number2);

        if (options.sum) console.log(calculator.sum());
        if (options.sub) console.log(calculator.sub());
        if (options.multiply) console.log(calculator.multiply());
        if (options.divide) console.log(calculator.divide());

    } catch (error) {
        console.error("Some problem in the app!", error)
    }
}

main();