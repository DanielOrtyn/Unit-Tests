/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    for(let i = 0; i<numArray.length; i++){
        let maxElement = numArray.length-i-1;
        for(let j = 0; j<maxElement; j++){
            if(numArray[j]>numArray[j+1]){
                let temp = numArray[j+1]
                numArray[j+1] = numArray[j]
                numArray[j] = temp
            }
        }
    }
}


// Basic Test
let testArray = [7,8,5,6,3,9,0,4,2,1]

console.log(testArray)
bubbleSort(testArray)
console.log(testArray)