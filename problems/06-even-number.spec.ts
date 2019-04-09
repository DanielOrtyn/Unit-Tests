import { isEven } from "./06-even-number/06-even-number";

// set up a suite of multiple tests
describe('Test of isEven function', () => {

  test('isEven should return true for 10', () => {
    const result = isEven(10);
    expect(result).toEqual(true); // assertation
  });
  test('isEven should return true for 0', () => {
    const result = isEven(0);
    expect(result).toEqual(true); // assertation
  });
  test('isEven should return false for 3', () => {
    const result = isEven(3);
    expect(result).toEqual(false); // assertation
  });
})
