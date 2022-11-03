var containsDuplicate = function(nums) {
    let max=nums[0];
    let flag=1;
    for(let i=0;i<nums.length;i++)
        {
            if(nums[i]>=max)
                {
                   max=nums[i]; 
                }
        }
      var array=new Array(max).fill(0);
      console.log(array)
    for(let i=0;i<array.length;i++)
        {
            array[nums[i]]++;
            console.log(`${nums[i]} = ${array[nums[i]]}`);
            flag=1;
        }
    if(flag==1)
        {
            return false;
        }
    else
        return true;
    
};
nums = [1,2,3,3,4,5,4]
console.log(containsDuplicate(nums))