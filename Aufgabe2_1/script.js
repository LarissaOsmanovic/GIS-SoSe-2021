"use strict";
// Aufabe 1
function a1() {
    let x = "Alles";
    console.log(x);
    func6();
    console.log("Logo!");
    func7();
    func8();
    func9();
    console.log("Alles Gute! Alles klar? Alles Logo?");
}
a1();
function func6() {
    console.log("Klar?");
}
function func7() {
    console.log("Fit?");
}
function func8() {
    console.log("Wach?");
}
function func9() {
    console.log("Hallo!!");
}
//Aufgabe2
function a2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();
let x = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);
function func1(y) {
    y = "Bla";
    console.log(y);
}
function func2() {
    let x = "Blubb";
    console.log(x);
}
function func3() {
    x = "Test";
}
// Aufgabe 5
// a
function multiply() {
    let a = 5;
    let b = 5;
    console.log(a * b);
}
multiply();
//b
function max() {
    let y = 20;
    let z = 9;
    if (y > z) {
        console.log(y);
    }
}
max();
// c
function hochzählen() {
    let x = 0;
    let i = 1;
    while (i > 100) {
        x = x + i;
        i++;
    }
    console.log();
}
hochzählen();
// d
function getRandom() {
    for (let i = 0; 0 < 100; i++) {
        Math.floor(Math.random() * 101);
    }
    console.log(Math.random);
}
getRandom();
// e
function factorial() {
    let n = 6;
    let fakultät = 1;
    let durchlauf = 1;
    while (1 < n) {
        fakultät = fakultät * durchlauf;
        durchlauf++;
    }
    console.log(fakultät);
}
factorial();
// f
// function leapyears(): void {
//     let jahreszahl: number = 0;
//     let schaltjahr: number = 0;
//     if (jahreszahl / 4) {
//     Boolean (true);
//     if (jahreszahl / 400) {
//     Boolean (true);
//     } else {
//         Boolean (false);
//     }
// }
//     for (let index = 0; 1900 < 2021; index++) {
//       schaltjahr =;
//    }
// }
// leapyears ();
// Aufgabe 6
// a
function hashtagPrint1() {
    var hashtag1 = [];
    while (0 < 8) {
        hashtag1.push("#");
        console.log(hashtagPrint1);
    }
}
hashtagPrint1();
// function hashtagPrint (): string { 
//  let hashtag1: string  = " # # # #";
//  let hashtag2: string  = "# # # # ";
//  let finalString: string  = "";
//  for (let index = 1; index < 9; index++) {
//       if (index % 2 == 0) {
//           finalString = finalString + hashtag2 + "\n" ;
//       }
//       else {
//           finalString = finalString + hashtag1 + "\n" ;
//       }
//  }
// //  for (let index = 0; index < array.length; index++) {
// // } 
//  return finalString;
// }  
// console.log(hashtagPrint);  
// function hashtagPrint2 (): string {
//     let finalString: string  = "";
//     let count: number = 0;
//     // tslint:disable-next-line: typedef
//     for (let index = 1; index <= 8; index++) {
//      for (let index = 1; index <= 8; index++) {
//             if (count % 2 == 0) {
//                 finalString += "#";
//             } else {
//                 finalString += " ";
//             }
//             count++;
//      }
//      finalString = finalString + "\n";
//    }
//     return finalString;
// }
// console.log("test");
// console.log(hashtagPrint2);  
//# sourceMappingURL=script.js.map