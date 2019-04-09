import { bubbleSort } from "./02-bubble-sort/02-bubble-sort";


// set up a suite of multiple tests
describe('Test of bubbleSort function', () => {

  test('bubbleSort should return 0 for 0', () => {
    let basicArray = [10, 5, 3, 7, 7, 9, 10, 2, 3, 5]
    bubbleSort(basicArray);
    const expectedResult = [2, 3, 3, 5, 5, 7, 7, 9, 10, 10]
    expect(basicArray.length).toEqual(expectedResult.length); // assertation
    for(let i = 0; i<expectedResult.length; i++){
          expect(basicArray[i]).toEqual(expectedResult[i]); // assertation
    }
  });
  test('bubbleSort should return 0 for 0', () => {
    let basicArray = [2,7,9,4,2,7,9,4]
    bubbleSort(basicArray);
    const expectedResult = [ 2, 2, 4, 4, 7, 7, 9, 9 ]
    expect(basicArray.length).toEqual(expectedResult.length); // assertation
    for(let i = 0; i<expectedResult.length; i++){
          expect(basicArray[i]).toEqual(expectedResult[i]); // assertation
    }
  });
  test('bubbleSort should return 0 for 0', () => {
    let basicArray = [-10,45, 8, 9, 2, 30,0]
    bubbleSort(basicArray);
    const expectedResult = [ -10, 0, 2, 8, 9, 30, 45 ]
    expect(basicArray.length).toEqual(expectedResult.length); // assertation
    for(let i = 0; i<expectedResult.length; i++){
          expect(basicArray[i]).toEqual(expectedResult[i]); // assertation
    }
  });
})

