let output="";
function feb(n)
{
    if(n<=1)
    {
        return n;
    }
      
    {
        return (feb(n-1)+feb(n-2));
    }
}
let n=10;
for(let i=0;i<=n;i++)
{
    output=`${output} ${feb(i)} `;
}
console.log(output);