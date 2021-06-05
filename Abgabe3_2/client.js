"use strict";
var Abgabe3_2;
(function (Abgabe3_2) {
    async function DataHTML() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://scarrylarry.herokuapp.com";
        // let url: RequestInfo = "http://localhost:8100";
        url += "/html";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let show = await response.text();
        let display = document.getElementById("sendDataServer");
        display.innerText = show;
    }
    async function DataJSON() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://scarrylarry.herokuapp.com";
        // let url: RequestInfo = "http://localhost:8100";
        url += "/json";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let myJSON = await response.json();
        console.log(myJSON);
    }
    let button = document.getElementById("button");
    button.addEventListener("click", DataHTML);
    let buttonJs = document.getElementById("button2");
    buttonJs.addEventListener("click", DataJSON);
})(Abgabe3_2 || (Abgabe3_2 = {}));
//# sourceMappingURL=client.js.map