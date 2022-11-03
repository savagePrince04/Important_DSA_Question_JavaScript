function FindFrequency(arr)
{
    let max=0;
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i]>=max)
    {
        max=arr[i];
    }
  }
  let p=new Array(max+1).fill(0);
  for(let i=0;i<arr.length;i++)
  {
    p[arr[i]]++;
  }
  for(let i=0;i<p.length;i++)
  {
    console.log(`${i} = ${p[i]}`);
  }
}
let arr=[1,2,2,3,4,5,4,4,4,4,5,1,2,3,3,8,3];
  FindFrequency(arr);