"use strict";
var Abgabe2_4;
(function (Abgabe2_4) {
    // Keine Funktionaltiät
    Abgabe2_4.alleTeile = {
        groesse: [
            { option: "20", image: "pizza_groesse.png" },
            { option: "25", image: "pizza_groesse.png" },
            { option: "30", image: "pizza_groesse.png" }
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
    Abgabe2_4.myJSON = `
        {
        "groesse":[
           {
              "option":"20",
              "image":"pizza_groesse.png"
           },
           {
              "option":"25",
              "image":"pizza_groesse.png"
           },
           {
              "option":"30",
              "image":"pizza_groesse.png"
           }
        ],
        "toppings":[
           {
              "option":"salami",
              "image":"bild.jpeg"
           },
           {
              "option":"mais",
              "image":"bild.jpeg"
           },
           {
              "option":"Champignions",
              "image":"bild.jpeg"
           }
        ],
        "service":[
           {
              "option":"Lieferung",
              "image":"bild.jpeg"
           },
           {
              "option":"Abholung",
              "image":"bild.jpeg"
           },
           {
              "option":"Vorort",
              "image":"bild.jpeg"
           }
        ]
     }`;
    console.log(Abgabe2_4.myJSON);
    Abgabe2_4.myObj = JSON.parse(Abgabe2_4.myJSON);
})(Abgabe2_4 || (Abgabe2_4 = {}));
//# sourceMappingURL=interface.js.map