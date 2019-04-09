/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
export function factorial(sumNum) {
    if(typeof(sumNum)!==`number`)
        return 1

    if(sumNum<=1)
        return 1
    return sumNum*factorial(sumNum-1)
}


