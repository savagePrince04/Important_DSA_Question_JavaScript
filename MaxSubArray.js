function karden(arr)
{
    let Max_Sum=-Infinity;
    for(let i=i;i<arr.length;i++)
    {
        let sum=0;
        for(let j=0;j<arr.length;j++)
        {
            sum=sum+arr[j];
        }
        if(sum>=Max_Sum)
        {
            Max_Sum=sum;
        }
    }
    return Max_Sum;
}
let arr=[-5,4,6,-3,4,-1];
console.log(karden(arr));