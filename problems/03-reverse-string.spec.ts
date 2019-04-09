import { reverseStr } from "./03-reverse-string/03-reverse-string";

// set up a suite of multiple tests
describe('Test of reverse string function', () => {

    test(`reverseStr should return \'tset\' for \'test\'`, () => {
      const result = reverseStr(`test`);
      expect(result).toEqual(`tset`); // assertation
    });
    test(`reverseStr should return \'Talt\' for \'tlaT\'`, () => {
      const result = reverseStr(`Talt`);
      expect(result).toEqual(`tlaT`); // assertation
    });
    test(`reverseStr should return \'123TT\"\"\' for \'\"\"TT321\'`, () => {
      const result = reverseStr(`test`);
      expect(result).toEqual(`tset`); // assertation
    });
})
