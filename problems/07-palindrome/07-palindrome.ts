/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
export function isPalindrome(someStr) {
    if(typeof(someStr)!==`string`)
        return false
  
    for(let i = 0; i<someStr.length; i++){
        if(someStr[i] !== someStr[someStr.length-i-1]){
            return false
        }
    }
    return true
}
