namespace Abgabe2_4 {
    // Keine Funktionaltiät

    // let myJSON: string = '{"name": "John", "age": 31, "city": "New York"}';
    // let myObj: PersonInterface = JSON.parse(myJSON);

    // export interface Groesse {
    //     durchmesser: string;
    //     image: string;
    // }

    // export interface Toppings {
    //     toppings: string;
    //     image: string;
    // }

    // export interface Bestelloptionen {
    //     service: string;
    //     image: string;

    // }
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


    export let myJSON: string = `
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
    console.log(myJSON);
    
    export let myObj: Pizza = JSON.parse(myJSON);
}