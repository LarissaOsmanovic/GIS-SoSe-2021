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
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8"); /*wie in html sind dort meta daten drinne, die antwort die wir bekommen ist vom Typ "text.html"; utf-8 Cordierung */
        _response.setHeader("Access-Control-Allow-Origin", "*"); /*wer alles die Antwort rmpfangen darf. "*" -> jeder und überall darf zu greifen auf die Seite */
        _response.write(_request.url); /* Methode write () schreibt HTML-Ausdrücke oder JavaScript-Code in ein Dokument*/
        _response.end(); /* bewegt den internen Zeiger auf das letzte Element im Array und gibt es aus.*/
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key]);
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
    }
    //Diesen Code innerhalb von einem aktiven Server testen:
    // let adresse: string = 'http://localhost:8080/default.htm?jahr=2017&monat=february';
    // //Adresse parsen (umwandeln):
    // let q = url.parse(adresse, true);
    // /*Die parse Methode gibt ein Objekt zurück, dass die URL Eigenschaften enthält. 
    // So können die fest definierten Eigenschaften einer URL ausgelesen werden:*/
    // console.log(q.host);
    // console.log(q.pathname);
    // console.log(q.search);
    // /*Die query Eigenschaft gibt ein Ojekt zurück, dass alle query-string Parameter als Eigenschaften besitzt. 
    // So können beliebig gesendete Attribute ausgelesen werden:*/
    // var qdata = q.query;
    // console.log(qdata.monat)
})(Abgabe3_2 = exports.Abgabe3_2 || (exports.Abgabe3_2 = {}));
//# sourceMappingURL=server.js.map