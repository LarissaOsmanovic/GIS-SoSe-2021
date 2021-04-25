// Aufabe 1

function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func6();
    console.log("Logo!");
    func7();
    func8();
    func9();
    console.log("Alles Gute! Alles klar? Alles Logo?");
}

a1();

function func6(): void {
    console.log("Klar?");
}

function func7(): void {
    console.log("Fit?");
}

function func8(): void {
    console.log("Wach?");
}

function func9(): void {
    console.log("Hallo!!");
}

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
function multiply (): void {
    let a: number = 5;
    let b: number = 5;
    
    console.log(a * b);
}
multiply();

//b
function max (): void {
    let y: number = 20;
    let z: number = 9;

    if (y > z) {
     console.log(y);
    }
}
max ();

// c
function hochzählen(): void {
   let x: number = 0;
   let i: number = 1;
   
   while (i > 100) {
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
getRandom();

// e
function factorial(): void {
    let n: number = 6;
    let fakultät: number = 1;
    let durchlauf: number = 1;

    while (1 < n) {
  fakultät = fakultät * durchlauf;
  durchlauf++;
    }   
    console.log(fakultät);
} 
factorial();
//Weiß nicht was daran falsch ist, aber irgendwie hängt dadurch meine komplette Seite

// f
function leapyears(): void {
for (let i: number = 1900; 1900 < 2021; i++) {
if ((i % 4) == 0 && (i % 100) != 0) {
        console.log(i);
    }
}
}
leapyears();


// Aufgabe 6
// a
// function hashtagPrint1(): void {
//   // tslint:disable-next-line: typedef
//   let hashtag1 = [];

//   while (0 < 8) {
//       hashtag1.push("#");
//       console.log(hashtagPrint1);
//   }

// }
// hashtagPrint1 ();
// for (let hash = "#"; hash.length <= 7 ; hash += "#"){
//     console.log(hash);
    
//     }
// b & c
// function fizzBuzz(num: number) {
//     if (num % 5 == 0 && num % 3 == 0) return "fizzbuzz";
//     if (num % 5 == 0) return "fizz";
//     if (num % 3 == 0) return "buzz";

//     return num;
//     }

// for (let i: number = 1; i <= 100; i++) console.log(fizzBuzz(i));

// d
let hashtag: string = "#"; 

function schachbrett(): void {
    for (let i: number = 0; i < 8; i++) {
    if (i % 2 == 0 ) {
        console.log("" + hashtag + "" + hashtag + "" + "\n");
    } 
    else {
        console.log(hashtag + "" + hashtag + "" + hashtag + "\n");
    }   
    }
}
schachbrett();
// e
let hoehe: number = 50;
let row: string;
function schachbrett1(_row: string, hoehe: number): void {
    let hashtag1: string = "#"; 
   
   
    for (let i: number = 0; i < hoehe; i++) {
    if (i % 2 == 0 ) {
        console.log("" + hashtag1 + "" + hashtag1 + "" + "\n");
    } 
    else {
        console.log(hashtag1 + "" + hashtag1 + "" + hashtag1 + "\n");
    } 
}
   
}
schachbrett1(row, hoehe);
}

