namespace Abgabe3_4 {

    interface Person {
        vorname: string;
        nachname: string;
        adresse: string;
        email: string;
        alter: number;
    }

    async function datenSenden(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: RequestInfo = "https://scarrylarry.herokuapp.com";
        // let url: RequestInfo = "http://localhost:8100";

        url += "/insert";

        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let answer: string = await response.text();
        console.log(answer);
    }


    async function dataJSON(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: RequestInfo = "https://scarrylarry.herokuapp.com";
        // let url: RequestInfo = "http://localhost:8100";

        url += "/json";

        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let myJSON: Person = await response.json();
        console.log(myJSON);
        let show: HTMLDivElement = <HTMLDivElement>document.getElementById("sendDataServer");
        show.innerText = JSON.stringify(myJSON);
    }

    async function dataDelete(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: RequestInfo = "https://scarrylarry.herokuapp.com";
        // let url: RequestInfo = "http://localhost:8100";

        url += "/delete";

        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let answer: string = await response.text();
        console.log(answer);
    }

    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", datenSenden);

    let buttonJs: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button2");
    buttonJs.addEventListener("click", dataJSON);

    let buttonDelete: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button3");
    buttonDelete.addEventListener("click", dataDelete);
}