// var a = 7;
// function square(num) {
//   let res = num * num;
//   return res;
// }

// var square1 = square(2);
// console.log(square1);
// var square2 = square(4);
// console.log(square2);

//////////////////////////////////////////////

// console.log(window.b);
// let a = 10;
// var b = 100;

/////////////////////// Scope ///////////////////

// {
//   let a = 10;
//   const b = 100;
//   var c = 1000;
// }

// console.log(c);

//////////////////// Shadowing ////////////////////

// let a = 121;
// {
//   let a = 10;
//   let b = 100;
//   let c = 1000;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log("//////////");
// console.log(a);

////////////////////// Illegal shadowing /////////////
let a = 20;
{
  var a = 200;
  console.log(a);
}
console.log(a);
