/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    if(n===0)
        return 0
    if(n===1)
        return 1
    return fibAdder(n-1,0,1)
}

function fibAdder(n, firstNumber, secondNumber) {
    if(n===0) {
        return secondNumber
    }
    return fibAdder(n-1, secondNumber, firstNumber + secondNumber)
}



// basic test
for(let i = 0; i<10; i++){
    console.log(fib(i))
}