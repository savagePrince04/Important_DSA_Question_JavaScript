function max(arr)
{
    let max_count=0;
    let count=0;
 for(let i=1;i<arr.length;i++)
 {
    if(arr[i]==1)
    {
        count++;
    }
    else{
        max_count=Math.max(max_count,count);
        count=0;
    }
 }
 return Math.max(max_count,count);
}
let arr=[1,1,0,1,1,1,0,0,1,1,1,1,1,1,1]
console.log(max(arr));