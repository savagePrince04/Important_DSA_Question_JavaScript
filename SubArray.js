function SubArray(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i;j<=arr.length;j++)
        {
            for(let k=i;k<j;k++)
            {
                console.log(arr[k]);
            }
            console.log("\n");
        }
    }
}
let arr=[1,2,3,4]
SubArray(arr);