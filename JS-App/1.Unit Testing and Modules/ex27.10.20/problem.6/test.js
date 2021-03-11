let { expect } = require('chai');
let PaymentPackage = require(`./paymentPackage.js`);

describe('PaymentPackage', () => {
    describe('Instantiation & Structure', () => {
        it('works with valid params', () => {
            expect(() => new PaymentPackage('My Package', 120)).to.not.throw();
        });
        it('is correct set up', () => {
            const instance = new PaymentPackage('My Package', 120);
            expect(instance.name).to.equal('My Package');
            expect(instance.value).to.equal(120);
            expect(instance.VAT).to.equal(20);
            expect(instance.active).to.equal(true);
        });
        it('does not work with invalid name', () => {
            expect(() => new PaymentPackage('', 120)).to.throw();
            expect(() => new PaymentPackage(undefined, 120)).to.throw();
            expect(() => new PaymentPackage({}, 120)).to.throw();
        });
        it('does not work with invalid value', () => {
            expect(() => new PaymentPackage('My Package', '')).to.throw();
            expect(() => new PaymentPackage('My Package', -3)).to.throw();
            expect(() => new PaymentPackage('My Package', [])).to.throw();
        });
        it('has all properties', () => {
            const instance = new PaymentPackage('My Package', 120);
            expect(instance).to.have.property('name');
            expect(instance).to.have.property('value');
            expect(instance).to.have.property('VAT');
            expect(instance).to.have.property('active');
        });
    });
    describe('Accessors', () => {
        let instance = null;
        beforeEach(() => {
            instance = new PaymentPackage('My Package', 120);
        });
        it('Accepts valid name', () => {
            instance.name = 'New Package';
            expect(instance.name).to.equal('New Package');
        });
        it('Rejects invalid name', () => {
            expect(() => instance.name = '').to.throw();
            expect(() => instance.name = undefined).to.throw();
            expect(() => instance.name = {}).to.throw();
        });
        it('Accepts and sets valid value', () => {
            instance.value = 90;
            expect(instance.value).to.equal(90);
        });
        it('Rejects invalid value', () => {
            expect(() => instance.value = '').to.throw();
            expect(() => instance.value = undefined).to.throw();
            expect(() => instance.value = -6).to.throw();
        });
        it('Accepts and sets valid VAT', () => {
            instance.VAT = 69;
            expect(instance.VAT).to.equal(69);
        });
        it('Rejects invalid VAT', () => {
            expect(() => instance.VAT = '').to.throw();
            expect(() => instance.VAT = undefined).to.throw();
            expect(() => instance.VAT = -6).to.throw();
        });
        it('Accepts and sets valid active', () => {
            instance.active = true;
            expect(instance.active).to.be.true;

            instance.active = false;
            expect(instance.active).to.be.false;
        });
        it('Rejects invalid active', () => {
            expect(() => instance.active = '').to.throw();
            expect(() => instance.active = undefined).to.throw();
            expect(() => instance.active = -69).to.throw();
        });
    });
    describe('String information', () => {
        let instance = null;
        beforeEach(() => {
            instance = new PaymentPackage('My Package', 120);
        });

        it('contains the name', () => {
            expect(instance.toString()).to.contain('My Package');
        });
        it('contains the value', () => {
            expect(instance.toString()).to.contain((120).toString());
        });
        it('contains the VAT', () => {
            expect(instance.toString()).to.contain(instance.VAT + '%');
        });
        it('displays inactive label', () => {
            instance.active = false;

            expect(instance.toString()).to.contain('(inactive)');
        });
        it('updates info in setters', () => {
            instance.name = 'New Package';
            instance.value = 90;
            instance.VAT = 9;

            const output = instance.toString();
            expect(output).to.contain('New Package');
            expect(output).to.contain('90');
            expect(output).to.contain('9%');
        });
    });
});