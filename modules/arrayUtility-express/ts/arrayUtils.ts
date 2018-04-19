import * as _ from 'lodash';

class ArrayUtilities {
  reverseArray(array: Array<number>): Array<number> {
    return _.reverse(array);
  }

  lastItemOfArray(array: Array<number>): number {
    return _.last(array);
  }

  firstItemOfArray(array: Array<number>): number {
    return _.head(array);
  }

  concatenateArrays(
    array1: Array<number>, 
    array2: Array<number>): Array<number> {
    return _.concat(array1, array2);
  }
}

export default new ArrayUtilities;