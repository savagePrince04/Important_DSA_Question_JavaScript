function matrix(one,two)
{
  let r1=one.length;
  let c1=one[0].length;
  let r2=two.length;
  let c2=two[0].length;
  let arr=[...Array(r1)].map(ele=>Array(c2))
  for(let i=0;i<arr.length;i++)
  {
    for(let j=0;j<arr[0].length;j++)
    {
      let sum=0;
      for(let k=0;k<=arr[0].length;k++)
      {
        sum=sum+one[i][k]*two[k][j];
      }
      arr[i][j]=sum;
    }
  }
  console.log(arr);
}
let one = [
    [1,2,3],
    [4,5,6]
  ]
  let two=[
     [1,2],
     [3,4],
     [5,6]
]
matrix(one,two);