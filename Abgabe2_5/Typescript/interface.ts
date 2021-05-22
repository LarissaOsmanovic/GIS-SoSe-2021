namespace Abgabe2_5 {

    export interface Pizzateil {
        option: string;
        image: string;
    }
    
    export interface Pizza {
        groesse: Pizzateil[];
        toppings: Pizzateil[];
        service: Pizzateil[];
    }
    export interface ServerAnswer {
        [key: string]: string; /* Ein allgemeines Array; je nachdem wenn man error oder message rein gibt */  
    }

}