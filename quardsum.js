function quard(nums,target)
{
    nums.sort((a,b)=>(a-b))
    let res=[];
    for(let i=0;i<nums.length;i++)
        {
        for(let j=i+1;j<nums.length;j++)
            {
                let start=nums[j+1];
                let end=nums.length-1;
                while(start<end)
                    {
                      if(nums[i]+nums[j]+nums[start]+nums[end]==target)
                          {
                             res.push(nums[i]); 
                              res.push(nums[j]);
                              res.push(nums[start]);
                              res.push(nums[end])
                              return res;
                          }
                        start++;
                        end--;
                    }
            }
    }
    return false;
}
let nums=[-1,-2,0,0,1,2];
let target=0;
 console.log(quard(nums,target));