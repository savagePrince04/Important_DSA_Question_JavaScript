// 
let person={
    name:"Sudhakar",
    age:20,
  }
  function increaseAge(obj){
    obj.age+=1;
    obj={
      name:"Sudhanshu",
      age:21,
   };
}
  increaseAge(person);
  console.log(person);