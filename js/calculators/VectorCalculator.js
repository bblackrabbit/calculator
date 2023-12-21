class VectorCalculator extends RealCalculator {
    div(a, b) { return null; }

    add(a, b) {
        return new Vector(a.values.map((elem, i) => super.add(elem, b.values[i])));
    }

    sub(a, b) {
        return new Vector(a.values.map((elem, i) => super.sub(elem, b.values[i])));
    }

    mult(a, b) {
        return new Vector(
            super.sub(super.mult(a.values[1], b.values[2]), super.mult(a.values[2], b.values[1])),
            super.sub(super.mult(a.values[2], b.values[0]), super.mult(a.values[0], b.values[2])),
            super.sub(super.mult(a.values[0], b.values[1]), super.mult(a.values[1], b.values[0])),
        );
    }

    pow(a, n) {
        return Math.pow(a, n);
    }

    prod(a, p) {
        return new Vector(a.values.map((elem, i) => super.prod(elem, p)));
    }

    one(length) {
        const values = [];
        for (let i = 0; i < length; i++) {
            values.push(super.one());
        }
        return new Vector(values);
    }

    zero(length) {
        const values = [];
        for (let i = 0; i < length; i++) {
            values.push(super.zero());
        }
        return new Vector(values);
    }

}