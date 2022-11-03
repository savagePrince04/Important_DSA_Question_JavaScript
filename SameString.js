// function SameString(str)
// {
//     let low=0;
//     let higth=str.length-1;
//     while(low<=higth)
//     {
//         if(str.charAt(low)==str.charAt(higth))
//         {
//             return "Yes";
//         }
//         low++;
//         higth--;
//     }
//     return "No";
// }
// let str="Byte";
// console.log(SameString(str));
/***************************************************************************/
        /***Using Resursion */
        function SameString(str,index)
        {
            if(index==str.length-1)
            {
                return index;
            }
            else 
            {
                SameString(str,index+1);
            }
            return "No";
        }
        let str=prep;
        console.log(SameString(str,0));