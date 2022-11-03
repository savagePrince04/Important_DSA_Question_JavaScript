// let Person={
//     name:"Sudhakar Kumar",
//     age:20,
// }
// function incressage(obj)
// {
//    Person.age+=1;
// }
// console.log(incressage(Person));
// console.log(Person);
// function incressage(obj)
// {
//     obj={
//         name:"tushar",
//         age:22
//     }
//     obj.age+=1;
//     console.log(obj)
// }
// let Person={
//     name:"Sudhakar kumar",
//     age:20,
// }
// incressage(Person);
// console.log(Person)
const json = '{"name" : "Jeff", "age" : 22}'
// you need to convert in you JS Obj
console.log(JSON.parse(json))

const obj = { 
    add: (a,b) => {
        return a+b;
    },
    name: "Jeff",
    age: 22,
    "isStudent" : false
};

// convert JS Obj to JSON
console.log(JSON.stringify(obj))
