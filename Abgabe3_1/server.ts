import * as Http from "http"; /* importieren  */ 

export namespace Abgabe3_1 {
    console.log("Starting server"); /*Schreiben in der Konsole das der Sever gestartet wird  */ 
    let port: number = Number(process.env.PORT); /* legen eine Variable port an*/ 
    if (!port) 
        port = 8100; /* Browser lokal testen*/ 

    let server: Http.Server = Http.createServer(); /* Erstellen einen neuen Server*/ 
    server.addListener("request", handleRequest); /*So bald eine Anfrage kommt ruft er die handlerRequest auf*/ 
    server.addListener("listening", handleListen); /* So bald eine Antwort kommt ruft er die handleRequest auf (hört zu) */ 
    server.listen(port); /* kümmert sich um die Anfragen */ 

    function handleListen(): void { 
        console.log("Listening");  /*In der Konsole listening ausgeben, wird nochmal in Zeile 11 aufgerufen*/
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8"); /*wie in html sind dort meta daten drinne, die antwort die wir bekommen ist vom Typ "text.html"; utf-8 Cordierung */
        _response.setHeader("Access-Control-Allow-Origin", "*"); /*wer alles die Antwort rmpfangen darf. "*" -> jeder und überall darf zu greifen auf die Seite */ 
        _response.write(_request.url); /* Methode write () schreibt HTML-Ausdrücke oder JavaScript-Code in ein Dokument*/ 
        _response.end(); /* bewegt den internen Zeiger auf das letzte Element im Array und gibt es aus.*/ 
        console.log(_request.url); /* In der Konsole*/ 
    }
}

// Port (Metapher - Hafen oder Klappe eines Schiffes) = Daten werden empfangen und versendet 
// addlistner -> Eventlistner
 