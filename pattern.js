let row=5;
let pattern="";
for(let i=0;i<row;i++)
{
    for(let j=0;j<=i;j++)
    {
        pattern=pattern+"*";
    }
    console.log(pattern);
    pattern="";
 }
// let n=5;
// let pattern="";
// for(let row=0;row<n;row++)
// {
//     for(let col=0;col<=row;col++)
//     {
//         pattern=pattern+"*";
//     }
//     console.log(pattern);
//     pattern="";
// }
