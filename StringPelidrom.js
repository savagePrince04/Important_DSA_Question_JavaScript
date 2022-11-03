//  Naive Approach
function IsStringPelindron(str)
{
    let RevStr=[];
    for(let i=str.length-1;i>=0;i--)
    {
        RevStr.push(str.charAt(i));
    }
    console.log(RevStr.join(''))
    return str==RevStr.join("") ? true:false;
}
//********************* Optimise Code *********************************
// function IsStringPelindron(str)
// {
//     if(str.length<=2)
//     {
//         return `invalid String`;
//     }
//   let RevStr=str.split('').reverse().join("");
//   if(RevStr==str)
//   {
//     return true;
//   }
//   else 
//   {
//     return false;
//   }
// }
 let str="abcba";
 console.log(IsStringPelindron(str))
