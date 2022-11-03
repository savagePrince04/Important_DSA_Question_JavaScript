function PrintAllString(str,n)
{
    if(str.length==n)
    {
        console.log(str);
        return ;
    }
    else if(str[str.length-1]==1)
    {
        PrintAllString(str+"0",n);
    }
    else
    {
        PrintAllString(str+"0",n);
        PrintAllString(str+"1",n);
    }
}
function printStrings(n)
{
  let str="";
  str=str+"0";
  PrintAllString(str,n);
  str="1";
  PrintAllString(str+"0",n);
}
let n=3;
printStrings(n);