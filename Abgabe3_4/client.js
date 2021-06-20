"use strict";
var Abgabe3_4;
(function (Abgabe3_4) {
    async function datenSenden() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://scarrylarry.herokuapp.com";
        // let url: RequestInfo = "http://localhost:8100";
        url += "/insert";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let answer = await response.text();
        console.log(answer);
    }
    async function dataJSON() {
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
        let show = document.getElementById("sendDataServer");
        show.innerText = JSON.stringify(myJSON);
    }
    async function dataDelete() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://scarrylarry.herokuapp.com";
        // let url: RequestInfo = "http://localhost:8100";
        url += "/delete";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let answer = await response.text();
        console.log(answer);
    }
    let button = document.getElementById("button");
    button.addEventListener("click", datenSenden);
    let buttonJs = document.getElementById("button2");
    buttonJs.addEventListener("click", dataJSON);
    let buttonDelete = document.getElementById("button3");
    buttonDelete.addEventListener("click", dataDelete);
})(Abgabe3_4 || (Abgabe3_4 = {}));
//# sourceMappingURL=client.js.map