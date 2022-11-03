function wavematrix(arr)
{
    for(let col=0;col<arr[0].length;col++)
    {
        if(col%2==0)
        for(let row=0;row<arr.length;row++)
        {
            console.log(arr[row][col]);
        }
        else{
            for(row=arr.length-1;row>=0;row--)
            {
                console.log(arr[row][col]);
            }
        }
    }
}
let arr=[
    [1,2,3,4],
    [4,5,6,7],
    [7,8,9,10],
]
wavematrix(arr);