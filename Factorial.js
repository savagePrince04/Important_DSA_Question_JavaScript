let output="";
function factorial(n)
{
    if(n<0)
    {
        console.log("negative number can not find the recursion");
    }
    else if(n<=1)
    {
        return n;
    }
    else
    return n*factorial(n-1);
}
let n=5;
console.log(factorial(n));