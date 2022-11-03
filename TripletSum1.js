function TripletSum(arr,target)
{
   for(let i=0;i<arr.length-2  ;i++)
   {
    let j=i+1;
    for(let k=j+1;k<arr.length;k++)
    {
        if(arr[i]+arr[j]+arr[k]==target)
        {
            console.log(`${arr[i]} ${arr[j]} ${arr[k]} `)
        }
    }
   }
}
let arr=[1,-1,2,0,3,1,-2];
TripletSum(arr,0);