let n=5;
let pattern="";
for(let row=1;row<=n;row++)
{
    for(let space=1;space<=n-row;space++)
    {
        pattern=pattern+" "
    }
    for(let number=1;number<=row;number++)
    {
        pattern=pattern+number;
    }
    for(number=row;number>1;number--)
    {
        pattern=pattern+(number-1);
    }
    pattern=pattern+"\n";
    
}
console.log(pattern);