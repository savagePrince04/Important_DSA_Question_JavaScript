    //Armstrong number is a number that is equal to the sum of cubes of its digits(in case of 3 digit means jitna number ka digit har digit par uska power hota h)
let count=0;
let sum=0;
    function Armstrong(number)
{
    while(number!=0)
    {
   number=parseInt(number/10);
   count++;
    }
    number=temp;
    while(number!=0)
    {
        let rem=number%10;
   sum=sum+Math.pow(rem,count);
   number=parseInt(number/10);
    }
    if(sum==temp)
    return `${temp} is a armstrong number`;
    else
    return `${temp} is not armstrong`;
}
let number=1634;
let temp=number;
console.log(Armstrong(number));