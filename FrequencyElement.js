let arr=[1,1,1,2,3,6,6,7,9];
let max=arr[0];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>=max)
    {
        max=arr[i];
    }
}
let p=new Array(max+1).fill(0);
//console.log(p);
for(let i=0;i<arr.length;i++)
{
    p[arr[i]]++;

}
console.log("frequency of element in the array");
for(let i=0;i<p.length;i++)
{
    console.log(`  ${i} = ${p[i]}`);
}