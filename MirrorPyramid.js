let output="";
let n=7;
for(let i=n;i>0;i--)
{
    for(let space=1;space<=n-i;space++)
    {
        output=output+" ";
    }
    for(let star=1;star<=2*i-1;star++)
    {
        output=output+"*";
    }
    output=output+"\n";
}
let res="";
for(let i=1;i<n;i++)
{
    for(let space=1;space<=(n-1)-i;space++)
    {
        res=res+" ";
    }
    for(let star=1;star<=2*i+1;star++)
    {
        res=res+"*";
    }
    res=res+"\n";
}
output=output+res;
console.log(output);