function SumOfColumn(arr)
{
    let col_min=0;
    let ouptut=[]
    while(col_min<arr[0].length)
    {
        let sum=0;
        for(let row=0;row<arr.length;row++)
    {
        sum=sum+arr[row][col_min];
    }
    col_min++;
    ouptut.push(sum);
    }
    return ouptut;
}
let mat = [
    [1,2,3],
    [2,3,4],
    [5,6,7],
    [9,4,8]
]
console.log(SumOfColumn(mat));