const lib = require("../lib");

describe("absolute", () => {
    it("should return a positive number if input is positive", () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });

    it("should return a positive number if input is negative", () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });

    it("should return 0 if input is 0", () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe("greet", () => {
    it("should return the greeting message", () => {
        const result = lib.greet("Mosh");
        expect(result).toBe("Welcome Mosh"); // Too specific
        expect(result).toMatch(/Mosh/); // More flexible
        expect(result).toContain("Mosh"); // Without regex
    });
});

describe("getCurrencies", () => {
    it("should return supported currencies", () => {
        const result = lib.getCurrencies();

        // Too general
        expect(result).toBeDefined();
        expect(result).not.toBeNull();

        // Too specific
        expect(result[0]).toBe("USD");
        expect(result[1]).toBe("AUD");
        expect(result[2]).toBe("EUR");
        expect(result.length).toBe(3);

        // Proper way
        expect(result).toContain("USD");
        expect(result).toContain("AUD");
        expect(result).toContain("EUR");

        // Ideal way
        expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]));
    });
});

describe("getProduct", () => {
    it("should return the product with the given id", () => {
        const result = lib.getProduct(1);
        expect(result).toEqual({ id: 1, price: 10 }); // Too specific
        expect(result).toMatchObject({ id: 1, price: 10 }); // Passes even with extra kvs
        expect(result).toHaveProperty("id", 1);
    });
});

describe("registerUser", () => {
    it("should throw if username is falsy", () => {
        const args = [null, undefined, NaN, "", 0, false];
        args.forEach((a) => {
            expect(() => {
                lib.registerUser(a);
            }).toThrow();
        });
    });

    it("should return a user object if valud username is passed", () => {
        const result = lib.registerUser("steve");
        expect(result).toMatchObject({ username: "steve" });
        expect(result.id).toBeGreaterThan(0);
    });
});

