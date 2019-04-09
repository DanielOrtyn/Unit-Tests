/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  switch (shape) {
    case `Square`:
      drawSquare(height, character)
      break
    case `Triangle`:
      drawTriangle(height, character)
    break
    case `Diamond`:
      drawDiamond(height, character)
    break;
  
    default:
      break;
  }
}

function drawSquare(height, character){
  for(let i = 0; i<height; i++){
    console.log(stringMultiple(height,character))
  }
}

function drawTriangle(height, character){
  for(let i = 1; i<=height; i++){
    console.log(stringMultiple(i, character))
  }
}

function drawDiamond(height, character){
  let halfHeight = Math.floor(height/2)
  for(let i = 0; i<halfHeight; i++){
    let preSpaces = halfHeight-i
    console.log(`${stringMultiple(preSpaces, ` `)}${stringMultiple(1+2*i, character)}`)
  }
  console.log(stringMultiple(height, character))
  for(let i = halfHeight-1; i>=0; i--){
    let preSpaces = halfHeight-i
    console.log(`${stringMultiple(preSpaces, ` `)}${stringMultiple(1+2*i, character)}`)
  }
}

function stringMultiple(number, character){
  let multipleArray = new Array()
  for(let i = 0; i<number; i++) {
    multipleArray.push(character)
  }
  return multipleArray.join(``)
}


// Basic Tests
printShape("Square", 5, "%")
console.log()
printShape("Triangle", 5, "$")
console.log()
printShape("Diamond", 7, "*")
