let n=11;
let output="";
let a=0;
let b=1;
let c=0;
if(n==1)
console.log("0");
else
{
output=`${output} ${a} ${b} `;
for(let i=2;i<n;i++)
{
    c=a+b;
    a=b;
    b=c;
    output=`${output} ${c} `; 
}
console.log(output);
}
