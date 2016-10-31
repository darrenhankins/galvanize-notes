document.addEventListener("DOMContentLoaded",function(){
  // select element button
  // add event listener
  // when clicked run javascript
  var button = document.getElementById('button')
  button.addEventListener("click", runThis(){

  })
});


function runThis() {
  var h1 = document.getElementsByTagName('h1')[0];
  var title = h1.innerContent
  console.log(title)
  h1.innerText = "I changed this!"

  // var body = document.getElementsByTagName("body")
  // body.appendChild(h1)
}
