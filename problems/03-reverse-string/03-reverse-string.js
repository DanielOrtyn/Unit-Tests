/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let reversedString = ``
    let reverseArrayOfString = new Array(someStr.length)
    for(let i = 0; i<someStr.length; i++){
        reverseArrayOfString[someStr.length-i-1] = someStr[i]
    }
    return reverseArrayOfString.join("")
}


// basic test
let testString = `123456`
console.log(testString)
console.log(reverseStr(testString))