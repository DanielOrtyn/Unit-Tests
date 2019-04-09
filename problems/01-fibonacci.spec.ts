import { fib } from "./01-fibonacci/01-fibonacci";


// set up a suite of multiple tests
describe('Test of Fibnoacci function', () => {

    test('fib should return 0 for 0', () => {
      const result = fib(0);
      expect(result).toEqual(0); // assertation
    });
    test('fib should return 1 for 1', () => {
      const result = fib(1);
      expect(result).toEqual(1); // assertation
    });
    test('fib should return 1 for 2', () => {
      const result = fib(2);
      expect(result).toEqual(1); // assertation
    });
    test('fib should return 2 for 3', () => {
      const result = fib(3);
      expect(result).toEqual(2); // assertation
    });
    test('fib should return 3 for 4', () => {
      const result = fib(4);
      expect(result).toEqual(3); // assertation
    });
    test('fib should return 5 for 5', () => {
      const result = fib(5);
      expect(result).toEqual(5); // assertation
    });
    test('fib should return 8 for 6', () => {
      const result = fib(6);
      expect(result).toEqual(8); // assertation
    });
})
