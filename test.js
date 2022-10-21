function Army(n, m) {
    const total = n * m;

    const leftovers = total % 4;

    const divided = total / 4;
    console.log(divided);
    if (leftovers) {
        if (leftovers === 3) {
            return Math.floor(total / 4) + 2;
        } else {
            return Math.floor(total / 4) + 1;
        }
    }
    return Math.floor(total / 4);
}


Army(999, 999)