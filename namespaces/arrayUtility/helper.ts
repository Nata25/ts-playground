namespace ArrayUtilities {
  export function helper(array: Array<number>): string {
    return array.toString().split(',').join(' ');
  }
}