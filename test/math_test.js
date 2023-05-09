const expect = require('chai').expect

describe("Math Tests", ()=>{
    const math = require("../algo/math")
    it("'Addition' function should return two numbers summed", ()=>{
        expect(math.addition(8, 8)).to.be.equal(16);
        expect(math.addition(2, 8)).to.be.equal(10);
        expect(math.addition(2, "8")).to.be.equal("28");

    })

    it("'Divided' function should return two numbers divided", ()=>{
        expect(math.divide(8, 8)).to.be.equal(1);
        expect(math.divide(16, 8)).to.be.equal(2);
    })

    it("'Subtract' function should return the first number minus the second number", ()=>{
        expect(math.subtract(8, 8)).to.be.equal(0);
        expect(math.subtract(16, 8)).to.be.equal(8);
    })

    it("'Multiply' function should return the first number minus the second number", ()=>{
        expect(math.multiply(8, 8)).to.be.equal(64);
        expect(math.multiply(2, 2)).to.be.equal(4);
    })




})