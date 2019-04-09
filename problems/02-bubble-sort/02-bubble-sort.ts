/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
export function bubbleSort(numArray) {
    if(!Array.isArray(numArray)){
        return
    }
    for(let i = 0; i<numArray.length-1; i++){
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

