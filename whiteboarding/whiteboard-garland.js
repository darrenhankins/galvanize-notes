// Whiteboarding - Garland Order
// https://github.com/gSchool/DailyProgrammer/tree/master/10_garlandWord


// Samples
// garland('ceramic') // 1
// garland('onion') // 2
// garland('alfalafa') // 4 alfa

// Input - Output table

let word = "hotshots";

// function garland(word){
//   console.log(word);
//   let count = 0;
//   let continuos = false;
//   for (var i=0; i<word.length; i++){
//     let count = 0;
//     let firstLetter = word[0];
//     console.log("firstLetter="+firstLetter);
//     for (var j=i+1; j<word.length; j++){
//       console.log(word[j]);
//       if (firstLetter == word[j] && !continuos) {
//         countinous = true;
//         count++;
//         console.log(count);
//       } else {
//         // if at the end of word
//         if (j == word.length-1){
//           return count;
//         } else {
//           continuos = false;
//           count = 0;
//         }
//       }
//     }
//   }
// }

function garland(word) {
  // returns letters at [1] through [3]
  let str = word.substring(1,4);
  for (var i=1; i<word.length; i++) {

  }
  return str;
}

console.log(garland(word));
