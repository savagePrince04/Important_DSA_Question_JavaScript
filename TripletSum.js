function sum(arr,target)
{
    let result="";
    for(let i=0;i<arr.length;i++)
    {
        for(let j=1;j<arr.length;j++)
        {
            for(let k=2;k<arr.length;k++)
            {
                if(arr[i]+arr[j]+arr[k]==8)
                {
                   result=`${arr[i]} ${arr[j]}  ${arr[k]} ` 
                   console.log(result);
                }
            }
        }
    }
}
let arr=[1,2,3,5,6,7,8];
sum(arr,8);