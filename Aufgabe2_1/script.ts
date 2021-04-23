// function a1(): void {
//     let x: string = "Alles";
//     console.log(x);
//     func1();
//     console.log("Logo!");
// }

// a1();

// function func1(): void {
//     console.log("Klar?");
// }

// function func2(): void {
//     console.log("Fit?");
// }

// function func3(): void {
//     console.log("Wach?");
// }

// function func4(): void {
//     console.log("Hallo!!");
// }

// function a2(): void {
//     let i: number = 9;

//     do {
//         console.log(i);
//         i = i - 1;
//     } while (i > 0);
// }

// a2();

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