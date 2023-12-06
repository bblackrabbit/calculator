class ComplexCalculator extends RealCalculator {
    add(a, b) { return new Complex( a.re + b.re, a.im + b.im ); }
    sub(a, b) { return new Complex( a.re - b.re, a.im - b.im ); }
    mult(a, b) { return new Complex( a.re*b.re - a.im*b.im, a.re*b.im + b.re*a.im ); }
    inv(a) {
        const q = Math.sqrt(a.re) + Math.sqrt(a.im);
        return new Complex( a.re / q, -a.im / q );
    }
    div(a, b) {
        return this.mult( a, this.inv(b) );}
    pow(a, n) {
        let S = this.one();
        for (let i=0; i < n; i++) {
            S = this.mult(S, a);
        }
        return S;
    }
    prod(a, p) { return new Complex( a.re * p, a.im * p); }
    zero() { return new Complex(); }
    one() { return new Complex( super.one() ); }
}