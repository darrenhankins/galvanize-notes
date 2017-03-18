// Jordan Storz
function parensCheckerVersion2(str) {
 let counter = 0;
 let arr = str.map(p => (p === '(') ? 1 : -1);
 for (let i = 0; i < arr.length; i++) {
   counter < 0 ? break : counter += arr[i];
 }
 return counter === 0;
}


function parensCheckerVersion1(str){
 if(str.length%2!=0){
   return false
 } else {
   let binArr = str.split('').map(p=>{
     if(p=='('){
       return 1
     }else{
       return -1
     }
   })
   var counter = 0;
   for (let i=0; i<binArr.length;i++){
     if(counter<0){
       return false
     }else{
       counter +=binArr[i];
     }
   }
 }
 return counter===0;
}
