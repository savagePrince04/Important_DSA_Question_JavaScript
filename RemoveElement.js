function RemoveElement(arr,val)
{
    let k=0;
for(let i=0;i<arr.length;i++)
{
  if(arr[i]!=val)
  {
    arr[k]=arr[i];
    k++;
  }
}
return k;
}
let nums = [0,1,2,2,3,0,4,2];
let val = 2;
console.log(RemoveElement(nums,val));