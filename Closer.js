// function greet(name)
// {
//     function display()
//     {
//         console.log(`hi ${name}`)
//     }
//     return display
// }
// let g1=greet("Sudhakar");
// console.log(g1);
// g1();
// function grandParent()
// {
//     let gp=100;
//     function parent()
//     {
//         let p=101;
//         function child()
//         {
//             let c=102;
//             console.log(gp,p,c);
//         }
//         child();
//     } 
//       parent();
// }
// grandParent();
function DisappearElement(nums)
{
    let l=nums.length+1;
    let p=[];
    
    let arr=new Array(l).fill(0);
    for(let i=0;i<nums.length;i++)
        {
            arr[nums[i]]++;
        }
    for(let i=1;i<=arr.length;i++)
        {
            if(arr[i]==0)
                {
                    p.push(i);
                }
        }
    return p;
}
let nums=[4,3,2,7,8,2,3,1];
console.log(DisappearElement(nums));