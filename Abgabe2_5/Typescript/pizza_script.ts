namespace Abgabe2_5 {

    async function generatePizza(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url); /* */
        console.log("Response", response);
        let myObj: Pizza = await response.json();
        currentPage(myObj);

    }
    generatePizza("https://larissaosmanovic.github.io/GIS-SoSe-2021/Abgabe2_5/data.json");

    //auf welcher Seite wir uns befinden und Anzeige der Optionen
    function currentPage(_part: Pizza): void {

        if (document.querySelector("title").getAttribute("id") == "seite1") {
            for (let i: number = 0; i < _part.groesse.length; i++) {
                let x: HTMLElement = generate(_part.groesse[i]);

                document.getElementById("anhängen").appendChild(x);

            }
        }

        if (document.querySelector("title").getAttribute("id") == "seite2") {
            for (let i: number = 0; i < _part.toppings.length; i++) {
                let x: HTMLElement = generate(_part.toppings[i]);

                document.getElementById("anhängen2").appendChild(x);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "seite3") {
            for (let i: number = 0; i < _part.service.length; i++) {
                let x: HTMLElement = generate(_part.service[i]);

                document.getElementById("anhängen3").appendChild(x);

            }
        }
    }

    function generate(_part: Pizzateil): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        let image: HTMLImageElement = document.createElement("img");
        image.src = _part.image;
        image.style.width = "250px";
        div.appendChild(image);
        let button: HTMLButtonElement = document.createElement("button");
        let buttonText: Text = document.createTextNode(_part.option);
        button.appendChild(buttonText);
        button.addEventListener("click", storage);
        button.dataset.option = _part.option;
        button.dataset.image = _part.image;

        div.appendChild(button);

        return div;
    }

    // Seite für den Localstorage - die ausgewählte Sache wird gespeichert und aus localstorage gehol
    function storage(_event: MouseEvent): void {
        if (document.querySelector("title").getAttribute("id") == "seite1") {
            let target: HTMLElement = <HTMLElement>_event.target;
            localStorage.setItem("chooseGroesse", target.dataset.option);
            localStorage.setItem("chooseGroessebild", target.dataset.image);
        }

        if (document.querySelector("title").getAttribute("id") == "seite2") {
            let target: HTMLElement = <HTMLElement>_event.target;
            localStorage.setItem("chooseTopping", target.dataset.option);
            localStorage.setItem("chooseToppingbild", target.dataset.image);
        }

        if (document.querySelector("title").getAttribute("id") == "seite3") {
            let target: HTMLElement = <HTMLElement>_event.target;
            localStorage.setItem("chooseService", target.dataset.option);
            localStorage.setItem("chooseServicebild", target.dataset.image);
        }
    }

    // Auswahl anzeigen
    // soll dir auf seite 2 die Auswahl von größe anzeigen
    if (document.querySelector("title").getAttribute("id") == "seite2") {
        let div: HTMLDivElement = document.createElement("div");
        document.getElementById("anzeigen2").appendChild(div);

        let chosenBeschreibung: HTMLElement = document.createElement("p"); // p-Element anlegen
        let text: Text = document.createTextNode("Deine bisherige Auswahl:"); // p-Element befüllen
        chosenBeschreibung.style.textAlign = "center";
        div.appendChild(chosenBeschreibung);
        chosenBeschreibung.appendChild(text);

        let saveGroesse: HTMLImageElement = document.createElement("img"); //bild anlegen
        saveGroesse.src = localStorage.getItem("chooseGroessebild"); //bild aufrufen
        saveGroesse.style.margin = "20px";
        saveGroesse.style.width = "30%";
        div.appendChild(saveGroesse);

        let defaultBild: HTMLImageElement = document.createElement("img"); //leeres bild anlegen
        defaultBild.src = "Bildgalerie/fragezeichen.png"; //bild aufrufen
        defaultBild.style.margin = "20px";
        defaultBild.style.width = "10%";
        div.appendChild(defaultBild);

        let defaultBild2: HTMLImageElement = document.createElement("img"); //leeres bild anlegen
        defaultBild2.src = "Bildgalerie/fragezeichen.png"; //bild aufrufen
        defaultBild2.style.margin = "20px";
        defaultBild2.style.width = "10%";
        div.appendChild(defaultBild2);
    }
    // Seite 3 Größe & Toppings anzeigen
    if (document.querySelector("title").getAttribute("id") == "seite3") {
        let div: HTMLDivElement = document.createElement("div");
        document.getElementById("anzeigen3").appendChild(div);

        let chosenBeschreibung: HTMLElement = document.createElement("p"); // p-Element anlegen
        let text: Text = document.createTextNode("Deine bisherige Auswahl:"); // p-Element befüllen
        chosenBeschreibung.style.textAlign = "center";
        div.appendChild(chosenBeschreibung);
        chosenBeschreibung.appendChild(text);

        let saveGroesse: HTMLImageElement = document.createElement("img"); //bild anlegen
        saveGroesse.src = localStorage.getItem("chooseGroessebild");
        saveGroesse.style.margin = "20px";
        saveGroesse.style.width = "30%";
        div.appendChild(saveGroesse);

        let saveTopping: HTMLImageElement = document.createElement("img"); //bild anlegen
        saveTopping.src = localStorage.getItem("chooseToppingbild"); //bild speichern
        saveTopping.style.margin = "20px";
        saveTopping.style.width = "30%";
        div.appendChild(saveTopping);


        let defaultBild: HTMLImageElement = document.createElement("img"); //leeres bild anlegen
        defaultBild.src = "Bildgalerie/fragezeichen.png";  /*relativer Pfad  */
        defaultBild.style.margin = "20px";
        defaultBild.style.width = "10%";
        div.appendChild(defaultBild);
    }

    // Komplette Auswahl anzeigen 
    if (document.querySelector("title").getAttribute("id") == "seite4") {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let saveGroesse: HTMLImageElement = document.createElement("img");
        saveGroesse.src = localStorage.getItem("chooseGroessebild");
        saveGroesse.style.margin = "15px";
        saveGroesse.style.width = "30%";

        div.appendChild(saveGroesse);

        let saveTopping: HTMLImageElement = document.createElement("img");
        saveTopping.src = localStorage.getItem("chooseToppingbild");
        saveTopping.style.margin = "15px";
        saveTopping.style.width = "30%";

        div.appendChild(saveTopping);

        let saveService: HTMLImageElement = document.createElement("img"); // leeres bild anlegen
        saveService.src = localStorage.getItem("chooseServicebild"); // ausgewähltes bild speichern
        saveService.style.margin = "15px";
        saveService.style.width = "30%";

        div.appendChild(saveService);
    }

    // c
    async function sendAndShow(_url: RequestInfo): Promise<void> {
        let query: URLSearchParams = new URLSearchParams(localStorage);
        console.log(query.toString());
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let result: ServerAnswer = await response.json();
        let display: HTMLDivElement = <HTMLParagraphElement>document.getElementById("serverResponse");
        if (result.error) {
            display.className = "Error";
            display.innerText = result.error;
            display.style.color = "red";
        }
        else {
            display.className = "Message";
            display.innerText = result.message;
            display.style.color = "blue";
        }
    }
    sendAndShow("https://gis-communication.herokuapp.com");
}