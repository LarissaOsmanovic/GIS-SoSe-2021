namespace Abgabe2_3 {
    // Aufgabe 1
    // Alt + Pfeil klammer zu verschieben
    // 'Alt shift und pfeil taste kopieren'
    // strg shift pfeil sachen zu markieren
    // Strg alt pfeil = mehrere corsair
    // strg enter neue zeile

    // data.set 
    // asso array bestimmen den schlüsselwort selber
    function rechteck(): void {
        let div: HTMLDivElement = document.createElement("div"); /* Element erstellen. Vom Datentyp htmldivelement */
        document.body.appendChild(div); /* Eltern - Kindbeziehung */
        div.style.height = (Math.random() * 500).toString() + "px";
        div.style.width = (Math.random() * 250).toString() + "px";
        div.style.position = "absolute"; //Ändern muss random sein
        div.style.backgroundColor = "#85ccf2";
        div.style.position = "relative";
        div.style.marginLeft = (Math.random() * 50).toString() + "px";
        div.style.marginTop = (Math.random() * 50).toString() + "px";
        div.style.marginRight = (Math.random() * 50).toString() + "px";
        div.style.marginBottom = (Math.random() * 50).toString() + "px";
    }

    for (let i: number = 0; i < 0; i++) {
        rechteck();
    }

    function handleLoad(_laden: Event): void {
        location.reload();
    }

    document.querySelector("#neuladen").addEventListener("click", handleLoad);


    document.querySelector("#hinzufügen").addEventListener("click", rechteck);

}