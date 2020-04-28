// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return Hello Jane when passed Jane', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should should return "Hello, Alex!" when passed Alex', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should should return "Hello, Pat!" when passed Pat', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when passed undefined', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe("isFive", function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed "5"', function () {
        expect(isFive("5")).toBe(true);
    });
});

describe("isEven", function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return true when passed 8', function () {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when passed 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return false when passed Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed true', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when passed no argument', function () {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when passed a', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed A', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return true when passed y', function () {
        expect(isVowel("Y")).toBe(true);
    });
    it('should return false when passed 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed true', function () {
        expect(isVowel(true)).toBe(false);
    });
});

describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return 5 when given 2, 3', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when given -3, -9', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when given "5", 6', function () {
        expect(add("5", 6)).toBe(11);
    });
});