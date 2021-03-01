const { fizzBuzz } = require("../exercise1");

describe("tests the fizzBuzz function", () => {
    it("should return FizzBuzz", () => {
        const result = fizzBuzz(15);
        expect(result).toBe("FizzBuzz");
    });

    it("should return Fizz", () => {
        const result = fizzBuzz(6);
        expect(result).toBe("Fizz");
    });

    it("should return Buzz", () => {
        const result = fizzBuzz(10);
        expect(result).toBe("Buzz");
    });

    it("should return 8", () => {
        const result = fizzBuzz(8);
        expect(result).toBe(8);
    });

    it("should throw due to incorrect input type", () => {
        expect(() => { fizzBuzz( null ) }).toThrow();
        expect(() => { fizzBuzz( '1' ) }).toThrow();
        expect(() => { fizzBuzz( undefined ) }).toThrow();
        expect(() => { fizzBuzz( {} ) }).toThrow();
        expect(() => { fizzBuzz( [] ) }).toThrow();
    });
});
