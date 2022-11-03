function BubalSort(arr)
{
    for(let i=0;i<k;i++)
    {
        for(let j=1;j<=arr.length-1-i;j++)
        {
            if(arr[j-1]>arr[j])
            {
                [arr[j-1],arr[j]]=[arr[j],arr[j-1]];
            }
            console.log(arr);
        }
    }
    console.log(` ${k}th largest element in the array is ${arr[arr.length-k]}`);
}
let arr=[5,4,3,2,1];
let k=1;
BubalSort(arr,k);