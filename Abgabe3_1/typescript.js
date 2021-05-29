"use strict";
var Abgabe3_1;
(function (Abgabe3_1) {
    // name- und value-Attribute als Schlüssel-Werte-Paare zur Verfügung gestellt.
    async function Data(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        let data = await response.formData();
        console.log(data.get("name"));
        console.log(data.get("adresse"));
        console.log(data.get("email"));
    }
    Data("https://scarrylarry.herokuapp.com"); //Link App und Github
})(Abgabe3_1 || (Abgabe3_1 = {}));
//# sourceMappingURL=typescript.js.map