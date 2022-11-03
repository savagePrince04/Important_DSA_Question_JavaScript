function BubalSort(arr)
{
  for(let i=0;i<arr.length-1;i++)
  {
    for(let j=0;j<arr.length-1-i;j++)
    {
        if(arr[j+1]<arr[j])
        {
            let temp=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=temp;
        }
    }
  }
    let largest=(arr.length)-k;
if(k>arr.length)
{
    console.log("invalid input");
}
  else 
  console.log(arr[largest]);
  return arr;
}
let k=5;
let arr=[5,6,0,2,8];
console.log(BubalSort(arr),k);