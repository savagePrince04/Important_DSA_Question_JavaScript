function FindKthSmallestElement(arr,low,high,k)
{
  // if(low>=high)
  // {
  //   return ;
  // }
  let pi=partating(arr,low,high);
  if(pi==k-1)
  {
    return arr[pi];
  }
  else if(pi<k-1)
  {
     return FindKthSmallestElement(arr,pi+1,high,k); 
  }
  else
  {
      return FindKthSmallestElement(arr,low,pi-1,k);
  }
}
function partating(arr,low,high)
{
  let pivote=arr[high];
  let i=low-1;
  for(let j=low;j<arr.length;j++)
  {
    if(arr[j]<pivote)
    {
      i++;
      [arr[i],arr[j]]=[arr[j],arr[i]];
    }
  }
  [arr[i+1],arr[high]]=[arr[high],arr[i+1]]; // pivote and high point the same value so we can write pivote or high as for your choise
  return i+1;
}
let arr=[1,3,2,4,8,5];
let high=arr.length-1;
console.log(FindKthSmallestElement(arr,0,high,1));