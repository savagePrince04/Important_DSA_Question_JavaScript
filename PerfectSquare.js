function isPerfectSquare(n){
    var x=Math.floor(Math.sqrt(n));
    if(x*x==n){
    return true;
    }
    else{
    return false;
    }
    }
    let n=1024;
    console.log(isPerfectSquare(n));