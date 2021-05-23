"use strict";
var Abgabe2_5;
(function (Abgabe2_5) {
    async function generatePizza(_url) {
        let response = await fetch(_url); /* */
        console.log("Response", response);
        let myObj = await response.json();
        currentPage(myObj);
    }
    generatePizza("https://larissaosmanovic.github.io/GIS-SoSe-2021/Abgabe2_5/data.json");
    //auf welcher Seite wir uns befinden und Anzeige der Optionen
    function currentPage(_part) {
        if (document.querySelector("title").getAttribute("id") == "seite1") {
            for (let i = 0; i < _part.groesse.length; i++) {
                let x = generate(_part.groesse[i]);
                document.getElementById("anhängen").appendChild(x);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "seite2") {
            for (let i = 0; i < _part.toppings.length; i++) {
                let x = generate(_part.toppings[i]);
                document.getElementById("anhängen2").appendChild(x);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "seite3") {
            for (let i = 0; i < _part.service.length; i++) {
                let x = generate(_part.service[i]);
                document.getElementById("anhängen3").appendChild(x);
            }
        }
    }
    function generate(_part) {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = _part.image;
        image.style.width = "250px";
        div.appendChild(image);
        let button = document.createElement("button");
        let buttonText = document.createTextNode(_part.option);
        button.appendChild(buttonText);
        button.addEventListener("click", storage);
        button.dataset.option = _part.option;
        button.dataset.image = _part.image;
        div.appendChild(button);
        return div;
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
        document.getElementById("anzeigen2").appendChild(div);
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
        defaultBild.src = "Bildgalerie/fragezeichen.png"; //bild aufrufen
        defaultBild.style.margin = "20px";
        defaultBild.style.width = "10%";
        div.appendChild(defaultBild);
        let defaultBild2 = document.createElement("img"); //leeres bild anlegen
        defaultBild2.src = "Bildgalerie/fragezeichen.png"; //bild aufrufen
        defaultBild2.style.margin = "20px";
        defaultBild2.style.width = "10%";
        div.appendChild(defaultBild2);
    }
    // Seite 3 Größe & Toppings anzeigen
    if (document.querySelector("title").getAttribute("id") == "seite3") {
        let div = document.createElement("div");
        document.getElementById("anzeigen3").appendChild(div);
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
        defaultBild.src = "Bildgalerie/fragezeichen.png"; /*relativer Pfad  */
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
    // c
    async function sendData(_url) {
        let query = new URLSearchParams(localStorage);
        console.log(query.toString());
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let result = await response.json();
        let display = document.getElementById("serverResponse");
        if (result.error) {
            display.className = "Error";
            display.innerText = result.error;
            display.style.color = "red";
        }
        else {
            display.className = "Message";
            display.innerText = result.message;
            display.style.color = "red";
        }
    }
    sendData("https://gis-communication.herokuapp.com");
})(Abgabe2_5 || (Abgabe2_5 = {}));
//# sourceMappingURL=pizza_script.js.map