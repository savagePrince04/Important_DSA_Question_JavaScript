let no=12349;
let sum=0;
while(no>0)
{
let rem = no % 10;
no=parseInt(no/10);
sum=sum+rem;
}
console.log(sum);