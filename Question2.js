let bookArr1 = [
    {
        "firstName": "Jow",
        "lastName" : "Roll",
        "age" : 25,
        "price" : 500
    },
    {
        "firstName" : "Miu",
        "lastName" : "Poll",
        "age" : 45,
        "price" : 1500
    },
    {
        "firstName" : "iu",
        "lastName" : "oll",
        "age" : 50,
        "price" : 2500
    }
]
// iterate through this array and print avg of the book's price whose authoir age is > 30
let arr=bookArr1.filter(ele=>{
    return ele.age>30;
})
let n=arr.length;
let avg=arr.reduce((sum,ele)=>{
return sum+ele.age
},0)
console.log(avg)
console.log(arr/n)
