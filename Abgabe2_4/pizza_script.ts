namespace Abgabe2_4 {
    // Aufgabe 2
    // aus dem data.ts script 

    function generatePizzateil(_teil: Pizzateil): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        let image: HTMLImageElement = document.createElement("img");
        image.src = _teil.image;
        div.appendChild(image);
        let button: HTMLButtonElement = document.createElement("button");
        button.addEventListener("click", showDurchmesser);
        button.dataset.option = myObj.groesse.toString();
        button.innerText = "option: " + _teil.option;
        div.appendChild(button);
        // button.onclick

        return div;
    }

    function whichSite(): void {

        if (myObj.groesse) {
            window.open("https://larissaosmanovic.github.io/GIS-SoSe-2021/Abgabe2_4/groesse");
        }
       else if (myObj.toppings) {
            window.open("https://larissaosmanovic.github.io/GIS-SoSe-2021/Abgabe2_4/toppings");
        }
       else if (myObj.service) {
            window.open("https://larissaosmanovic.github.io/GIS-SoSe-2021/Abgabe2_4/service");
        }
        // else if (bestelluebersicht) {
        //     window.open("https://larissaosmanovic.github.io/GIS-SoSe-2021/Abgabe2_4/bestelluebersicht");
        // }    
    }
    whichSite();

    function ladenImages(): void {
        // image = typeof message !== 'undefined' ? image : '?';
        // localStorage.setItem("image",  "default.png");

        let image: string = localStorage.getItem("pizza_groesse.png");

   
    // local storages laden
    // default mit fragezeichen
    }

    function auswahlSpeichern(): void {

    }
    // schreiben damit es die auswahl speichert mit url
    for (let i: number = 0; i < myObj.groesse.length; i++) {
        let x: HTMLElement = generatePizzateil(myObj.groesse[i]);

        document.getElementById("anhängen").appendChild(x);
    }
    localStorage.setItem("image", "pizza_groesse.png");


    // for (let i: number = 0; i < myObj.toppings.length; i++) {
    //     let y: HTMLElement = generatePizzateil(myObj.toppings[i]);
    //     document.getElementById("anhängen").appendChild(y);
    // }
    // localStorage.setItem("image", ".png");

    // for (let i: number = 0; i < myObj.service.length; i++) {
    //     let x: HTMLElement = generatePizzateil(myObj.service[i]);

    //     document.getElementById("anhängen").appendChild(x);
    // }
    // localStorage.setItem("image", ".png");

    function showDurchmesser(_event: MouseEvent): void {
        console.log(_event.target);

        let target: HTMLElement = <HTMLElement>_event.target;
        console.log(target.dataset.option);

        for (let i: number = 0; i < myObj.groesse.length; i++) {
            if (myObj.groesse[i].toString() == target.dataset.option) {
                console.log(myObj.groesse[i]);
            }
        }
    }
}