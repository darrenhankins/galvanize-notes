let zipArrays = [[1,2,3],[4,5,6]];
// let zipArrays = ([1,2,3,4],[5,6,7]);
// let zipArrays = ([1,2],[3,4,5,6]);

function zip(zipArrays) {
  // let a1 = zipArrays[0][0];
  // let a2 = zipArrays[1][0];
  let arr1 = zipArrays[0][0];
  let arr2 = zipArrays[1][0];
  console.log(arr2);
  if (arr1<arr2) {
    console.log("test");
    // let a1 = zipArrays[0];
    // let a2 = zipArrays[1];
  } else {
    console.log
    // let a2 = zipArrays[0];
    // let a1 = zipArrays[1];
  }
}

console.log(zip(zipArrays));


function zipArrays(arr1,arr2){
 let zipArray = [];
 let len1 = arr1.length;
 let len2 = arr2.length;
 if(len1>len2){
   for(var i=0; i<len2;i++){
     zipArray.push(arr1[i]);
     zipArray.push(arr2[i]);
   }
   let r=len1-len2;
   for(var i=r;i<len1;i++){
     zipArray.push(arr1[i])
   }
   return zipArray;
 }else if(len2>len1){
   for(var i=0; i<len1;i++){
     zipArray.push(arr1[i]);
     zipArray.push(arr2[i]);
   }
   let r=len2-len1;
   for(var i=r;i<len2;i++){
     zipArray.push(arr2[i])
   }
   return zipArray;
 }else{
   for(var i=0; i<len2;i++){
     zipArray.push(arr1[i]);
     zipArray.push(arr2[i]);
   }
   return zipArray
 }
}
