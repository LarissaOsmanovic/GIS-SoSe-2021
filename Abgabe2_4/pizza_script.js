"use strict";
var Abgabe2_4;
(function (Abgabe2_4) {
    // Aufgabe 2
    // aus dem data.ts script 
    function generatePizzateil(_teil) {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = _teil.image;
        div.appendChild(image);
        let button = document.createElement("button");
        button.addEventListener("click", showDurchmesser);
        button.dataset.option = Abgabe2_4.myObj.groesse.toString();
        button.innerText = "option: " + _teil.option;
        div.appendChild(button);
        // button.onclick
        return div;
    }
    function fensterOeffnen() {
        window.open("file:///C:/Users/Laris/OneDrive/Dokumente/GitHub/GIS-SoSe-2021/Abgabe2_4/toppings.html");
        for (let i = 0; i < Abgabe2_4.myObj.groesse.length; i++) {
            let x = generatePizzateil(Abgabe2_4.myObj.groesse[i]);
            document.getElementById("anhängen").appendChild(x);
        }
        localStorage.setItem("image", "pizza_groesse.png");
    }
    for (let i = 0; i < Abgabe2_4.myObj.toppings.length; i++) {
        let y = generatePizzateil(Abgabe2_4.myObj.toppings[i]);
        document.getElementById("anhängen").appendChild(y);
    }
    localStorage.setItem("image", ".png");
    for (let i = 0; i < Abgabe2_4.myObj.service.length; i++) {
        let x = generatePizzateil(Abgabe2_4.myObj.service[i]);
        document.getElementById("anhängen").appendChild(x);
    }
    localStorage.setItem("image", ".png");
    function showDurchmesser(_event) {
        console.log(_event.target);
        let target = _event.target;
        console.log(target.dataset.option);
        for (let i = 0; i < Abgabe2_4.myObj.groesse.length; i++) {
            if (Abgabe2_4.myObj.groesse[i].toString() == target.dataset.option) {
                console.log(Abgabe2_4.myObj.groesse[i]);
            }
        }
    }
})(Abgabe2_4 || (Abgabe2_4 = {}));
//# sourceMappingURL=pizza_script.js.map