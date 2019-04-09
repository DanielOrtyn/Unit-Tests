/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
export function reverseStr(someStr) {
    if(typeof(someStr)!==`string`)
        return undefined

    let stringArray = new Array(someStr.length)
    for(let character of someStr){
        stringArray.push(character)
    }
    return stringArray.reverse().join("")
}

