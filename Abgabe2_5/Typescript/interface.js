"use strict";
var Abgabe2_5;
(function (Abgabe2_5) {
    Abgabe2_5.alleTeile = {
        groesse: [
            { option: "small", image: "pizza_groesse.png" },
            { option: "medium", image: "pizza_groesse.png" },
            { option: "large", image: "pizza_groesse.png" }
        ],
        toppings: [
            { option: "salami", image: "bild.jpeg" },
            { option: "mais", image: "bild.jpeg" },
            { option: "Champignions", image: "bild.jpeg" }
        ],
        service: [
            { option: "Lieferung", image: "bild.jpeg" },
            { option: "Abholung", image: "bild.jpeg" },
            { option: "Vorort", image: "bild.jpeg" }
        ]
    };
    // let myObj: Pizza =  alleTeile;
    let myJSON = JSON.stringify(Abgabe2_5.alleTeile);
    Abgabe2_5.myObj = JSON.parse(myJSON);
    console.log(myJSON);
})(Abgabe2_5 || (Abgabe2_5 = {}));
//# sourceMappingURL=interface.js.map