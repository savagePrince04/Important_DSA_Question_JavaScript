function BitString(n)
{
  if(n==1 ||n==2 )
  {
     return n+1;
  }
  else
  {
    let res=BitString(n-1)+BitString(n-2);
    return res;
  }
}
console.log(BitString(6));