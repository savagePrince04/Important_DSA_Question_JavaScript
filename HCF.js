let a=100;
let b=16;
let hcf=0;
for(let i=1;i<=(a<=b?a:b);i++)
{
    if(a%i==0 && b%i==0)
    hcf=i;
}
console.log(`HCF of two number ${a} and ${b} is ${hcf}`);