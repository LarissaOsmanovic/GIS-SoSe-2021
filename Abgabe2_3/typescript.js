"use strict";
var Abgabe2_3;
(function (Abgabe2_3) {
    // Aufgabe 1
    // Alt + Pfeil klammer zu verschieben
    // 'Alt shift und pfeil taste kopieren'
    // strg shift pfeil sachen zu markieren
    // Strg alt mehrere corsair
    function rechteck() {
        let div = document.createElement("div"); /* Element erstellen. Vom Datentyp htmldivelement */
        document.body.appendChild(div); /* Eltern - Kindbeziehung */
        div.style.height = (Math.random() * 500).toString() + "px";
        div.style.width = (Math.random() * 250).toString() + "px";
        div.style.position = "absolute"; //Ändern muss random sein
        div.style.backgroundColor = "#85ccf2";
    }
    for (let i = 0; i < 0; i++) {
        rechteck();
    }
    function handleLoad(_laden) {
        location.reload();
    }
    document.querySelector("#neuladen").addEventListener("click", handleLoad);
    document.querySelector("#hinzufügen").addEventListener("click", rechteck);
    // interface Seite {
    //     farbe: string;
    //     name: string;
    //     preis: number;
    // }
    // class Seite {
    //     name: string;
    //     farbe: string;
    //     preis: number;
    //     constructor(_name: string,_farbe: string,  _preis: number) {
    //         this.name = _name;
    //         this.farbe = _farbe;
    //         this.preis = _preis;
    //     }
})(Abgabe2_3 || (Abgabe2_3 = {}));
//# sourceMappingURL=typescript.js.map