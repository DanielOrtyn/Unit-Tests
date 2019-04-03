/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    for(let i = 0; i<someStr.length; i++){
        if(!(someStr[i] === someStr[someStr.length-i-1])){
            return false
        }
    }
    return true
}

// basic test
console.log(isPalindrome(`test`))
console.log(isPalindrome(`kayak`))