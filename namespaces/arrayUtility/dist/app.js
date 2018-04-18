var ArrayUtilities;
(function (ArrayUtilities) {
    function helper(array) {
        return array.toString().split(',').join(' ');
    }
    ArrayUtilities.helper = helper;
})(ArrayUtilities || (ArrayUtilities = {}));
/// <reference path="helper.ts" />
var ArrayUtilities;
(function (ArrayUtilities) {
    function reverseArray(array) {
        return array.slice(0).reverse();
    }
    ArrayUtilities.reverseArray = reverseArray;
    function lastItemOfArray(array) {
        return array.slice(0).pop();
    }
    ArrayUtilities.lastItemOfArray = lastItemOfArray;
    function firstItemOfArray(array) {
        return array.slice(0).shift();
    }
    ArrayUtilities.firstItemOfArray = firstItemOfArray;
    function concatenateArrays(array1, array2) {
        return array1.concat(array2);
    }
    ArrayUtilities.concatenateArrays = concatenateArrays;
})(ArrayUtilities || (ArrayUtilities = {}));
var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9, 10];
function callArrayUtil(util, array, array2) {
    if (array2 === void 0) { array2 = []; }
    document.getElementById('output').innerHTML = ArrayUtilities.helper(ArrayUtilities[util](array, array2)).toString();
}
document.getElementById('output').innerHTML = ArrayUtilities.helper(array1).toString();
