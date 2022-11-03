let n=5;
pattern="";
for(let row=0;row<n;row++)
{
    for(col=0;col<n;col++)
    {
        pattern=pattern+"*";
    }
    console.log(pattern);
    pattern="";
}