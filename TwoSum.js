function TwoSum(arr,target)
{
    let res=[];
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]+arr[j]==target)
        {
            res.push(i);
            res.push(j);
            return res;
        }
    }
}
}
let arr=[3,2,4];
console.log(TwoSum(arr,6));