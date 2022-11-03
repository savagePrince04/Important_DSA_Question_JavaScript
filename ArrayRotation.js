function AarrayRotation(arr,k)
{
    function reverse(arr,low,high)
    {
        while(low<=high)
        {
            [arr[low],arr[high]]=[arr[high],arr[low]]
            low++;
            high--;
        }
        return arr;
    }
    for(let i=0;i<arr.length;i++)
    {
        reverse(arr,n-k,n-1);
        reverse(arr,0,n-k-1);
        reverse(arr,0,n-1);
    }
    return arr;
}
let k=3;
let arr=[1,2,3,4,5,6,7];
let n=arr.length;
    k=k%n;
console.log(AarrayRotation(arr,k))