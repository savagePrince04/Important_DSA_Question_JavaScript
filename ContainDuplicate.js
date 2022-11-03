// function Duplicate(arr)
// {
//   for(let i=0;i<arr.length;i++)
//   {
//     for(let j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]==arr[j])
//         {
//             return true;
//         }
//     }
//   }
//   return false;
// }
// let arr=[1,2,3,1];
// console.log(Duplicate(arr));
// function BinaryAllString(str,n)
// {
// if(str.length==n)
// {
//     console.log(str);
//     return;
// }
// else if(str[str.length-1]==1)
// {
//     BinaryAllString(str+"0",n);
// }
// else
// {
//     BinaryAllString(str+"0",n);
//     BinaryAllString(str+"1",n);
// }
// }
// function Binary(n)
// {
//     let str="";
//     str=str+"0";
//     BinaryAllString(str,n);
//     str=1;
//     BinaryAllString(str+"0",n);
// }
// let n=3;
// Binary(n);