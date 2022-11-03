let n=5;
let x=9;
var pattern="";
for(let row=1;row<=n;row++)
{
    for(let space=1;space<=row-1;space++)
    {
        pattern=pattern+" ";
    }
    for(let star=1;star<=x;star++)
    {
        pattern=pattern+"*";
    }
     x=x-2;
    pattern=pattern+"\n";
}
console.log(pattern);