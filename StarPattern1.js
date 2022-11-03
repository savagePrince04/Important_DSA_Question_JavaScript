let n=5;
let pattern="";
for(let row=0;row<n;row++)
{
    for(let space=0;space<n-row;space++)
    {
        pattern=pattern+" ";
    }
    for(let star=1;star<=2*row-1;star++)
    {
        pattern=pattern+"*";
    }
    pattern=pattern+"\n"
}
console.log(pattern);
