
function abcd(arr) {
  if (arr.length == 1) {
    console.log(arr[0]);
    return;
  }
  start = 0;
  j = 0;
  end = arr.length - 1;
  // console.log(end)
  for (start = 0; start <= end; start++) {
    for (i = 0; i <= j; i++) {
      process.stdout.write(arr[i] + " ");
    }
    j++;
    console.log();
  }
  arr.shift()
  abcd(arr)
}
abcd([1,2,3,4,5]);
// arr = [1,2,45,67,87]
// arr.pop()
// console.log(arr)

