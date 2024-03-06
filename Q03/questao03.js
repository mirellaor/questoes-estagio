function letraA(n) {
    return n + 2;
}

function letraB(n) {
    return 2 * n;
}

function letraC(n) {
    return n ** 2;
}

function letraD(n) {
    return (n + 2) ** 2;
}

function letraE(n) {
    if (n <= 2) {
        return 1;
    } else {
        let fib = [1, 1];
        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib[n - 1];
    }
}

function letraF(n) {
    if (n === 1) {
        return 2;
    } else if (n === 2) {
        return 10;
    } else if (n === 3) {
        return 12;
    } else {
        return 17 + n - 5;
    }
}

console.log("Letra a):", letraA(7));
console.log("Letra b):", letraB(64));
console.log("Letra c):", letraC(7));
console.log("Letra d):", letraD(8));
console.log("Letra e):", letraE(7));
console.log("Letra f):", letraF(8));


//Letra a): 9
//Letra b): 128
//Letra c): 49
//Letra d): 100
//Letra e): 13
//Letra f): 20