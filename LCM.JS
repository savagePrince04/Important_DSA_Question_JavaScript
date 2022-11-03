let a=16;
let b=8;
let max=(a>b?a:b)
    while(true)
    {
        if(max % a == 0 && max % b == 0)
        {
         break;
        }
      max++;
    }
    console.log(`LCM of ${a} and ${b} are ${max}`);