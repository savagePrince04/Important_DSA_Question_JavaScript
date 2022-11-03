// const numbers = [1,2,3,4,5]

// console.log(numbers.slice()) // -> it copies all  item
// console.log(numbers.slice(0)) // -> it copies all  item
// console.log(numbers.slice(0, numbers.length)) // it copies all  item
// console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position
// console.log(numbers.slice(0,1));
// let arr=[1,2,3,45,6];
// let [one,two, three,four,five]=arr;
// console.log(one,two,three,four,five);
// let ractangle={
//     width:20,
//     height:10,
//     area:200,
// }
//let {width,height,area,parameter=100}=ractangle;
//console.log(width,height,area,parameter);
// let a=[1,23,4,5,6,4,56,4];
// let [one,two,three,four,...rest]=a;
// console.log(one,two,three,four);
// console.log(rest);
// let b=[...a];
// console.log(b);
let evens=[0,2,4,6,8,10,12];
let even=[...evens];
let odds=[0,1,3,5,7,9,11];
let odd=[...odds];
let whole=[...even,...odd]
console.log(whole)
