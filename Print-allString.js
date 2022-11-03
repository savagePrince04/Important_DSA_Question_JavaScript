function allBinaryStrings(str,num){
      let len = str.length;
      if(len == num){
        console.log(str);
        return;
      }
      else if(str[len -1] == "1"){
        allBinaryStrings(str+'0', num);
      }
      else{
        allBinaryStrings(str+'0', num);
        allBinaryStrings(str+'1', num)
      }
    }
    
    function printStrings(num){
      let fStr = "";
      fStr = fStr + "0";    
      allBinaryStrings(fStr,num);
      fStr = "1";
      allBinaryStrings(fStr, num)
    }    
    let n = 3;
    printStrings(n);