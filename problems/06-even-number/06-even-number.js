/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
  if(typeof(someNum)!==`number` && !Number.isInteger(someNum)){
      return false
  }
  return Number.isInteger(someNum/2)
}

console.log(isEven(2))
console.log(isEven(-2))
console.log(isEven(2.5))
console.log(isEven(3))
console.log(isEven(-1))
console.log(isEven(null))