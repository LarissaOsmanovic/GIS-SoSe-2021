"use strict";
var Abgabe2_5;
(function (Abgabe2_5) {
    async function generatePizza(_url) {
        let response = await fetch(_url); /* */
        let myObj = await response.json();
        console.log(myObj);
        if (document.querySelector("title").getAttribute("id") == "site1") {
            for (let i = 0; i < myObj.groesse.length; i++) {
                let x = myObj.groesse[i];
                console.log(x);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "site2") {
            for (let i = 0; i < myObj.toppings.length; i++) {
                let x = myObj.toppings[i];
                console.log(x);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "site3") {
            for (let i = 0; i < myObj.service.length; i++) {
                let x = myObj.service[i];
                console.log(x);
            }
        }
    }
    generatePizza("https://larissaosmanovic.github.io/GIS-SoSe-2021/Abgabe2_5/data.json");
    function generateButton(_part) {
        let button = document.createElement("button");
        let buttonText = document.createTextNode(_part.option);
        button.appendChild(buttonText);
        // button.addEventListener("click", storage);
        button.dataset.option = _part.option;
        button.dataset.image = _part.image;
        return button;
    }
    // communicate("https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits") ;
    // async function communicate(_url: RequestInfo): Promise<void> {
    //     let response: Response = await fetch(_url);
    //     // = await text("");
    //     console.log("Response", response);
    // }
    // console.log("start");
    // communicate("https://hs-furtwangen.github.io/GIS-SoSe-2021/content/2-chapter/L2.5/test.txt");
    // console.log("ende");
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
    // c) Fügen Sie der “Display Seite” (die in der alle ausgewählten Dinge gemeinsam am Ende angezeigt werden) 
    // eine Funktion hinzu, welche die Daten, die im Browsercache gespeichert sind, an die URL https://gis-communication.herokuapp.com 
    // verschickt und dessen JSON Antwort wohlformatiert auf Ihrer Webseite anzeigt. 
    // Die Antwort auf die erste Anfrage kann unter Umständen bis zu 15 Sekunden dauern, da der Server erst 
    // hochfahren muss
    async function displaySeite(_url) {
        let query = new URLSearchParams(storage);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        console.log(response);
    }
    displaySeite("https://gis-communication.herokuapp.com");
    // // Get data from the cache.
    // async function getCachedData(cacheName, url) {
    //     let cacheStorage = await caches.open(cacheName);
    //     let cachedResponse = await cacheStorage.match(url);
    //     // if (!cachedResponse || !cachedResponse.ok) {
    //     //     return false;
    //     // }
    //     return await cachedResponse.json();
    // }
    function saveAndShow(_url) {
        let promise = fetch(_url);
        // establish the functions to call when communications 1. succeeds, 2. fails
        promise.then(handleSuccess, handleFailure);
    }
    // saveAndShow("https://larissaosmanovic.github.io/GIS-SoSe-2021/Abgabe2_5/bestelluebersicht.html");
    function handleFailure(_response) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let p = document.createElement("p");
        let textP = document.createTextNode("Ihre Bestellung ist fehlgeschlagen. Versuchen Sie es erneut.");
        p.style.color = "red";
        div.appendChild(p);
        p.appendChild(textP);
    }
    function handleSuccess(_response) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let pSuccess = document.createElement("p");
        let textSuccess = document.createTextNode("Ihre Bestellung ist eingegangen.Beehren Sie uns bald wieder!!");
        div.appendChild(pSuccess);
        pSuccess.appendChild(textSuccess);
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
})(Abgabe2_5 || (Abgabe2_5 = {}));
//# sourceMappingURL=pizza_script.js.map