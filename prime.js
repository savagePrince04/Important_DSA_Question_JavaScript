let number=2;
function isPrime(number)
{
    for(let i=2;parseInt(i)<=Math.sqrt(number);i++)
{
     if(number%i==0)
    return "not prime";
    break;
}
    return "prime";
}
console.log(isPrime(number));