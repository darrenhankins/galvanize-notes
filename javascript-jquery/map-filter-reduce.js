let data = [4,2,-1,3,2];


let result = data.map((val)=>{
  return val * val;
});
 console.log(result);



let square = (x)=>x*x;
let result1 = data.map(Math.sqrt);
console.log(result1);



// shifts last item from left to right
let objs = [{name: ''}, 10, "left-side",99,202022];
let shifted = objs.map((val,idx,array)=>{
  if(idx === 0) {
    return array[array.length-1];
  }
  return array[idx-1];
  // simplified...
  // let id = idx === 0 ? array.length-1: idx-1;
  // return array[id];
});
console.log(shifted);



let mat = [[1,2,3],[4,5],[6]];

let result2 = mat.reduce((accum,val,idx,array)=>{
  // reduce the array
  return accum * val.reduce((accum, val=>accum*val,1);
},1);
console.log(result2);
