namespace Abgabe2_3 {
    // Keine Funktionaltiät#
    // export interface Pizza {
    //     durchmesser: number;
    //     toppings: string;
    //     service: string;
    // }

    export interface Größe {
        durchmesser: number;
        image: string;
    }

    export interface Toppings {
        toppings: string;
        image: string;
    }

    export interface Bestelloptionen {
        service: string;
        image: string;

    }
    export interface Pizza {     //2b) wird erst nächste Woche gebraucht
        größe: Größe;
        toppings: Toppings;
        bestelloptionen: Bestelloptionen;
    }
}