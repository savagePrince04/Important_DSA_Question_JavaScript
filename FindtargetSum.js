
// function sum(arr)
// {
//     let result=[];
//     for(let i=0;i<arr.length;i++)
//     {
//         for(let j=i;j<arr.length;j++)
//         {
//             if(arr[i]+arr[j]==10)
//             {
//                 result.push({[arr[i]]:arr[j]})
//             }
//         }
//     }
//     return result;
// }
// let arr=[2,3,4,5,6,7,8];
// let target=10;
// console.log(sum(arr,target));
let arr = [2,3,4,5,6,7,8];

function calculate(arr,sum)
{
    let result = [], return_result = [];
    for(let i = 0; i < arr.length; i++){
        if(result[arr[i]])
        {
            return_result.push({[result[arr[i]]]: arr[i]})
        }
        else
        {
            result[sum-arr[i]] = arr[i];
        }
    }
    return return_result;
}

console.log(calculate(arr,10));
