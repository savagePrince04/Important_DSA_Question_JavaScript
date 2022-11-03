let a = [1,5,7];
let b = [2,4,6];
let c = [3,8,9];
let d = [...a,...b,...c];
d.sort((a,b)=>{
    return (a-b)
})
console.log(d);