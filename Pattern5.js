// let n=5;
// let pattern="";
// for(let row=1;row<=n;row++)
// {
//     for(let col=1;col<=row;col++)
//     {
//         if(row==1 || row==2 || row==n)
//         {
//             pattern=pattern+"*"
//         }
//         else if(col==1 || col==row)
//         {
//             pattern=pattern+"*"
//         }
//         else
//         pattern=pattern+" ";
//     }
//     console.log(pattern);
//     pattern="";
// }
let n=3;
let pattern="";
for(let row=1;row<=n;row++)
{
    for(let col=1;col<=n;col++)
    {
        if(row==1 || row==n)
        {
            pattern=pattern+"*"
        }
        else if(col==1 || col==n)
        {
            pattern=pattern+"*"
        }
        else
        pattern=pattern+" ";
    }
    console.log(pattern);
    pattern="";
}