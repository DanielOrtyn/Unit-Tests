/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
export function spliceElement(someArr, index) {
  if(!Array.isArray(someArr)){
      return
  }
  if(typeof(index)!==`number` || index<0 || index>someArr.length){
    return
  }
  for(let i = index; i<someArr.length-1; i++){
    someArr[i] = someArr[i+1]
  }
  someArr.pop()
}

