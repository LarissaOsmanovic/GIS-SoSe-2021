// import * as Http from "http"; /* importieren  */ 

// export namespace Abgabe3_1 {
//     console.log("Starting server"); /*Schreiben in der Konsole das der Sever gestartet wird  */ 
//     let port: number = Number(process.env.PORT); /* legen eine Variable port an*/ 
//     if (!port) 
//         port = 8100; /* Browser lokal testen*/ 

//     let server: Http.Server = Http.createServer(); /* Erstellen einen neuen Server*/ 
//     server.addListener("request", handleRequest); /*So bald eine Anfrage kommt ruft er die handlerRequest auf*/ 
//     server.addListener("listening", handleListen); /* So bald eine Antwort kommt ruft er die handleRequest auf (hört zu) */ 
//     server.listen(port); /* kümmert sich um die Anfragen */ 

//     function handleListen(): void { 
//         console.log("Listening");  /*In der Konsole listening ausgeben, wird nochmal in Zeile 11 aufgerufen*/
//     }

//    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
//         _response.setHeader("content-type", "text/html; charset=utf-8");
//         _response.setHeader("Access-Control-Allow-Origin", "*");
//         let _url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

//         if (_url.pathname == "/html") {
//             for (let key in _url.query) {
//                 _response.write("<div>" + key + ":" + _url.query[key] + "</div>"); /* BR TEXT*/
//                 // Nichts besser eingefallen als das Komma, aber immer noch besser br 
//             }
//         }

//         if (_url.pathname == "/json") {
//             _response.setHeader("content-type", "application/json");
//             let jsonString: string = JSON.stringify(_url.query);
//             console.log(_url.query);
//             _response.write(jsonString);
//         }

//         _response.end();
//     }
// }


 