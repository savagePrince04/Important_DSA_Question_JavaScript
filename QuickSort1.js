function QuickSort(arr,low,high)
{
   if(low>=high)
   {
    return ;
   }
   let pi=partation(arr,low,high);
    QuickSort(arr,pi+1,high);
    QuickSort(arr,low,pi-1);
    return arr;
}
function partation(arr,low,high)
{
    let pivote=arr[high];
    let i=low-1;
    for(let j=low;j<high;j++)
    {
        if(arr[j]<pivote)
        {
            i++;
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
    }
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
    return i+1;
}
let arr=[4, 2, 1, 5, 6, 8];
let n=arr.length-1;
let low=0;
console.log(QuickSort(arr,low,n));