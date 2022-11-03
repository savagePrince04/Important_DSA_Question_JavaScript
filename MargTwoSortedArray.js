function MargeTwoSortedArray(a1,a2)
{
  let p1=0;
  let p2=0;
  let res=[];
  let k=0;
  while(p1<a1.length && p2<a2.length)
  {
    if(a1[p1]<a2[p2])
    {
        res[k]=a1[p1];
        p1++;
        k++;
    }
    else{
        res[k]=a2[p2];
        p2++;
        k++;
    }
    if(p1===a1.length)
    {
        while(p2!=a2.length)
        {
            res[k]=a2[p2];
            p2++;
            k++;
        }
    }
    if(p2===a2.length)
    {
        while(p1!=a1.length)
        {
            res=a1[p1];
            p1++;
            k++;
        }
    }
  }
  return res;
}
let a1=[2,4,5,6];
let a2=[1,3,4,8];
console.log(MargeTwoSortedArray(a1,a2));