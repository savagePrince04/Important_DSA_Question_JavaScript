function InsertionSort(arr)
{
  for(let i=1;i<arr.length;i++)
  {
    let ele=arr[i];
    let j=i-1;    // sorted resion
    while(j>=0 && ele<arr[j])
    {
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=ele;
  }
  return arr;
}
let arr=[5,4,3,2,1];
console.log(InsertionSort(arr));