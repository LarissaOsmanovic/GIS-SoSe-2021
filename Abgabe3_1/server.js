"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abgabe3_1 = void 0;
const Http = require("http");
var Abgabe3_1;
(function (Abgabe3_1) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        console.log("C:\Program Files\nodejs\node.exe .\Abgabe3_1\server.js");
    }
    // Schauen Sie sich den Code des Beispielservers an, versuchen Sie zu verstehen was passiert und übernehmen
    // Sie ihn in Ihr Repository. Kommentieren Sie sich die einzelnen Zeilen und beschreiben Sie, was was tut. 
    // Passen Sie den Request Handler so an, dass der query/path string nicht nur auf der Webseite, sondern auch 
    // in der Konsole des Servers ausgegeben wird.
})(Abgabe3_1 = exports.Abgabe3_1 || (exports.Abgabe3_1 = {}));
//# sourceMappingURL=server.js.map