// let obj={
//     name:"sudhakar",
//     age:21,
//     address:{
//         state:"Bihar",
//         district:"Sheikhpura",
//     },
//     department:"cse",  
// }
// for(var key in obj)
// console.log(obj[key]);
// let arr=[1,2,3,45,65]
// for(eliment in arr)
// {
//   console.log(arr[eliment])
// }
// var obj1 = {
//     "name": "a",
//     "age": 24,
//     "isStudent": true
// }

// var obj2 = {
//     "name":"abc",
//     "age": 2,
//     "isStudent": true
// }

// function isSame(obj1, obj2){
//     var isValid = false;
//     for(item in obj1){
//         if(obj1[item]==obj2[item]){
//             isValid = true;
//         }
//         else{
//             isValid = false;
//         }
//     }
//     return isValid;
// }

// console.log(isSame(obj1,obj2));
// arr = [3,31,5,6]
// function maxmin(arr)
// {
//     let max=arr[0];
//     let min=arr[0];
//     for(let i=0;i<=arr.length;i++)
//     {
//         if(arr[i]>=max)
//         {
//             max=arr[i];
//         }
//         if(min>=arr[i])
//         {
//             min=arr[i];
//         }
//     }
//     return ` max=${max} \n min=${min}`
// }
// console.log(maxmin(arr));
// let sudhakar=[
//     {
//         id:111,
//         name:"shivam",
//         year:7,
//     },
//     {
//         id:102,
//         name:"hariom",
//         year:13,
//     },
//     {
//         id:123,
//         name:"Nishant",
//         year:23,
//     },
//     {
//         id:119,
//         name:"b",
//         year:22,
//     },
// ]
// let output=sudhakar.reduce(function(sum,com){
//     return sum+com.year
// },0);
// console.log(output);
 var JS_Obj = 
'{"prop_1":"val_1", "prop_2":"val_2", "prop_3" : "val_3"}';
let Obj=JSON.parse(JS_Obj)
console.log(Obj);
for(var key in JS_Obj )
{
  console.log(Obj[key])
}

