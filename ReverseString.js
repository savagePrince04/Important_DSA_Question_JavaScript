// function reverse(str)
// {
//     let output="";
//     for(let i=str.length-1;i>=0;i--)
//     {
//      output=output+str.charAt(i);
//     }
//     console.log(output);
// }
// let str="ABCDEF";
// reverse(str);
function reverse(str,i)
{
    let output="";
    if(i==n)
    {
        return str.charAt(i);
    }
    let res=reverse(str,i+1);
    console.log(str.charAt(i));
    return res;
}
let str="ABCDEF";
let n=str.length-1;
reverse(str,0);