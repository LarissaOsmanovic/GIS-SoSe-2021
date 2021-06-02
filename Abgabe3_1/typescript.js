"use strict";
var Abgabe3_1;
(function (Abgabe3_1) {
    // name- und value-Attribute als Schlüssel-Werte-Paare zur Verfügung gestellt.
    async function sendDataServer() {
        let data = new FormData(document.forms[0]);
        for (let entry of data) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        let url = "https://scarrylarry.herokuapp.com";
        let query = new URLSearchParams(data);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        // wartet auf eine Antwort
        console.log("Response", response);
        let display = document.getElementById("sendDataServer");
        let show = await response.text();
        display.innerText = show;
    }
    sendDataServer(); //Link App und Github
    let button = document.createElement("button");
    button.addEventListener("click", sendDataServer);
})(Abgabe3_1 || (Abgabe3_1 = {}));
//# sourceMappingURL=typescript.js.map