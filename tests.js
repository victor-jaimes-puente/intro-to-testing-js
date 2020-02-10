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
        expect(typeof sayHello).toBe('function')
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string')
    });
    it('should never return undefined when called', function () {
        expect(sayHello()).not.toBe(undefined)
    });
    it('should add "Hello!, " to the input', function () {
        expect(sayHello("Jane")).toBe("Hello!, Jane")
    });
    it('should return "Hello!, Pat" when called with "Pat" as the argument', function () {
      expect(sayHello("Pat")).toBe("Hello!, Pat")
    });
    it('should return "Hello, World!" when no parameters are set', function () {
        expect(sayHello()).toBe("Hello, World!")
    });
    it('should return "Hello, World!" if boolean true is input', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return "Hello, World!" if boolean true is input', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });

});
