namespace Abgabe3_1 {
    // name- und value-Attribute als Schlüssel-Werte-Paare zur Verfügung gestellt.

    async function sendDataServer(): Promise<void> {
        let data: FormData = new FormData(document.forms[0]);
        for (let entry of data) {
            console.log(entry);
            console.log("name: " + entry[0]); 
            console.log("value: " + entry[1]);
        }
        let url: RequestInfo = "https://scarrylarry.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>data);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url); 
        // wartet auf eine Antwort
        console.log("Response", response);
        let display: HTMLDivElement = <HTMLParagraphElement>document.getElementById("sendDataServer");
        let show: string =  await response.text();
        display.innerText = show;
    }

    sendDataServer(); //Link App und Github
    let button: HTMLButtonElement = document.createElement("button");
    button.addEventListener("click", sendDataServer);
}
