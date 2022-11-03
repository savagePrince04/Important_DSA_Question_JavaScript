let n=5;
let pattern="";
for(let row=0;row<n;row++)
{
    for(col=0;col<n;col++)
    {
        if(row==0 || row==n-1 )
        {
            pattern=pattern+"*";
        }
        else if(col==0 || col==n-1)
        {
            pattern=pattern+"*";
        }
        else
        pattern=pattern+" ";
    }
    console.log(pattern);
    pattern="";
}

