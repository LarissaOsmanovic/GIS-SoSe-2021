// Aufagbe 1
// a
// ...empty ist ein Resteparameter, alles was man anlegt wird da reingepackt
function min(..._emptyArray: number[]): number {
    let minimum: number = _emptyArray[0];
    for (let i: number = 0; i < _emptyArray.length; i++) {
        if (minimum > _emptyArray[i]) {
            minimum = _emptyArray[i];
        }
    }
    return minimum;
}
//  b
let xb: number = 5;

function isEven(_x3: number): boolean {
    // _x3 = Math.abs(_x3); /* nimmt nur den betrag von einer Zahl, kann auch neg. zahlen bestimmen */
    if (_x3 == 0) { /* gerade */
        return true;
    }

    if (_x3 == 1) { /* ungerade */
        return false;
    }
    return isEven(_x3 - 2); /*jede andere Zahl */

}
console.log(isEven(xb));

// c
// class Student {
//     vorname: string;
//     name: string;
//     alter: number;
//     matrikelnummer: number;

//     constructor(_vorname: string, _name: string, _alter: number, _matrikelnummer: number) {
//         this.vorname = _vorname;
//         this.name = _name;
//         this.alter = _alter;
//         this.matrikelnummer = _matrikelnummer;
//     }
//     // Nur ein Student wieder geben 
//     // Rufe ein Student auf mit _student auf 
//     public showInfo(_student: Student): void {
//         console.log(_student.vorname, _student.name, _student.alter, _student.matrikelnummer);
//     }
// }

interface Student {
    vorname: string;
    name: string;
    alter: number;
    matrikelnummer: number;
}
let s1: Student = studentErschaffen("Mini", "Mouse", 24, 152466);
let s2: Student = studentErschaffen("Frodo", "Beutlin", 18, 172895);
let s3: Student = studentErschaffen("Chris", "Evans", 21, 193876);

function studentErschaffen(_vorname: string, _name: string, _alter: number, _matrikelnummer: number): Student {
    let s: Student = { vorname: _vorname, name: _name, alter: _alter, matrikelnummer: _matrikelnummer };
    return s;
}

let studentArray: Student[] = [];
studentArray.push(s1);
studentArray.push(s2);
studentArray.push(s3);
studentArray.push({ vorname: "Valerie", name: "Otto ", alter: 23, matrikelnummer: 182569 });

console.log(s1.name);
console.log(s2.vorname);
console.log(s3.alter);
console.log(studentArray[3].matrikelnummer);

function showInfo(s: Student): void {
    console.log(s.name);
    console.log(s.matrikelnummer);
}

showInfo(s1);
showInfo(s2);
showInfo(s3);
showInfo(studentArray[3]);



// Aufgabe 2
// a Übergabeparameter verwenden
// Arrayliste namens input
let arr1: number[] = [5, 42, 17, 2018, -10, 60, -10010];
function backwards(_input: number[]): number[] {
    let arr: number[] = new Array;
    for (let i: number = _input.length - 1; i >= 0; i--) {
        arr.push(_input[i]);
    }
    return arr;
}
console.log(backwards(arr1));

// b
let gerade: number[] = [12, 14, 16, 18];
let ungerade: number[] = [11, 23, 35, 47];
function join(_array1: number[], _array2: number[]): number[] {
    let zahlenZusammen: number[] = [];
    for (let i: number = 0; i < _array1.length; i++) { /* */
        zahlenZusammen.push(_array1[i]); /* erstes array in zahlenzusammen  hinzufügen*/
    }
    for (let i: number = 0; i < _array2.length; i++) { /* */
        zahlenZusammen.push(_array2[i]); /* zweites array in zahlenzusammen  hinzufügen*/
    }
    return zahlenZusammen;
}
join(gerade, ungerade);

// c
// schleife erstellen, bei der nummer wo es beginnt bis zum zweiten

let index1: number = 0;
let index2: number = 4;
function split(_arr: number[], _index1: number, _index2: number): number[] {
    let aufteilen: number[] = [];
    for (let i: number = _index1; i < _index2 + 1; i++) {  /* +1 damit es das zweite index mitnimmt, damit es bei 4 aufhört */
        aufteilen.push(_arr[i]); 
    }
    return aufteilen;
}
console.log(split(arr1, index1, index2));

// Aufgabe 3
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");
// Dicke von den Linien die gemalt werden
context.lineWidth = 10;

//Himmel & Boden
context.fillStyle = "#6B9ADB";
context.fillRect(5, 5, 600, 300); /* erste beiden Werte von der Koordinaten dann breite, höhe */
context.fillStyle = "#62A163";
context.fillRect(5, 300, 600, 100); /* erst breite 600 dann höhe 100 */

// Wolken
context.beginPath(); /* 1.Kreis ganz links*/
context.arc(165, 70, 40, 0, Math.PI * 2);
context.fillStyle = "#C4C2C2";
context.fill();
context.beginPath(); /* 2.Kreis oben mittig*/
context.arc(205, 50, 40, 0, Math.PI * 2);
context.fillStyle = "#C4C2C2";
context.fill();
context.beginPath(); /* 3.Kreis unten mittig*/
context.arc(205, 90, 40, 0, Math.PI * 2);
context.fillStyle = "#C4C2C2";
context.fill();
context.beginPath(); /* 4.Kreis */
context.arc(235, 50, 40, 0, Math.PI * 2);
context.fillStyle = "#C4C2C2";
context.fill();
context.beginPath(); /* 5.Kreis */
context.arc(245, 75, 40, 0, Math.PI * 2);
context.fillStyle = "#C4C2C2";
context.fill();

// Baum
context.fillStyle = "#523510";
context.fillRect(50, 170, 25, 195);
context.beginPath();
context.arc(60, 170, 40, 0, Math.PI * 2); /* x & y - wert, Radius, PI - Umfang */
context.fillStyle = "#0F361D";
context.fill();

// Haus
context.fillStyle = "white";
context.fillRect(300, 200, 150, 150);
context.beginPath();
context.fillStyle = "#000000";
context.moveTo(375, 100); /* verschiebung x & y */
context.lineTo(300, 200); /*Breite & Höhe*/
context.lineTo(450, 200);
context.closePath();
context.stroke();
context.fill();



// b
let canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mySecondCanvas");
let context2: CanvasRenderingContext2D = canvas2.getContext("2d");

context2.lineWidth = 10;

class Rechteck { /* b*/
    xKoordinate: number;
    yKoordinate: number;
    breite: number;
    höhe: number;

    constructor() {
        this.createRect(); /*Methode in einen Parameter fungieren*/
    }

    createRect(): void { /*c*/
        this.xKoordinate = Math.random() * 501; /*erster wert immer bei der x Korrd - bei fillreact.*/
        this.yKoordinate = Math.random() * 401; /*zweiter wert immer bei der x Korrd - bei fillreact.*/
        this.breite = Math.random() * 200;
        this.höhe = Math.random() * 200;
    }

    drawRect(): void { /*d*/
        context2.fillRect(this.xKoordinate, this.yKoordinate, this.breite, this.höhe);
    }
}

let rechteckArray: Rechteck[] = [];  /*e*/
for (let i: number = 0; i < 16; i++) {
    rechteckArray.push(new Rechteck); /*Objekt anlegen wo die Werte von draw.. reinkommen*/
    rechteckArray[i].drawRect();
}







