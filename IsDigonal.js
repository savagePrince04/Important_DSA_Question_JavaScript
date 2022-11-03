function IsDigonal(arr)
{
  for(let i=0;i<arr.length;i++)
  {
    for(let j=0;j<arr[0].length;j++)
    {
        if(i!=j && arr[i][j]!=0)
        {
           return false;
        }
    }
  }
  return true;
}
let mat=[[1,0,0,0],
         [0,2,0,0],
         [0,0,0,0],
         [0,0,0,0]
        ];
        console.log(IsDigonal(mat));