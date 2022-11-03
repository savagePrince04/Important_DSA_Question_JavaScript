function FebonnaciSeries(n)
{
    let ouptut=""
  if(n<=1)
  {
    return n;
  }
  else{
      return FebonnaciSeries(n-1)+FebonnaciSeries(n-2);
  }
}
console.log(FebonnaciSeries(4));