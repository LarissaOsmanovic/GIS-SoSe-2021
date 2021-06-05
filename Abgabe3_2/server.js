"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abgabe3_2 = void 0;
const Http = require("http"); /* importieren  */
const Url = require("url");
var Abgabe3_2;
(function (Abgabe3_2) {
    console.log("Starting server"); /*Schreiben in der Konsole das der Sever gestartet wird  */
    let port = Number(process.env.PORT); /* legen eine Variable port an*/
    if (!port) /*port = 8100", falls vorher noch kein port definiert ist*/
        port = 8100; /* Browser lokal testen*/
    let server = Http.createServer(); /* Erstellen einen neuen Server*/
    server.addListener("request", handleRequest); /*So bald eine Anfrage kommt ruft er die handlerRequest auf*/
    server.addListener("listening", handleListen); /* So bald eine Antwort kommt ruft er die handleRequest auf (hört zu) */
    server.listen(port); /* kümmert sich um die Anfragen */
    function handleListen() {
        console.log("Listening"); /*In der Konsole listening ausgeben, wird nochmal in Zeile 11 aufgerufen*/
    }
    function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let _url = Url.parse(_request.url, true);
        if (_url.pathname == "/html") {
            for (let key in _url.query) {
                _response.write(key + ":" + _url.query[key] + ", " + " ");
            }
        }
        if (_url.pathname == "/json") {
            let jsonString = JSON.stringify(_url.query);
            console.log(_url.query);
            _response.write(jsonString);
        }
        _response.end();
    }
})(Abgabe3_2 = exports.Abgabe3_2 || (exports.Abgabe3_2 = {}));
//# sourceMappingURL=server.js.map