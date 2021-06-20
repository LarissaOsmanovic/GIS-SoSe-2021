"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abgabe3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Abgabe3_4;
(function (Abgabe3_4) {
    // interface Person {
    //     vorname: string;
    //     nachname: string;
    //     adresse: string;
    //     email: string;
    //     alter: number;
    // }
    let forms;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databankURL = "mongodb+srv://larissa_morena:012345!@clusterscarrylarry.sqvhn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Starting Server");
        server.listen(_port);
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
    }
    startServer(port);
    async function verbindeToDB(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        forms = mongoClient.db("test").collection("personen");
        // let remove: Mongo.Collection = mongoClient.db("test").collection("personen");
        // remove.drop();
        console.log("Database connection ", forms != undefined);
    }
    verbindeToDB(databankURL); // verbinde mich mit der datenbank
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        let url = Url.parse(_request.url, true);
        if (url.pathname == "/insert") {
            forms.insertOne(url.query);
        }
        // if (url.pathname == "/find") {
        //     forms.findOne({"name": url.query ["name"], "E-Mail": url.query ["email"], "Nachricht": url.query ["message"]});
        // }
        if (url.pathname == "/json") {
            _response.setHeader("content-type", "application/json");
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        if (url.pathname == "/delete") {
            forms.deleteOne({ "name": url.query["name"], "E-Mail": url.query["email"], "Nachricht": url.query["message"] });
        }
        _response.end();
    }
})(Abgabe3_4 = exports.Abgabe3_4 || (exports.Abgabe3_4 = {}));
// C:\"Program Files"\MongoDB\Server\4.4\bin\mongod.exe"
// 8100 local client
// 27017 localhost für datenbank bzw. server
//# sourceMappingURL=server.js.map