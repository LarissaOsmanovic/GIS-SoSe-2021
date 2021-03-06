"use strict";
var Abgabe2_4;
(function (Abgabe2_4) {
    // Aufgabe 2
    // aus dem data.ts script 
    function generatePizzateil(_teil) {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = _teil.image;
        image.style.margin = "50px";
        image.style.width = "30%";
        div.appendChild(image);
        let button = document.createElement("button");
        let buttonText = document.createTextNode(_teil.option);
        button.appendChild(buttonText);
        button.addEventListener("click", storage);
        button.dataset.option = _teil.option;
        button.dataset.image = _teil.image;
        div.appendChild(button);
        return div;
    }
    if (document.querySelector("title").getAttribute("id") == "seite1") {
        for (let i = 0; i < Abgabe2_4.myObj.groesse.length; i++) {
            let x = generatePizzateil(Abgabe2_4.myObj.groesse[i]);
            document.getElementById("anhängen").appendChild(x);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "seite2") {
        for (let i = 0; i < Abgabe2_4.myObj.toppings.length; i++) {
            let x = generatePizzateil(Abgabe2_4.myObj.toppings[i]);
            document.getElementById("anhängen2").appendChild(x);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "seite3") {
        for (let i = 0; i < Abgabe2_4.myObj.service.length; i++) {
            let x = generatePizzateil(Abgabe2_4.myObj.service[i]);
            document.getElementById("anhängen3").appendChild(x);
        }
    }
    // Seite für den Localstorage - die ausgewählte Sache wird gespeichert und aus localstorage gehol
    function storage(_event) {
        if (document.querySelector("title").getAttribute("id") == "seite1") {
            let target = _event.target;
            localStorage.setItem("chooseGroesse", target.dataset.option);
            localStorage.setItem("chooseGroessebild", target.dataset.image);
        }
        if (document.querySelector("title").getAttribute("id") == "seite2") {
            let target = _event.target;
            localStorage.setItem("chooseTopping", target.dataset.option);
            localStorage.setItem("chooseToppingbild", target.dataset.image);
        }
        if (document.querySelector("title").getAttribute("id") == "seite3") {
            let target = _event.target;
            localStorage.setItem("chooseService", target.dataset.option);
            localStorage.setItem("chooseServicebild", target.dataset.image);
        }
    }
    // Auswahl anzeigen
    // soll dir auf seite 2 die Auswahl von größe anzeigen
    if (document.querySelector("title").getAttribute("id") == "seite2") {
        let div = document.createElement("div");
        document.getElementById("anhängen2").appendChild(div);
        let chosenBeschreibung = document.createElement("p"); // p-Element anlegen
        let text = document.createTextNode("Deine bisherige Auswahl:"); // p-Element befüllen
        chosenBeschreibung.style.textAlign = "center";
        div.appendChild(chosenBeschreibung);
        chosenBeschreibung.appendChild(text);
        let saveGroesse = document.createElement("img"); //bild anlegen
        saveGroesse.src = localStorage.getItem("chooseGroessebild"); //bild aufrufen
        saveGroesse.style.margin = "20px";
        saveGroesse.style.width = "30%";
        div.appendChild(saveGroesse);
        let defaultBild = document.createElement("img"); //leeres bild anlegen
        defaultBild.src = "fragezeichen.png"; //bild aufrufen
        defaultBild.style.margin = "20px";
        defaultBild.style.width = "10%";
        div.appendChild(defaultBild);
        let defaultBild2 = document.createElement("img"); //leeres bild anlegen
        defaultBild2.src = "fragezeichen.png"; //bild aufrufen
        defaultBild2.style.margin = "20px";
        defaultBild2.style.width = "10%";
        div.appendChild(defaultBild2);
    }
    // Seite 3 Größe & Toppings anzeigen
    if (document.querySelector("title").getAttribute("id") == "seite3") {
        let div = document.createElement("div");
        document.getElementById("anhängen3").appendChild(div);
        let chosenBeschreibung = document.createElement("p"); // p-Element anlegen
        let text = document.createTextNode("Deine bisherige Auswahl:"); // p-Element befüllen
        chosenBeschreibung.style.textAlign = "center";
        div.appendChild(chosenBeschreibung);
        chosenBeschreibung.appendChild(text);
        let saveGroesse = document.createElement("img"); //bild anlegen
        saveGroesse.src = localStorage.getItem("chooseGroessebild");
        saveGroesse.style.margin = "20px";
        saveGroesse.style.width = "30%";
        div.appendChild(saveGroesse);
        let saveTopping = document.createElement("img"); //bild anlegen
        saveTopping.src = localStorage.getItem("chooseToppingbild"); //bild speichern
        saveTopping.style.margin = "20px";
        saveTopping.style.width = "30%";
        div.appendChild(saveTopping);
        let defaultBild = document.createElement("img"); //leeres bild anlegen
        defaultBild.src = "fragezeichen.png"; //bild aufrufen
        defaultBild.style.margin = "20px";
        defaultBild.style.width = "10%";
        div.appendChild(defaultBild);
    }
    // Komplette Auswahl anzeigen 
    if (document.querySelector("title").getAttribute("id") == "seite4") {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let saveGroesse = document.createElement("img");
        saveGroesse.src = localStorage.getItem("chooseGroessebild");
        saveGroesse.style.margin = "15px";
        saveGroesse.style.width = "30%";
        div.appendChild(saveGroesse);
        let saveTopping = document.createElement("img");
        saveTopping.src = localStorage.getItem("chooseToppingbild");
        saveTopping.style.margin = "15px";
        saveTopping.style.width = "30%";
        div.appendChild(saveTopping);
        let saveService = document.createElement("img"); // leeres bild anlegen
        saveService.src = localStorage.getItem("chooseServicebild"); // ausgewähltes bild speichern
        saveService.style.margin = "15px";
        saveService.style.width = "30%";
        div.appendChild(saveService);
    }
})(Abgabe2_4 || (Abgabe2_4 = {}));
//# sourceMappingURL=pizza_script.js.map