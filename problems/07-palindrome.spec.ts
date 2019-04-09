import { isPalindrome } from "./07-palindrome/07-palindrome";

// set up a suite of multiple tests
describe('Test of reverse string function', () => {

    test(`isPalindrome should return false for \'test\'`, () => {
      const result = isPalindrome(`test`);
      expect(result).toEqual(false); // assertation
    });
    test(`isPalindrome should return false for\'Tlalt\'`, () => {
      const result = isPalindrome(`Tlalt`);
      expect(result).toEqual(false); // assertation
    });
    test(`isPalindrome should return true for \'tlalt\'`, () => {
      const result = isPalindrome(`tlalt`);
      expect(result).toEqual(true); // assertation
    });
})
