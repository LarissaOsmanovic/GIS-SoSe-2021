namespace Abgabe3_4 {
    // name- und value-Attribute als Schlüssel-Werte-Paare zur Verfügung gestellt.
    interface Daten {
        [key: string]: string;
    }

    async function DataHTML(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        // let url: RequestInfo = "https://scarrylarry.herokuapp.com";
        let url: RequestInfo = "http://localhost:8100";
        url += "/html";

        url = url + "?" + query.toString();

        let response: Response = await fetch(url);

        let show: string =  await response.text();
        let display: HTMLParagraphElement = <HTMLDivElement>document.getElementById("sendDataServer");
        display.innerText = show;
    }

    async function DataJSON(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: RequestInfo = "https://scarrylarry.herokuapp.com";
        url += "/json";

        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let myJSON: Daten = await response.json();
        console.log(myJSON);
    
    }

    // async function DataDelete(): Promise<void> {
    //     let formData: FormData = new FormData(document.forms[0]);
    //     // tslint:disable-next-line: no-any
    //     let query: URLSearchParams = new URLSearchParams(<any>formData);
    //     let url: RequestInfo = "https://scarrylarry.herokuapp.com";
    //     url += "/json";

    //     url = url + "?" + query.toString();

    // }

    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", DataHTML);

    let buttonJs: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button2");
    buttonJs.addEventListener("click", DataJSON);

}

