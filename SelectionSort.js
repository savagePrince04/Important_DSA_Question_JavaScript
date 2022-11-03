function SelectionSort(arr)
{
 for(let i=0;i<arr.length-1;i++)
 {
    let minindex=i;
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[minindex]>arr[j])
        {
            minindex=j;
        }
    }
    let temp=arr[minindex];
        arr[minindex]=arr[i];
        arr[i]=temp;
        console.log(arr);
 }
 return arr;
}
let arr=[5,4,3,2,1];
console.log(SelectionSort(arr));