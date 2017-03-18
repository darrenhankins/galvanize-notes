// let parens = "(())()"; //true
// let parens = "(())("; //false
// let parens = "(()))"; //false
// let parens = ")";//false
// let parens = "()"; //true
let parens = "(()()))(()"; //false

function validFunction (parens){
  let check = 0;
  let valid = false;
  for(var i=0; i<parens.length;i++){
    const paren = parens[i];
    if(paren === "(") {
      check++;
    } else if(paren === ")") {
      check--;
    }
    if(check<0){
      return false;
    }
  }
  if (check === 0){
    valid = true;
  }
  return valid;
}

console.log(validFunction(parens));
