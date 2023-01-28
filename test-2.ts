function isMonotonic(arr: number[]): boolean {
    let isIncreasing = true;
    let isDecreasing = true;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        isIncreasing = false;
      }
      if (arr[i] > arr[i - 1]) {
        isDecreasing = false;
      }
      if (!isIncreasing && !isDecreasing) {
        return false;
      }
    }
  
    return true;
}
  

const arr = [6, 4, 7, 2, 1]
console.log(isMonotonic(arr));