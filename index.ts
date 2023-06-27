function is_divisible(number: number, modulo: number): boolean {
    return number % modulo == 0
}

var pairs = new Map<number, string>();
pairs.set(3, "Fizz");
pairs.set(5, "Buzz");
pairs.set(7, "Bang");

// This is our main function
function fizzbuzz(): void {

    for (let i = 1; i < 256; i++) {

        var ls: string[] = [];

        pairs.forEach((key, code) => {
            if ((code == 5 || code == 7) && is_divisible(i, code)) {
                if (is_divisible(i, 13)) {
                    ls.push("Fezz");
                    ls.push(key);
                } else {
                    ls.push(key);
                }
            } else if (is_divisible(i, code)) {
                ls.push(key);
            }
        });

        if (is_divisible(i, 11) && !is_divisible(i, 13)) {
            ls = ["Bong"];
        } else if (is_divisible(i, 11) && is_divisible(i, 13)) {
            ls = ["Fezz", "Bong"];
        } else if (is_divisible(i, 17)) {
            ls = ls.reverse();
        }

        if (ls.length == 0) {
            console.log(i);
        } else {
            console.log(ls.join(''));
        }

    }

}

// Now, we run the main function:
fizzbuzz();
