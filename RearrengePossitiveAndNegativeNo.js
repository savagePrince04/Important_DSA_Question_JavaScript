/*
    For every elem check it with pivot
    elem < pivot => i++, swap arr[i] & arr[j] , j++
    elem > pivot => j++
*/
function ShiftNegativeToLeft(arr)
{
  for(let j=0;j<arr.length;j++)
  {
    if(arr[j]<pivote)
    {
        i++;
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
  }
  return arr;
}
let arr = [3,-2,5,-4,-1,6];
let pivote=0;
let i=-1;
console.log(ShiftNegativeToLeft(arr));