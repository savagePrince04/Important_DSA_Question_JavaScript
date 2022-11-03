function SumOfmatrix(arr)
{
    let SumOfLowerTrangle=0;
    let SumOfUpertrangle=0;
    for(let row=0;row<arr.length;row++)
    {
        for(let col=0;col<arr[0].length;col++)
        {
            if(col<=row)
            {
                SumOfLowerTrangle=SumOfLowerTrangle+arr[row][col];
            }
            if(row<=col)
            {
                SumOfUpertrangle=SumOfUpertrangle+arr[row][col]; 
            }
        }
    }
    return `Sum of Lower trangle is = ${SumOfLowerTrangle} \n Sum of Uper trangle is = ${SumOfUpertrangle}`
}
let mat=[
        [1,2,3],
        [4,5,6],
        [7,8,9]
        ]
        console.log(SumOfmatrix(mat));