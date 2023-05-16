// var keyword
// hoisting
console.log(a);
var a = 20;
console.log(a); // 20





// console.log(c);

// if we use var keyword , the variable is function scoped variable

function f1(){
    console.log(c)
  var c = 30;
  console.log(a)
  console.log(c)
  console.log(d) // undefined
  if(c%5 == 0){
    var d = 40;
    console.log(d) // 40
     console.log(c) // 30
  }
  console.log(d) // 40
}

// console.log(c)

f1();


// console.log(c)
// console.log(d)
// function f2(){
//   f1();
// console.log(c)
// }

// f2();