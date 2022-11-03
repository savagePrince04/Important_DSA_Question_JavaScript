// let n=5;
// let pattern="";
// for(let row=0;row<n;row++)
// {
//     for(let space=0;space<n-row;space++)
//     {
//         pattern=pattern+" ";
//     }
//     for(let star=1;star<=2*row-1;star++)
//     {
//         pattern=pattern+"*";
//     }
//     pattern=pattern+"\n"
// }
// console.log(pattern);
// let n=5;
// let pattern="";
// let res="";
// for(let row=n;row>=0;row--)
// {
//     for(let space=0;space<n-row;space++)
//     {
//         pattern=pattern+" ";
//     }
//     for(let star=1;star<=2*row-1;star++)
//     {
//         pattern=pattern+star;
//     }
//     pattern=pattern+"\n"
// }
// for(let row=2;row<=n;row++)
// {
//     for(let space=0;space<n-row;space++)
//     {
//         res=res+" ";
//     }
//     for(let star=1;star<=2*row-1;star++)
//     {
//         res=res+star;
//     }
//     res=res+"\n"
// }
// pattern=pattern+res;
// console.log(pattern);
function rec( num){
return (num) ? num%10 + rec(parseInt(num/10)):0;
}
console.log(rec(4567));

