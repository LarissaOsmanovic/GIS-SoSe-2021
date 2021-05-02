"use strict";
// Aufagbe 1
// a
function min(_emptyArray) {
    let minimum = _emptyArray[0];
    for (let i = 0; i < _emptyArray.length; i++) {
        if (minimum > _emptyArray[i]) {
            minimum = _emptyArray[i];
        }
    }
    return minimum;
}
console.log(min([5, 42, 17, 2018, -10, 60, -10010]));
//  b
let xb = 5;
function isEven(_x3) {
    if (_x3 == 0) { /* gerade */
        return true;
    }
    if (_x3 == 1) { /* ungerade */
        return false;
    }
    return isEven(_x3 - 2); /*jede andere Zahl */
}
console.log(isEven(xb));
let s1 = studentErschaffen("Mini", "Mouse", 24, 152466);
let s2 = studentErschaffen("Frodo", "Beutlin", 18, 172895);
let s3 = studentErschaffen("Chris", "Evans", 18, 193876);
console.log(s1.name);
console.log(s2.vorname);
console.log(s3.alter);
function studentErschaffen(_vorname, _name, _alter, _matrikelnummer) {
    let s = { vorname: _vorname, name: _name, alter: _alter, matrikelnummer: _matrikelnummer };
    return s;
}
function showInfo(s) {
    console.log(s.name);
    console.log(s.matrikelnummer);
}
showInfo(s1);
showInfo(s2);
showInfo(s3);
// showInfo(studentArray[3]);
// Aufgabe 2
// a Übergabeparameter verwenden
// Arrayliste namens input
let arr = [5, 42, 17, 2018, -10, 60, -10010];
function backwards(_input) {
    let arr = new Array;
    for (let i = _input.length - 1; i >= 0; i--) {
        arr.push(_input[i]);
    }
    return arr;
}
console.log(backwards(arr));
// b
let gerade = [12, 14, 16, 18];
let ungerade = [11, 23, 35, 47];
function join(_array1, _array2) {
    let zahlenZusammen = _array1.concat(_array2);
    console.log(zahlenZusammen);
}
join(gerade, ungerade);
// c
// schleife erstellen, bei der nummer wo es beginnt bis zum zweiten
let index1 = 0;
let index2 = 4;
function split(_arr, _index1, _index2) {
    return _arr.slice(_index1, _index2);
}
console.log(split(arr, index1, index2));
// Aufgabe 3
let canvas = document.getElementById("myFirstCanvas");
let context = canvas.getContext("2d");
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
let canvas2 = document.getElementById("mySecondCanvas");
let context2 = canvas2.getContext("2d");
context2.lineWidth = 10;
class Rechteck {
    constructor() {
        this.createRect(); /*Methode in einen Parameter fungieren*/
    }
    createRect() {
        this.xKoordinate = Math.random() * 501; /*erster wert immer bei der x Korrd - bei fillreact.*/
        this.yKoordinate = Math.random() * 401; /*zweiter wert immer bei der x Korrd - bei fillreact.*/
        this.breite = Math.random() * 200;
        this.höhe = Math.random() * 200;
    }
    drawRect() {
        context2.fillRect(this.xKoordinate, this.yKoordinate, this.breite, this.höhe);
    }
}
let rechteckArray = [];
for (let i = 0; i < 16; i++) {
    rechteckArray.push(new Rechteck); /*Objekt anlegen wo die Werte von draw.. reinkommen*/
    rechteckArray[i].drawRect();
}
//# sourceMappingURL=typescript.js.map