"use strict";
var Abgabe2_3;
(function (Abgabe2_3) {
    // Aufgabe 2
    // aus dem data.ts script 
    //Aufgabe 3
    //b)
    function generateSizeElement(_größe) {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = _größe.image;
        div.appendChild(image);
        let button = document.createElement("button");
        button.addEventListener("click", showDurchmesser);
        button.dataset.durchmesser = _größe.durchmesser.toString();
        button.innerText = "Durchmesser: " + _größe.durchmesser;
        div.appendChild(button);
        return div;
    }
    for (let i = 0; i < Abgabe2_3.größen.length; i++) {
        let x = generateSizeElement(Abgabe2_3.größen[i]);
        document.body.appendChild(x);
    }
    //c)
    function showDurchmesser(_event) {
        console.log(_event.target);
        let target = _event.target;
        console.log(target.dataset.durchmesser);
        for (let i = 0; i < Abgabe2_3.größen.length; i++) {
            if (Abgabe2_3.größen[i].durchmesser.toString() == target.dataset.durchmesser) {
                console.log(Abgabe2_3.größen[i]);
            }
        }
    }
})(Abgabe2_3 || (Abgabe2_3 = {}));
//# sourceMappingURL=pizza_script.js.map