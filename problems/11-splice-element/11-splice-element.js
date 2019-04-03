/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
  if(index<0 || index>someArr.length){
    return
  }
  for(let i = index; i<someArr.length-1; i++){
    someArr[i] = someArr[i+1]
  }
  someArr.pop()
}


// Basic Tests
let testArr = [0,1,2,3,4,5]
let testIndex = 0
spliceElement(testArr, testIndex)
console.log(testArr)
