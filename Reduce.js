const numbers = [1,2,3,4,5,6];
// give me the sum of every element
let output=numbers.reduce((a,sum)=>{
 return sum=sum+a;
},0)
console.log(output)