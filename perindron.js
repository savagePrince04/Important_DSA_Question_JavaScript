let n=333;
let temp=n;
let perindron="";
let rem=0;
while(n>0)
{
     rem=n%10;
    n=parseInt(n/10);
  perindron=perindron+rem;
}
if(temp==perindron)
console.log("perindron");
else
console.log("not perindron");