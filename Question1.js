let bookArr = [
    {
        "firstName": "Jow",
        "lastName" : "Roll",
        "age" : 25
    },
    {
        "firstName" : "Miu",
        "lastName" : "Poll",
        "age" : 45
    },
    {
        "firstName" : "iu",
        "lastName" : "oll",
        "age" : 50
    }
]
let arr=bookArr.filter(element=>{
    return element.age>30
}).map(ele=>{
    return `${ele.firstName+ele.lastName}`
})
console.log(arr);
