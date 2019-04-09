/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
export function isEven(someNum: number) {
  if (Math.floor(someNum / 2) === Math.ceil(someNum / 2)) {
    return true
  }
  return false
}
