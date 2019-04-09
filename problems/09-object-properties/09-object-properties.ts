/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for(let key in someObj){
        console.log(`property: ${key}, value: ${someObj[key]}`)
    }
}



// Basic Test
let obj = {
    name: `AwsomeObject`,
    number: 123456,
    undefinedProp: undefined
}

objectProperties(obj)