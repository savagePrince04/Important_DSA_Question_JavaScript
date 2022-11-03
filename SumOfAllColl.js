function SumOfCol(arr)
{
    let col_sum=[];
    for(let col=0;col<arr[0].length;col++)
    {
        let sum=0;
        for(let row=0;row<arr.length;row++)
        {
           sum=sum+arr[row][col];
        }
        col_sum.push(sum);
    }
    console.log(col_sum)
}
let mat = [[1,2,3],
           [2,3,4],
           [5,6,7],
           [9,4,8]
        ]
        SumOfCol(mat);