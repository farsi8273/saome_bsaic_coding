function arrayIntersection(arr1, arr2) {
  const uniqueSet = new Set(arr1);

  const commonElements = [];

  for (const element of arr2) {
    if (uniqueSet.has(element)) {
      commonElements.push(element);
      uniqueSet.delete(element);
    }
  }

  return commonElements;
}
arr1 = [1, 3, 4, 5, 6, 4];
arr2 = [6, 8, 9, 5, 6, 4];
console.log(arrayIntersection(arr1, arr2));
