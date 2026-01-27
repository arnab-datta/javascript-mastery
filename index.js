// memoize
// write polyyfills here

// global local

// module

// counter

// solver var by closure
// function a() {
//   // for (var i = 0; i < 3; i++) {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, 1000);
//   }
// }
// a();

// // var and solution with closure
// function a2() {
//   for (var i = 0; i < 3; i++) {
//     function inner(i) {
//       setTimeout(function log() {
//         console.log(i);
//       }, 1000);
//     }
//     inner(i);
//   }
// }
// a2();
// // 3 3 3
// function find(index) {
//     let a = [];
//     for (let i = 0; i < 1000000; i++) {
//         a[i] = i * 1;
//     }
//     return function (index) {
//         console.log(a[index]);
//     }

// }
// console.time("6")
// find(6)
// console.timeEnd("6");
// console.time("50");
// find(50)
// console.timeEnd("50");
