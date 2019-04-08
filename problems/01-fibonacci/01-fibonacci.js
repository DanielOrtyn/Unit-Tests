/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    if(typeof(n)!==`number`)
        return 0
    if(n===0)
        return 0
    if(n===1)
        return 1
    return fibAdder(n-1,0,1)
}

function fibAdder(n, firstNumber, secondNumber) {
    if(typeof(n)!==`number`||typeof(firstNumber)!==`number`||typeof(secondNumber)!==`number`)
        return 0
    if(n===0) {
        return secondNumber
    }
    return fibAdder(n-1, secondNumber, firstNumber + secondNumber)
}



// basic test
for(let i = 0; i<10; i++){
    console.log(fib(i))
}