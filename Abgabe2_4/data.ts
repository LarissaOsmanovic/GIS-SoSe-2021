namespace Abgabe2_4 {
    
    export let myJSON: string = `
        {
        "groesse":[
           {
              "option":"Small",
              "image":"pizza_groesse.png"
           },
           {
              "option":"Medium",
              "image":"pizza_groesse.png"
           },
           {
              "option":"Large",
              "image":"pizza_groesse.png"
           }
        ],
        "toppings":[
           {
              "option":"Salami",
              "image":"salami.jpg"
           },
           {
              "option":"Mais",
              "image":"mais.jpg"
           },
           {
              "option":"Champignons",
              "image":"champions.jpg"
           }
        ],
        "service":[
           {
              "option":"Lieferung",
              "image":"lieferung.png"
           },
           {
              "option":"Abholung",
              "image":"abholung.png"
           },
           {
              "option":"Vorort",
              "image":"vorort.png"
           }
        ]
     }`;
   //  Console.log das gestrin.. JSON kann ichmit element untersuche, console das gaze in einen JSON Formatter reinwerfen
    console.log(myJSON);
    
    export let myObj: Pizza = JSON.parse(myJSON);
}