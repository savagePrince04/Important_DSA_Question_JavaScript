function Sprial(arr)
{
    let row_min=0;
    let row_max=arr.length-1;
    let col_min=0;
    let col_max=arr[0].length-1;
    let noe=arr.length *arr[0].length;
    let count=0;
    while(count<noe)
    {
        for(let row=row_min;row<=row_max;row++)
        {
            console.log(arr[row][col_min])
            count++;
        }
        col_min++;
        for(let col=col_min;col<=col_max;col++)
        {
            console.log(arr[row_max][col])
            count++;
        }
        row_max--;
        for(let row=row_max;row>=row_min;row--)
        {
         console.log(arr[row][col_max])
         count++;
        }
        col_max--;
        for(let col=col_max;col>=col_min;col--)
        {
            console.log(arr[row_min][col]);
            count++;
        }
        row_min++;
    }
}
let arr=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
]
Sprial(arr);