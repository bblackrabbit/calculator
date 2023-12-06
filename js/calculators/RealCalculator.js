class RealCalculator {
    add(a, b) { return a + b; }
    sub(a, b) { return a - b; }
    mult(a, b) { return a * b; }
    div(a, b) {
        if (b != 0)
            return a / b;
        else return 'Ошибка!';
    }
    pow(a, n) { return Math.pow(a, n); }
    prod(a, p) { return a * p; }
    one() {
        return 1;
    }
    zero() {
        return 0;
    }
}