import { spliceElement } from "./11-splice-element/11-splice-element";

// set up a suite of multiple tests
describe('Test of spliceElement function', () => {

  test('spliceElement should return [0,1,2,4,5] for [0,1,2,3,4,5], 3', () => {
    let basicArray = [0,1,2,3,4,5]
    spliceElement(basicArray, 3);
    const expectedResult = [0,1,2,4,5]

    expect(basicArray.length).toEqual(expectedResult.length); // assertation
    for(let i = 0; i<expectedResult.length; i++){
          expect(basicArray[i]).toEqual(expectedResult[i]); // assertation
    }
  });
})
