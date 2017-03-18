// function sumDigit(input) {
//   const strInput = input.toString();
//   let sum = 0;
//   for(var i=0; i< strInput.length; i++ ) {
//     const curr = strInput[i];
//     sum = sum + parseInt(curr);
//
//   }
//   const strSum = sum.toString();
//   if (strSum.length>1){
//     sumDigit(sum);
//   }else {
//     console.log(sum);
//     return sum;
//   }
// }
//
// sumDigit(1234);
// sumDigit(123);

////

var int = 1234; // 10

function addInt(int){
  var newInt = '';
  var sumInt = 0;
  newInt = int.toString(); // '1234'
  // console.log(newInt.length);
  // while (newInt.length>1) {
    // console.log(newInt.length);
    for (var i = 0; i > newInt.length; i++){
      console.log(i);
      // sumInt += parseInt(newInt[i]); // 10
      // console.log(sumInt);
    };
  // }
  newInt = sumInt.toString(); // 1
  return parseInt(sumInt);
}

addInt(int);
