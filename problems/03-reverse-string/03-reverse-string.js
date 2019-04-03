/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let stringArray = new Array(someStr.length)
    for(let character of someStr){
        stringArray.push(character)
    }
    return stringArray.reverse().join("")
}


// basic test
let testString = `123456`
console.log(testString)
console.log(reverseStr(testString))