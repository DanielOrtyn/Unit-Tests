import { factorial } from "./04-factorial/04-factorial";

// set up a suite of multiple tests
describe('Test of factorial function', () => {

    test('factorial should return 3628800 for 10', () => {
      const result = factorial(10);
      expect(result).toEqual(3628800); // assertation
    });
})
