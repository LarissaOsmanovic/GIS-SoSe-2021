"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abgabe3_1 = void 0;
const Http = require("http"); /* importieren  */
var Abgabe3_1;
(function (Abgabe3_1) {
    console.log("Starting server"); /*Schreiben in der Konsole das der Sever gestartet wird  */
    let port = Number(process.env.PORT); /* legen eine Variable port an*/
    if (!port)
        port = 8100; /* Browser lokal testen*/
    let server = Http.createServer(); /* Erstellen einen neuen Server*/
    server.addListener("request", handleRequest); /* Anfrage zur der Function handleRequest (Aufruf) */
    server.addListener("listening", handleListen); /* Antwort von der Function handleRequest (hört zu) */
    server.listen(port); /* kümmert sich um die Anfragen */
    function handleListen() {
        console.log("Listening"); /*In der Konsole listening ausgeben, wird nochmal in Zeile 11 aufgerufen*/
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8"); /*wie in html sind dort meta daten drinne, die antwort die wir bekommen ist vom Typ "text.html"; utf-8 Cordierung */
        _response.setHeader("Access-Control-Allow-Origin", "*"); /*wer alles die Antwort rmpfangen darf. "*" -> jeder und überall darf zu greifen auf die Seite */
        _response.write(_request.url); /* Methode write () schreibt HTML-Ausdrücke oder JavaScript-Code in ein Dokument*/
        _response.end(); /* bewegt den internen Zeiger auf das letzte Element im Array und gibt es aus.*/
        console.log(_request.url); /* In der Konsole*/
    }
})(Abgabe3_1 = exports.Abgabe3_1 || (exports.Abgabe3_1 = {}));
// Port (Metapher - Hafen oder Klappe eines Schiffes) = Daten werden empfangen und versendet 
// addlistner -> Eventlistner
//# sourceMappingURL=server.js.map