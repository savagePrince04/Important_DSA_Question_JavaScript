let n=7;
let k=Math.ceil(n/2);
let pattern="";
for(let row=1;row<=k;row++)
{
    for(let star=1;star<=row;star++)
    {
        pattern=pattern+"*"+" ";
    }
    pattern=pattern+"\n";
}
//console.log(pattern);
    for(row=k-1;row>0;row--)
    {
    for(let star=1;star<=row;star++)
    {
        pattern=pattern+"*"+" ";
    }
    pattern=pattern+"\n";
    }
    console.log(pattern);