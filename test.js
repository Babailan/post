function test(n) {
    if (n < 2) {
        return 0;
    }
    for (let i = 2; i <= n; i++) {
        const answer = n / i;
        if (answer % 1 === 0) {
            return i;
        }
    }
}


test(10000000000);