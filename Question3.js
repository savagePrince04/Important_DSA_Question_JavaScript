// arr = [
//     {
//         id: 1,
//         name:"Harish"
//     },
//     {
//         id: 2,
//         name:"Akshay"
//     },
//     {
//         id: 3,
//         name:"Jitendra"
//     },
//     {
//         id: 4,
//         name:"Abhishek"
//     },    
// ]
// let p=arr.filter(ele=>{
//     return ele.id==2;
// }).map(k=>{return k.name})
// console.log(p)

const arr = [
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 }
];

// return all name in ascending order whose value > 0
let p=arr.filter(ele=>{
    return ele.value>0;
})
console.log(p.sort((a,b)=>a["name"].localeCompare(b["name"])));
let res=["sudhakar","pandey","hariom","shivam"];
console.log(res.sort((a,b)=>a[0].localeCompare(b[0])))
