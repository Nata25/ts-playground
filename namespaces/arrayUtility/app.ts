const array1: Array<number> = [1, 2, 3, 4, 5];
const array2: Array<number> = [6, 7, 8, 9, 10];

function callArrayUtil(util, array, array2 = []) {
  document.getElementById('output').innerHTML = ArrayUtilities.helper(ArrayUtilities[util](array, array2)).toString();  
}

document.getElementById('input').innerHTML = ArrayUtilities.helper(array1).toString();
document.getElementById('output').innerHTML = ArrayUtilities.helper(array1).toString();