function triplet(arr,target)
{
    arr.sort((a,b)=>a-b)
    for(let i=0;i<arr.length;i++)
    {
        let l=i+1;
        let r=arr.length-1;
        while(l<r)
        {
            if(arr[i]+arr[l]+arr[r]==target)
            {
                console.log(arr[i],arr[l],arr[r])
                l++;
            }
            else if(arr[i]+arr[l]+arr[r]<target)
            {
                l++;
            }
            else
            {
                r--;
            }
        }
    }

}
let arr=[1,2,5,6,7,8,3,4]
triplet(arr,10)