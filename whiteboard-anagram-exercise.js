// Anagram

var word1 = "dog";
var word2 = "odg";

function anagramCompare(word1, word2) {

  var array1 = word1.split('').sort();
  var array2 = word2.split('').sort();
  console.log(array1);
  console.log(array2);
  if (array1.length == array2.length){
    for (var i=0; i<array1.length; i++){
      for (varj=0; j<array2.length; j++){
        if (if (array1[i] == array[2]) {
          return true
        }
      }
    }
  }


}

// console.log(anagramCompare(word1, word2));
anagramCompare(word1, word2)
