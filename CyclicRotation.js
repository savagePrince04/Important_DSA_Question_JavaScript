function CyclicRotation(arr)
{
  let n=arr.length;
 let temp=arr[n-1];
 for(let i=n-1;i>=1;i--)
 {
    arr[i]=arr[i-1];
 }
 arr[0]=temp;
 return arr;
}
let arr=[1,2,7,3,4,5];
console.log(CyclicRotation(arr));