function mejority(arr)
{
   let n=arr.length;
   let max=arr[0];
   for(let i=1;i<n;i++)
   {
    if(arr[i]>=max)
    {
        max=arr[i];
    }
   }
   console.log(max)
}
let arr=[3,1,3,3,5,2];
mejority(arr);
