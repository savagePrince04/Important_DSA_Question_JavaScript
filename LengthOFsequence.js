function Los(arr)
{
    let count=1;
    let temp=0;
    let previous=0;
    arr.sort((a,b)=>{
        return (a-b);
    });
        for(let cur=1;cur<arr.length;cur++)
        {
            if(arr[previous]+1==arr[cur])
            {
                count++
            }
            else
            {
                count=1;
            }
            previous=cur;
        if(temp<=count)
        {
            temp=count;
        }
    }
    return temp
}

let arr=[35, 3, 4, 88, 9, 10, 21, 5, 6];
console.log(Los(arr));