import ArrayUtilities from './arrayUtils.js';
import { printArray } from './helper.js';

const array1: Array<number> = [1, 2, 3, 4, 5];
const array2: Array<number> = [6, 7, 8, 9, 10];

function callArrayUtil(util, array, array2 = []) {
  document.getElementById('output').innerHTML = printArray(ArrayUtilities[util](array, array2));  
}

for (let property in ArrayUtilities) {
  document.getElementById(property).addEventListener('click', function() {
    callArrayUtil(property, array1, array2);
  });
}

document.getElementById('input').innerHTML = printArray(array1);  
document.getElementById('output').innerHTML = printArray(array1);
