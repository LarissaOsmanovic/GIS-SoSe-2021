namespace Abgabe2_4 {

    export interface Pizzateil {
        option: string;
        image: string;

    }
    export interface Pizza {
        groesse: Pizzateil[];
        service: Pizzateil[];
        toppings: Pizzateil[];
    }


   //  export let alleTeile: Pizza = {
   //      groesse: [
   //          { option: "small", image: "pizza_groesse.png" },
   //          { option: "medium", image: "pizza_groesse.png" },
   //          { option: "large", image: "pizza_groesse.png" }
   //      ],
   //      toppings: [
   //          { option: "salami", image: "bild.jpeg" },
   //          { option: "mais", image: "bild.jpeg" },
   //          { option: "Champignions", image: "bild.jpeg" }
   //      ],
   //      service: [
   //          { option: "Lieferung", image: "bild.jpeg" },
   //          { option: "Abholung", image: "bild.jpeg" },
   //          { option: "Vorort", image: "bild.jpeg" }
   //      ]
   //  };


}