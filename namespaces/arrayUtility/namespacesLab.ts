/// <reference path="helper.ts" />

namespace ArrayUtilities {
  export function reverseArray(array: Array<number>): Array<number> {
    return array.slice(0).reverse();
  }

  export function lastItemOfArray(array: Array<number>): number {
    return array.slice(0).pop();
  }

  export function firstItemOfArray(array: Array<number>): number {
    return array.slice(0).shift();
  }

  export function concatenateArrays(
    array1: Array<number>, 
    array2: Array<number>): Array<number> {
    return array1.concat(array2);
  }
}