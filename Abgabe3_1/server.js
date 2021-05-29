"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abgabe3_1 = void 0;
const Http = require("http"); /* importieren  */
var Abgabe3_1;
(function (Abgabe3_1) {
    console.log("Starting server"); /*Schreiben in der Konsole das der Sever gestartet wird  */
    let port = Number(process.env.PORT); /* legen eine Variable port an*/
    if (!port) /* Wenn  ungleich der Variable */
        port = 8100; /* setzen port gleich 8100*/
    let server = Http.createServer(); /* Erstellen einen neuen Server*/
    server.addListener("request", handleRequest); /*aufrufen */
    server.addListener("listening", handleListen); /* */
    server.listen(port); /* */
    function handleListen() {
        console.log("Listening"); /* */
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
        console.log(_request.url);
    }
})(Abgabe3_1 = exports.Abgabe3_1 || (exports.Abgabe3_1 = {}));
//# sourceMappingURL=server.js.map