function printArray(array: Array<number>): string {
  return array.toString().split(',').join(' ');
}

export { printArray }