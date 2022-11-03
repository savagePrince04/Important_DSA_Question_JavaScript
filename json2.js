// 
// const obj = { 
//     add: (a,b) => {
//         return a+b;
//     },
//     name: "Jeff",
//     age: 22,
//     "isStudent" : false
// };

// // convert JS Obj to JSON

// console.log(JSON.stringify(obj))
// function parent()
// {
//     function hoisted()
//     {
//     return "I'm a function";
//     }
//     var hoisted =
//     "I'm a variable";
//     return hoisted()
// }
// console.log(parent())
var employee = [
    {"name":"Rahul","age":23},
    {"name":"Emp2","age":23}
  ]
  
  getEmployeeName(employee);
  
  //allows you to create a block bounded to an object scope. shorthand way of referencing to an object property.
  function getEmployeeName(emp){
    for(var emp1 of emp)
    with(emp1)
    {
    console.log(emp1.name)
    }
  }
  
