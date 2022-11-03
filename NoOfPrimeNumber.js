let first_no=1;
let last_no=50;
let count=0;
let number=0;
function isPrime(number)
{
  if(number==0 || number==1)
  return false;
  for(let j=2;j<=Math.sqrt(number);j++)
  {
    if(number%j==0)
      return false;
  }
           return number;         
}
for(let i=first_no;i<=last_no;i++)
{
  if(isPrime(i))
  {
    count++;
console.log(isPrime(i));
}}
console.log(`total number of prime number between ${first_no} to ${last_no} is ${count}`);