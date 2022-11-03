// console.log("enter 1 for +")
// console.log("enter 2 for -")
// console.log("enter 3 for *")
// console.log("enter 4 for /")
// var a=Number(prompt("enter 1st number"));
// var b=Number(prompt("enter 2nd number"));
// var operator=Number(prompt("enter any number"))
// switch(operator)
// {
//     case 1:
//         console.log(a+b)
//         break;
//         case 2:
//             console.log(a-b)
//             break
//             case 3:
//                 console.log(a*b)
//                 break;
//                 case 4:
//                     console.log(a/b)
//         default:
//             console.log("enter valid keyword");
// }
let a=321;
sum=0;
while(a>0)
{
    let rem=a%10;
    a=parseInt(a/10);
    sum=sum+rem;
}
console.log(sum);