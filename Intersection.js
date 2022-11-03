let a=[1,2,3,3,4,5,6];
let b=[3,3,5,6,10];
function intersection(a,b)
{
    let output=[];
    let m=a.length;
    let n=b.length;
    let i=0;
    let j=0;
    while(i<m && j<n)
    {
        if(a[i]<b[j])
        {
            i++;
        }
        else if(a[i]>b[j])
        {
            j++;

        }
        else
        {
            output.push(a[i])
            i++;
            j++;
        }
    }
  console.log(output)
}
    intersection(a,b)