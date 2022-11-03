function increasingOrder(n)
{
  if(n==1)
  {
    console.log(1);
    return 1;
  }
  else
  {
     increasingOrder(n-1);
  }
  console.log(n)
   return sum=sum+n;
}
let sum=0;
 console.log(increasingOrder(5));