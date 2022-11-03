// // 
// let obj = {name: 'relevel'};
//  obj['name'] = 'Relevel by Unacademy' 
//  console.log(obj.name);
// let arr = [1, 2, 3, 4] 
// arr.slice(1, 3); 
// console.log(arr);

function standingRows(heights){
    //write your logic here
	let temp=new Array(n);
    for(let i=0;i<n;i++)
    {
       temp[i]=heights[i]
    }
	let count=0;
	temp.sort((a,b)=>a-b)
		for(let i=0;i<n;i++)
		{
			for(let j=i;j==i;j++)
			{
				if(heights[i]!=temp[j])
				{
					count++;
				}
			}
		}
		return count;
	
}
let heights=[5,1,2,3,4]
n=heights.length
console.log(standingRows(heights,n));