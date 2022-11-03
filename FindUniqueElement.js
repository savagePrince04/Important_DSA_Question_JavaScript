function UniqueElement(arr)
{
    let max=0;
    let flag=0;
    // find maximum number
    for(let row=0;row<arr.length;row++)
    {
        for(let col=0;col<arr[0].length;col++)
        {
            if(arr[row][col]>max)
            {
                max=arr[row][col]
            }
        }
    }
    // crate a array as max size and iterate from 0 to max size
    let newarr=Array(max+1).fill(0);
    for(let row=0;row<arr.length;row++)
    {
        for(let col=0;col<arr[0].length;col++)
        {
            newarr[arr[row][col]]++;
        }
    }
    for(let i=0;i<newarr.length;i++)
    {
        console.log(`${i} = ${newarr[i]}`);
        if(newarr[i]==1)
        {
            console.log(i+" ");
            flag=1;
        }
    }
    if(flag==0)
    {
        console.log(" no any unique values found");
    }
}
let mat=[
    [11,2,2,20],
    [5,16,20,7],
    [1,13,5,16],
    [6,7,18,15]
]

UniqueElement(mat);