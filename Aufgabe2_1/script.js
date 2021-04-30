"use strict";
// Aufabe 1
function a1() {
    let x = "Alles";
    console.log(x);
    b1();
    console.log(x);
    func6();
    console.log(x);
    console.log("Logo!");
}
a1();
function b1() {
    console.log("Gute!");
}
function func6() {
    console.log("klar?");
}
// function func7(): void {
//     console.log("Fit?");
// }
// function func8(): void {
//     console.log("Wach?");
// }
// function func9(): void {
//     console.log("Hallo!!");
// }
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
let a = 5;
let b = 5;
function multiply(_a, _b) {
    console.log(_a * _b);
}
multiply(a, b);
//b _ Parameter
let y = 20;
let z = 9;
function max(_y, _z) {
    if (_y > _z) {
        console.log(_y);
    }
    else {
        console.log(_z);
    }
}
max(y, z);
// c
function hochzählen() {
    let x = 0;
    let i = 1;
    while (i < 100) {
        x = x + i;
        i = i + 1;
    }
    console.log(x);
}
// d
function getRandom() {
    let x = 0;
    let y = 100;
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    for (let i = 0; i < 10; i++) {
        console.log(getRandomArbitrary(x, y));
    }
}
getRandom();
// e
function factorial(fakultät) {
    let ergbnis = 1;
    let durchlauf = 1;
    do {
        ergbnis = ergbnis * durchlauf;
        durchlauf++;
    } while (durchlauf <= fakultät);
    return ergbnis;
}
console.log(factorial(6));
// f
let jahr1 = 1900;
let jahr2 = 2021;
function leapyears(_zieljahr, _startjahr) {
    for (let i = _startjahr; i < _zieljahr; i++) {
        if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
            console.log(i);
        }
    }
}
leapyears(jahr1, jahr2);
// Aufgabe 6
// a
let hashtag2 = "";
for (let index = 0; index < 7; index++) {
    hashtag2 = hashtag2 + "#";
    console.log(hashtag2);
}
// b & c
function fizzBuzz(num) {
    if (num % 5 == 0 && num % 3 == 0)
        console.log("fizzbuzz");
    if (num % 5 == 0)
        console.log("fizz");
    if (num % 3 == 0)
        console.log("buzz");
}
for (let i = 1; i <= 100; i++) {
    fizzBuzz(i);
}
// d
let hashtag = "#";
let leerzeichen = " ";
let schachbrett2 = "";
function schachbrett() {
    for (let i = 0; i < 8; i++) {
        if (i % 2 == 0) {
            for (let i = 0; i < 4; i++) {
                schachbrett2 = schachbrett2 + leerzeichen;
                schachbrett2 = schachbrett2 + hashtag;
            }
            schachbrett2 = schachbrett2 + "\n";
        }
        else {
            for (let i = 0; i < 4; i++) {
                schachbrett2 = schachbrett2 + hashtag;
                schachbrett2 = schachbrett2 + leerzeichen;
            }
            schachbrett2 = schachbrett2 + "\n";
        }
    }
    console.log(schachbrett2);
}
schachbrett();
// e
let row = "";
let row2 = "";
function schachbrett1(_hoehe) {
    for (let i = 0; i < _hoehe; i++) {
        if (i % 2 == 0) {
            row = row + leerzeichen;
            row2 = row2 + hashtag;
        }
        else {
            row = row + hashtag;
            row2 = row2 + leerzeichen;
        }
    }
    for (let i = 0; i < _hoehe; i++) {
        if (i % 2 == 0) {
            schachbrett2 = schachbrett2 + row;
        }
        else {
            schachbrett2 = schachbrett2 + row2;
        }
        schachbrett2 = schachbrett2 + "\n";
    }
    console.log(schachbrett2);
}
schachbrett1(13);
//# sourceMappingURL=script.js.map