class MatrixCalculator {
    constructor(calc = new RealCalculator) {
        this.calc = calc;
    }
    div(a, b) { return null; }

    add(a, b) {
        return new Matrix(a.values.map(
            (arr, i) => arr.map((elem, j) => this.calc.add(elem, b.values[i][j]))
        ));
    }

    sub(a, b) {
        return new Matrix(a.values.map(
            (arr, i) => arr.map((elem, j) => this.calc.sub(elem, b.values[i][j]))
        ));
    }

    mult(a, b) {
        const length = a.values.length

        const c = this.zero(length);
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                let S = this.calc.zero(length);
                for (let k = 0; k < length; k++) {
                    S = this.calc.add(S,
                        this.calc.mult(
                            a.values[i][k],
                            b.values[k][j]
                        )
                    );
                }
                c.values[i][j] = S;
            }
        }
        return c;
    }

    pow(a, b) {
        let p = this.one(a.values.length);
        for (let i = 0; i < b; i++) p = this.mult(a, p);
        return p;
    }

    prod(a, p) {
        return new Matrix(a.values.map(
            arr => arr.map(elem => this.calc.prod(elem, p))
        ));
    }

    /*
    1 0 0
    0 1 0
    0 0 1   
    */
    one(length) {
        const values = [];
        for (let i = 0; i < length; i++) {
            values.push([]);
            for (let j = 0; j < length; j++) {
                values[i][j] = i === j ? this.calc.one() : this.calc.zero();
            }
        }
        return new Matrix(values);
    }

    zero(length) {
        const values = [];
        for (let i = 0; i < length; i++) {
            values.push([]);
            for (let j = 0; j < length; j++) {
                values[i][j] = this.calc.zero();
            }
        }
        return new Matrix(values);
    }
}