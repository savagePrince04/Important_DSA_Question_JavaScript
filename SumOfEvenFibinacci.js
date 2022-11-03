function SumOffeb(n)
{
if(n<=1)
return n;
else
{
    return SumOffeb(n-1)+SumOffeb(n-2);
}
}
let output="";
let n=10;
let sum=0;
for(let i=0;i<=n;i++)
{
  if(SumOffeb(i)%2==0)
  {
    console.log(SumOffeb(i));
    sum=sum+SumOffeb(i);
  }
  output =` ${output}  ${SumOffeb(i)} `;
}
     console.log(output);
     console.log(sum);