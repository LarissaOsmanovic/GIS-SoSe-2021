"use strict";
var Abgabe3_4;
(function (Abgabe3_4) {
    async function DataHTML() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        // let url: RequestInfo = "https://scarrylarry.herokuapp.com";
        let url = "http://localhost:8100";
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
        url += "/json";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let myJSON = await response.json();
        console.log(myJSON);
    }
    // async function DataDelete(): Promise<void> {
    //     let formData: FormData = new FormData(document.forms[0]);
    //     // tslint:disable-next-line: no-any
    //     let query: URLSearchParams = new URLSearchParams(<any>formData);
    //     let url: RequestInfo = "https://scarrylarry.herokuapp.com";
    //     url += "/json";
    //     url = url + "?" + query.toString();
    // }
    let button = document.getElementById("button");
    button.addEventListener("click", DataHTML);
    let buttonJs = document.getElementById("button2");
    buttonJs.addEventListener("click", DataJSON);
})(Abgabe3_4 || (Abgabe3_4 = {}));
//# sourceMappingURL=client.js.map