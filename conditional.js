// let tempt=0;
// let isRaining=true;
// if((tempt>=20 && tempt<=25) && !isRaining)
// {
//     console.log("Go out in the park")
// }
// else if((tempt>=18 && tempt<=20) && isRaining)
// {
//     console.log("in play school")
// }
// else
// {
//     console.log("should not step out of the home")
// }
// let marks=40;
// Result=(marks>=40?'pass':'fail')
// console.log(`you ${Result} the exam`);
// let number=50;
// switch(true)
// {
//     case (number>0):
//         console.log("positive");
//         break;
//         case (number<0):
//             console.log("negative");
//             break;
//             case (number==0):
//                 console.log("zero");
//                 break;
//                 default:
//                     console.log("invalid number");
         
// }
// to find the hcf between two number
// let no1=10;
// let no2=16;
// let result=0;
// for(let i=1;i<=(no1<=no2?no1:no2);i++)
// {
// if(no1%i==0 && no2%i==0)
// {
//    result= i;
// }
// }
// console.log(result);
// to find the lcm between two number
//  let no1=20;
//  let no2=12;
//  let result=0;
//  for(let i=(no1>=no2?no1:no2);i<=no1*no2;i++)
//  {
//      if(i%no1==0 && i%no2==0)
//     {
//          result=i;
//          break;
//     }
//  }
//  console.log(`LCM of two number ${no1} and ${no2} is ${result}`);
    
            //create a program to reverse a string
            // let str="test";
            // let result="";
            // function reverse(str)
            // {
            //     for(let i=str.length-1;i>=0;i--)
            //     {
            //         result=result+str[i];
            //     }
            //     return result;
            // }
            // let output=reverse(str);
            // console.log(output);
        //write a program to find the largest number
        // let a=100;
        // let b=200;
        // let c=30;
        // if(a>=b && a>=c)
        // {
        //     console.log(`${a} is largest number`)
        // }
        // else if(b>=a && b>=c)
        // {
        //     console.log(`${b} is largest number`)
        // }
        // else
        // console.log(`${c} is largest number`);

        // sum of all digit
    //     function generateSumOfDigit(number)
    //     {
    //     let sum =0;
    //     while(number>0)
    //     {
    //         let rem=number%10;
    //         sum=sum+rem;
    //         number=parseInt(number/10);
    //     }
    //         return sum;
    // }
    // let number=1958;
    // console.log(generateSumOfDigit(number));
    let n=1235;
    n=String(n);
    let result="";
    for(let i=n.length-1;i>=0;i--)
    {
        result=result+n[i];
    }
    console.log(result);