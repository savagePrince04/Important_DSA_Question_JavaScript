function unique(arr)
{ 
    let output=arr[0];
    for(let i=1;i<arr.length;i++)
    {
        output=output ^arr[i];
    }
    console.log(output);
}
let arr = [7,3,5,4,5,3,4]; 
   unique(arr);