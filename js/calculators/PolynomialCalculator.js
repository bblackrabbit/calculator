class PolynomialCalculator {
    polynomial(members) {
        return new Polynomial(members);
    }

    add(a, b) {
        const calc = new Calculator;
        const members = [];
        a.poly.forEach(elA => {
            const member = b.poly.find(elB => elB.power === elA.power);
            if (member) {
                members.push(new Member(calc.add(elA.value, member.value), elA.power));
            }
            else {
                members.push(new Member(elA.value, elA.power));
            }
        });
        b.poly.forEach(elB => {
            if (!members.find(el => el.power === elB.power)) {
                members.push(new Member(elB.value, elB.power));
            }
        })
        return new Polynomial(members);
    }

    sub(a, b) {
        const calc = new Calculator;
        const members = [];
        a.poly.forEach(elA => {
            const member = b.poly.find(elB => elB.power === elA.power);
            if (member) {
                members.push(new Member(calc.sub(elA.value, member.value), elA.power));
            }
            else {
                members.push(new Member(elA.value, elA.power));
            }
        });
        b.poly.forEach(elB => {
            if (!members.find(el => el.power === elB.power)) {
                members.push(new Member(-elB.value, elB.power));
            }
        })
        return new Polynomial(members);
    }

    mult(a, b) {
        const calc = new Calculator;
        let polynomial = new Polynomial;
        a.poly.forEach(elA => {
            const members = [];
            b.poly.forEach(elB => {
                members.push(new Member(calc.mult(elA.value, elB.value), elA.power + elB.power))
            });
            polynomial = this.add(polynomial, new Polynomial(members));
        });
        return polynomial;
    }
}