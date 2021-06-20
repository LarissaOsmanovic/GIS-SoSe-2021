import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace Abgabe3_4 {

    // interface Person {
    //     vorname: string;
    //     nachname: string;
    //     adresse: string;
    //     email: string;
    //     alter: number;
    // }

    let forms: Mongo.Collection;

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let databankURL: string = "mongodb+srv://larissa_morena:012345!@clusterscarrylarry.sqvhn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    function startServer(_port: string | number): void {
        let server: Http.Server = Http.createServer();
        console.log("Starting Server");
        server.listen(_port);
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
    }
    startServer(port);


    async function verbindeToDB(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        forms = mongoClient.db("test").collection("personen");
        // let remove: Mongo.Collection = mongoClient.db("test").collection("personen");
        // remove.drop();

        console.log("Database connection ", forms != undefined);
    }
    verbindeToDB(databankURL); // verbinde mich mit der datenbank


    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

        if (url.pathname == "/insert") {
            forms.insertOne(url.query);
        }

        // if (url.pathname == "/find") {
        //     forms.findOne({"name": url.query ["name"], "E-Mail": url.query ["email"], "Nachricht": url.query ["message"]});
        // }


        if (url.pathname == "/json") {
            _response.setHeader("content-type", "application/json");
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
        }

        if (url.pathname == "/delete") {
            forms.deleteOne({ "name": url.query["name"], "E-Mail": url.query["email"], "Nachricht": url.query["message"] });
        }

        _response.end();
    }
}

// C:\"Program Files"\MongoDB\Server\4.4\bin\mongod.exe"

// 8100 local client
// 27017 localhost für datenbank bzw. server