function ShiftNegativeveNumberToLeft(arr)
{
  let r=0;
  let l=arr.length-1;
  while(r<=l)
  {
    if(arr[r]<0)
    {
        r++;
    }
    if(arr[l]>0)
    {
        l--;
    }
    else if(arr[r]>=0 && arr[l]<0)
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
let arr=[3,-2,5,-4,1,6];
console.log(ShiftNegativeveNumberToLeft(arr));