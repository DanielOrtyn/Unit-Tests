import { substring } from "./05-substring/05-substring";


// set up a suite of multiple tests
describe('Test of substring function', () => {

    test(`substring should return \'hello\' for \'hel\'`, () => {
      const result = substring('hello', 0, 3);
      expect(result).toEqual(`hel`); // assertation
    });
})
