import * as Http from "http"; /* importieren  */ 

export namespace Abgabe3_1 {
    console.log("Starting server"); /*Schreiben in der Konsole das der Sever gestartet wird  */ 
    let port: number = Number(process.env.PORT); /* legen eine Variable port an*/ 
    if (!port) /* Wenn  ungleich der Variable */ 
        port = 8100; /* setzen port gleich 8100*/ 

    let server: Http.Server = Http.createServer(); /* Erstellen einen neuen Server*/ 
    server.addListener("request", handleRequest); /*aufrufen */ 
    server.addListener("listening", handleListen); /* */ 
    server.listen(port); /* */ 

    function handleListen(): void { /* */ 
        console.log("Listening"); /* */ 
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
        console.log(_request.url);
    }
}
