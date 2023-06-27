function is_divisible(number: number, modulo: number): boolean {
    return number % modulo === 0
}

var pairs = new Map<number, string>();
pairs.set(3, "Fizz");
pairs.set(5, "Buzz");
pairs.set(7, "Bang");

function fizzbuzz(): void {
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("input a number, followed by the rules you want to apply seperated by space (3, 5, 7, 11, 13): ", function(input: string) {
        var inputs = input.split(' ');
        var number = +inputs[0];

        for (let i = 1; i < number; i++) {
            var ls: string[] = [];

            pairs.forEach((key, code) => {
                if ((code === 5 || code === 7) && is_divisible(i, code)) {
                    if (is_divisible(i, 13) && inputs.includes('13')) {
                        ls.push("Fezz");
                        ls.push(key);
                    } else if (inputs.includes(code.toString())) {
                        ls.push(key);
                    }
                } else if (is_divisible(i, code) && inputs.includes(code.toString())) {
                    ls.push(key);
                }
            });

            if (is_divisible(i, 11) && !is_divisible(i, 13) && inputs.includes('11') && !inputs.includes('13')) {
                ls = ["Bong"];
            } else if (is_divisible(i, 11) && is_divisible(i, 13) && inputs.includes('13') && inputs.includes('11')) {
                ls = ["Fezz", "Bong"];
            } else if (is_divisible(i, 17) && inputs.includes('17')) {
                ls = ls.reverse();
            }

            if (ls.length === 0) {
                console.log(i);
            } else {
                console.log(ls.join(''));
            }
        }

        rl.close();
    });
}

fizzbuzz();
