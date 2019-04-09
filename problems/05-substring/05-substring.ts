/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
export function substring(someStr, startIndex, endIndex) {
    if(typeof(someStr)!==`string`){
        throw `First argument is \"${typeof(someStr)}\" not a string`
    }
    if(typeof(startIndex)!==`number`){
        throw `StartIndex argument is \"${typeof(startIndex)}\" not a number`
    }
    if(typeof(endIndex)!==`number`){
        throw `EndIndex argument is \"${typeof(endIndex)}\" not a number`
    }
    if(startIndex<0){
        throw `StartIndex is less then 0`
    }
    if(startIndex>=someStr.length || endIndex>someStr.length ){
        throw `An index was out of bounds`
    }
    if(startIndex>endIndex ){
        throw `Indexes were out of order`
    }

    let subStringArray = new Array(endIndex-startIndex)
    for(let i = 0; i<endIndex-startIndex; i++){
        subStringArray[i+startIndex] = someStr[startIndex+i]
    }
    return subStringArray.join(``)
}
