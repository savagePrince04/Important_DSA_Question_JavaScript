function NoOfNote(arr,ammount)
{
   let note=new Array(arr.length).fill(0);
   for(let i=0;i<arr.length;i++)
   {
    if(ammount>=arr[i])
    {
       note[i]=Math.floor(ammount/arr[i])
        ammount=ammount-note[i]*arr[i]
    }
   }
   for(let i=0;i<arr.length;i++)
   {
    console.log(arr[i]+"="+note[i]);
   }
}
var arr=[2000,500,200,100,50,20,10,5,1];
let ammount=638;
NoOfNote(arr,ammount);