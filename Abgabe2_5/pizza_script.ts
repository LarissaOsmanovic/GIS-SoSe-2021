namespace Abgabe2_5 {

    async function generatePizzateil(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        // console.log("Response", response);
        let obj: Pizza = await response.json();
        console.log(obj);


        generatePizzateil("https://sasa2031.github.io/GIS-SoSe-2021/Aufgabe_2/Aufgabe_2.5/size.html");


        if (document.querySelector("title").getAttribute("id") == "site1") {
            for (let i: number = 0; i < obj.groesse.length; i++) {
                let x: Pizzateil = obj.groesse[i];
            }
        }

        if (document.querySelector("title").getAttribute("id") == "site2") {
            for (let i: number = 0; i < obj.toppings.length; i++) {
                
                let x: Pizzateil = obj.toppings[i];
            }
        }
        
        if (document.querySelector("title").getAttribute("id") == "site3") {
            for (let i: number = 0; i < obj.service.length; i++) {
                let x: Pizzateil = obj.service[i];

            }
        }
    }

    function generateButton(_part: Pizzateil): HTMLElement {
        let button: HTMLButtonElement = document.createElement("button");
        let buttonText: Text = document.createTextNode(_part.option);
        button.appendChild(buttonText);
        // button.addEventListener("click", storage);
        button.dataset.option = _part.option;
        button.dataset.image = _part.image;

        return button;
    }
    // async function communicate(_url: RequestInfo): Promise<void> {
    //    let response: Response= await fetch(_url);
    //     console.log("Start", response);
    //  let e: genertaePizzateil = await response.json(); 
    // ODER e: Pizza
    // }
    // communicate("https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits") ;
    // async function communicate(_url: RequestInfo): Promise<void> {
    //     let response: Response = await fetch(_url);
    //     // = await text("");
    //     console.log("Response", response);

    // }
    // console.log("start");
    // communicate("https://hs-furtwangen.github.io/GIS-SoSe-2021/content/2-chapter/L2.5/test.txt");
    // console.log("ende");

   
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
        document.getElementById("anhängen2").appendChild(div);

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
        defaultBild.src = "fragezeichen.png"; //bild aufrufen
        defaultBild.style.margin = "20px";
        defaultBild.style.width = "10%";
        div.appendChild(defaultBild);

        let defaultBild2: HTMLImageElement = document.createElement("img"); //leeres bild anlegen
        defaultBild2.src = "fragezeichen.png"; //bild aufrufen
        defaultBild2.style.margin = "20px";
        defaultBild2.style.width = "10%";
        div.appendChild(defaultBild2);
    }
    // Seite 3 Größe & Toppings anzeigen
    if (document.querySelector("title").getAttribute("id") == "seite3") {
        let div: HTMLDivElement = document.createElement("div");
        document.getElementById("anhängen3").appendChild(div);

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
        defaultBild.src = "fragezeichen.png"; //bild aufrufen
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

}