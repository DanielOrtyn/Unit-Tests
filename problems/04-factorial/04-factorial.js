/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    if(sumNum<=1)
        return 1
    return sumNum*factorial(sumNum-1)
}



// Basic Test
for(let i = 1; i<7; i++){
    console.log(factorial(i))
}