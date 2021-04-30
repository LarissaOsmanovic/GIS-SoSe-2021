// Aufabe 1

function a1(): void {
    let x: string = "Alles";
    console.log(x);
    b1();
    console.log(x);
    func6();
    console.log(x);
    console.log("Logo!");
}

a1();

function b1(): void {
    console.log("Gute!");
}

function func6(): void {
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
function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}

a2();

let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void {
    y = "Bla";
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
}

// Aufgabe 5
// a
let a: number = 5;
let b: number = 5;
function multiply(_a: number, _b: number): void {

    console.log(_a * _b);
}
multiply(a, b);

//b _ Parameter
let y: number = 20;
let z: number = 9;
function max(_y: number, _z: number): void {
    if (_y > _z) {
        console.log(_y);
    }
    else {
        console.log(_z);
    }
}
max(y, z);

// c
function hochzählen(): void {
    let x: number = 0;
    let i: number = 1;

    while (i < 100) {
        x = x + i;
        i = i + 1;
    }

    console.log(x);
}


// d
function getRandom(): void {
    let x: number = 0;
    let y: number = 100;

    function getRandomArbitrary(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    for (let i: number = 0; i < 10; i++) {
        console.log(getRandomArbitrary(x, y));
    }
}
getRandom();

// e
function factorial(fakultät: number): number {
    let ergbnis: number = 1;
    let durchlauf: number = 1;

    do {
        ergbnis = ergbnis * durchlauf;
        durchlauf++;
    } while (durchlauf <= fakultät);
    return ergbnis;
}
console.log(factorial(6));


// f
let jahr1: number = 1900;
let jahr2: number = 2021;
function leapyears(_zieljahr: number, _startjahr: number): void {
    for (let i: number = _startjahr; i < _zieljahr; i++) {
        if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
            console.log(i);
        }
    }
}
leapyears(jahr1, jahr2);


// Aufgabe 6
// a
let hashtag2: string = "";
for (let index: number = 0; index < 7; index++) {
hashtag2 = hashtag2 + "#";
console.log(hashtag2);
}
// b & c
function fizzBuzz(num: number): void {
    if (num % 5 == 0 && num % 3 == 0) console.log("fizzbuzz");
    if (num % 5 == 0) console.log("fizz");
    if (num % 3 == 0) console.log("buzz");


}
for (let i: number = 1; i <= 100; i++) {
    fizzBuzz(i);
}

// d
let hashtag: string = "#";
let leerzeichen: string = " ";
let schachbrett2: string = "";

function schachbrett(): void {
    for (let i: number = 0; i < 8; i++) {
        if (i % 2 == 0) {
            for (let i: number = 0; i < 4; i++) {
                schachbrett2 = schachbrett2 + leerzeichen;
                schachbrett2 = schachbrett2 + hashtag;
            }
            schachbrett2 = schachbrett2 + "\n";
        }
        else {
            for (let i: number = 0; i < 4; i++) {
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
let row: string = "";
let row2: string = "";
function schachbrett1(_hoehe: number): void {

    for (let i: number = 0; i < _hoehe; i++) {
        if (i % 2 == 0) {
            row = row + leerzeichen;
            row2 = row2 + hashtag;
        }
        else {
            row = row + hashtag;
            row2 = row2 + leerzeichen;
        }
    }
    for (let i: number = 0; i < _hoehe; i++) {
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
