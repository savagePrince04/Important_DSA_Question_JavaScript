function maxmin(arr)
{
    let max=arr[0];
    let min=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>=max)
        {
            max=arr[i];
        }
        if(min>=arr[i])
        {
            min=arr[i];
        }
    }
    return ` max=${max} \n min=${min} `
}
let arr=[20,3,100,5,6]
console.log(maxmin(arr));