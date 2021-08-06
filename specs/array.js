// sorting array
let array = [1,6,10,9,8,2,4];


 for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
        if (array[i] < array[j]) {
            let x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
    }
}
console.log(array);

//REVERSE array
let array2 = [1,6,10,9,8,2,4];

function reverseArray(param) {
  var newArray = [];
  for (var i = array2.length - 1; i >= 0; i--) {
    newArray.push(param[i]);
  }
  return newArray;
}
console.log(reverseArray(array2))