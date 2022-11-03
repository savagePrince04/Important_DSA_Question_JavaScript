// let obj = {};
// let arr = [1,2,3,1];
// for(let ele of arr)
// {
//     if(ele in obj)
//     {
//         obj[ele]++;
//     }
//     else obj[ele] = 1;
// }
// let sum = 0;
// Object.keys(obj).forEach((key) => {
//     if(obj[key] == 1){
//         sum += Number(key);
//     }
// });
// console.log(sum);
let obj = {};
let arr = [1,2,3,1];
for(let ele of arr){
    if(ele in obj){
        obj[ele]++;
    }
    else obj[ele] = 1;
}
//let sum = 0;
// Object.keys(obj).forEach((key) => {
//     if(obj[key] == 1){
//         sum += Number(key);
//     }
// });

// for(let ele of Object.keys(obj)){
//     if(obj[ele] == 1){
//         sum += Number(ele);
//     }
// }
// console.log(sum);
// You7:23 PM
// i did not understand sir please explain again
// for(let ele of arr){
//     if(ele in obj){
//         obj[ele]++
// Aman Sehrawat7:29 PM
// let obj = {};
// let arr = [1,2,3,1];
// for(let ele of arr){
//     if(ele in obj){
//         obj[ele]++;
//     }
//     else obj[ele] = 1;
// }
// let sum = 0;

// for(let key of Object.keys(obj)){
//     console.log(key);
//     console.log(obj[key]);
// }
// // Object.keys(obj).forEach((key) => {
// //     if(obj[key] == 1){
// //         sum += Number(key);
// //     }
// // });

// for(let ele of Object.keys(obj)){
//     if(obj[ele] == 1){
//         sum += Number(ele);
//     }
// }
console.log(sum);
// [1,2,3]
//  1 - 2
//  2 - 1
//  3 - 1