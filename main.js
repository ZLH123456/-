"use strict";
function outputResult() {
    let array = buildArray();
    let flag = buildArrayAgain(array);
    if(flag==="true"){
        return array;
    }else{
        return outputResult();
    }
}
function  buildArray() {
    let arrays=[8,7,3,4];
    return arrays;
}
function  buildArrayAgain(array) {
    let flag="true";
          for(let i=1;i<=3;i++){
              if(array[0]===array[i]){
                  flag= "false"
              }
          }for(let i=2;i<=3;i++){
              if(array[1]===array[i]){
                  flag= "false"
              }
            for(let i=3;i<=3;i++){
                  if(array[2]===array[i]){
                      flag="false"
                  }
            }
    }return flag;
}
function userInputs(array) {
    let userinputs=[8,7,6,5];
    let a=0;
    let b=0;
    let finalResult="";
    for(let i=0;i<=userinputs.length;i++){
      for(let j=0;j<=array.length;j++){
          if(userinputs[i]===array[j]&&i===j){
              a++;
          }else if(userinputs[i]===array[j]&&i!==j){
              b++;
          }
      }
    }
     a--;
    finalResult=a+"A"+b+"B";
    return finalResult
}