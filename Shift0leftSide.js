function Shift0leftside(arr)
{
  let n=arr.length;
  let r=0;
  let l=n-1;
  while(r<=l)
  {
    if(arr[r]==0)
    {
        r++;
    }
     if(arr[l]==1)
    {
        l--;
    }
     if(arr[r]==1 && arr[l]==0)
    {
        let temp=arr[r];
        arr[r]=arr[l];
        arr[l]=temp;
        r++;
        l--;
    }
  }
  return arr;
}
console.log(Shift0leftside([0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0]));