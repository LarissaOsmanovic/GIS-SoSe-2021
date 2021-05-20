namespace Abgabe2_5 {

    export interface Pizzateil {
        option: string;
        image: string;

    }
    export interface Pizza {
        groesse: Pizzateil[];
        service: Pizzateil[];
        toppings: Pizzateil[];
    }


    export let alleTeile: Pizza = {
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
    // let myJSON: string = JSON.stringify(alleTeile);
    // export let myObj: Pizza = JSON.parse(myJSON);
    // console.log(myJSON);
}