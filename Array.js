// let friend1 = "Jitendra";
// let friend2 = "Sudhanshu";
// let friend3 = "Shilpi";
// let friend4 = "Rahul"; 
// let friend5 = "Sudhakar"; 
// 100

// // ## Naive Approach ##

// function greet(friendName){
//     let msg = `Hey ${friendName}, you are invited!`;
//     return msg;
// }

// console.log(greet(friend1));
// console.log(greet(friend2));
// console.log(greet(friend3));
// console.log(greet(friend4));
// console.log(greet(friend5));


// let friendArr = ["Jitendra", "Sudhanshu","Shilpi", "Rahul", "Vivekanand","Sreejet", "Samrat"]; // array
// console.log(friendArr)
// console.log(friendArr.length)
// console.log(friendArr[3])

// for(let val = 0; val < friendArr.length; val++){
//     console.log((friendArr[val]))
// }


// let arr = ["Ranjan", 99, true];

// for(let val = 0 ; val < arr.length; val++){
//     console.log(typeof arr[val]);
// }

// console.log(arr);

// ################ Array Declaration #################

// 1. Literal way 

// var arr = [1,2,"hi"];
// console.log(typeof arr);

// 2. Constructral way => new keyword will be used

// var newArr = new Array(); // new Array()
//  console.log(newArr.length);
//  console.log(newArr)
//  newArr[0] = "hello";
//  newArr[1] = "hello1";
//  newArr[2] = "hello2";
//  newArr[3] = "hello3";
//  newArr[4] = "hello4";
//  console.log(newArr)
//  console.log(newArr[3].length)
//  arr.length , arr[3].length
//  var newArr = new Array(); // new Array()
//  0 1 2
//  newArr[99] = "live";
//  console.log(newArr)

//  var newArr1 = [];
//  console.log(newArr1.length)00
//  newArr1[100] = 100;
//  console.log(newArr1[100]) // 100
//  console.log(newArr1.length) // 101
//  console.log(newArr1) // 99- empty - 100 - literal, 101 - 100
//  console.log(newArr1.length) // 101
//  console.log(newArr1[105])

// let arr1 = ["Tomato", "Rice", "Cabbage", "Lemon"]; // literal way // 1d array
//             0          1      2          3      //4
// let arr = new Array(["Tomato", "Rice", "Cabbage", "Lemon"])
// let arr = [["Tomato", "Rice", "Cabbage", "Lemon"],[true,99,"hey"]] //2d array
//             0         1       2        3         0    1  2
//                          0                           1

// for(let val = 0 ; val < arr.length; val++){
//     for(let inner = 0; inner < arr[val][inner].length; inner++){
//         console.log(arr[val][inner]);
//     }
// }

// console.log(arr[0]); //["Tomato", "Rice", "Cabbage", "Lemon"]
//                          0       1        2           3

// console.log(arr[0][1])
// let arr=[10,20,30,40,50,60]
// console.log(arr);
// for(let i=0;i<6;i++)
// {
//     console.log(arr[i]);
// }
// console.log(arr[5]);
// var laptop=
// {
//    company:"Dell",
//    model:"DEL213654",
//    core:8,
//    size:5,
//    color:"blue"
// }
// console.log(laptop.company)
// console.log(laptop.model)
// function invite(Name)
// {
//     let msg=`hii ${Name} you are invited`
//     return msg;
// }
// let newArr=new invite("Nishant");
// newArr[0]="NIshant"
// console.log(invite(newArr[0]));
// 
// function person(name,age,siblings,isStudent, address){
//         this.nm = name;
//         this.age = age;
//         this.siblings= siblings;
//         this.isStudent = isStudent; 
//         this.address = address;
//     }
    
//     var person1 = new person("Abhishek",23,["Rahul", "Sudhakar"], true);
//     var person2 = new person("Srihari",21,["abc", "qwe"], false);
//     console.log(person1);
// let student={
//     Name:"sufhakar",
//     branch:"cse",
// }
// let a=[1,2,3,4,5]
// function add(x)
// {
//     return x+5;
// }
// let output=a.map(add);
// console.log(output);
// let a=[1,2,3,45,50]
// function add(x)
// {
// return x*5;
// }
// let output=a.map(x=>x*5)
// console.log(output);
// let arr="relevel"
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i])
// // }
// var person={
//     "brother":"Prabhakar",
//     "sister":"rashmi",
//     "name":"sudhakar",
//     "hobies":["Singing","Treakking"]

// }
// let {brother,sister,name,hobies}=person;
// console.log(brother,sister,name,hobies)
// var arr=[1,3,2,2,5]
// let first=0;
// let last=arr.length-1;
// let result=0;
// var output=arr.sort();
// console.log(output);
// for(let i=0;i<arr.length;i++)
// {
//   if(i%2==0)
//   {
//   result[i]=arr[last];
//   arr[last]=arr[first];
//   arr[first]=result[i];
// }}
// console.log(output)
// let a=[5,1,3,2,6];
// // let output=a.filter(function getEvenvalue(x)
// // {
// // return x%2==0;
// // })
// let output=a.filter(x=>{
//   return x%2==0;
// })
// let output1=a.map(x=>{
//   return x*10;
// })
// console.log(output);
// console.log(output1);
// function add(a,b)
// {
//   return a+b;
// }
//console.log(add(a,b))
function maxmin(arr)
{
  let max=arr[0];
  let min=arr[0];
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i]>=max)
    {
      max=arr[i];
    }
    if(min>=arr[i])
    {
      min=arr[i];
    }
  }
    return (` max==${max} \n min==${min}` )
}
let arr=[2,3,5,1,6];
console.log(maxmin(arr));