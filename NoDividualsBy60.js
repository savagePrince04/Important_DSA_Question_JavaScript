function Division(n)
{
    if(n%3==0 && n%4==0 && n%5==0)
    {
        return 1;
    }
    else
    return 0;
}
let n=40;
console.log(Division(n));