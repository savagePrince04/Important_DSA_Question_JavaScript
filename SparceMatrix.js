function IssparceMatrix(arr)
{
    let n=arr.length;
    let m=arr[0].length;
    let TotalElement=m*n;
    console.log(TotalElement);
   for (let i=0;i<n;i++)
   {
    for(let j=0;j<m;j++)
    {
        if(arr[i][j]==0)
        {
            count++;
        }
    }
   }
   if(count>=parseInt(TotalElement/2));
   {
    return true;
   }
   return false;
}
let count=0;
let arr= [ [0,1,0],
           [5,0,8],
           [1,0,1],
          ]         
console.log(IssparceMatrix(arr));