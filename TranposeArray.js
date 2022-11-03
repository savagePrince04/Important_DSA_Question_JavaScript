function transpose(matrix)
{
  let r1=matrix.length;
  let c1=matrix[0].length;
  let output=[...Array(c1)].map(ele=>Array(r1))
  for(let row=0;row<matrix.length;row++)
  {
    for(let col=0;col<arr[0].length;col++)
    {
        output[col][row]=matrix[row][col];
    }
  }
  console.log(output);
}
let arr=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
]
transpose(arr);