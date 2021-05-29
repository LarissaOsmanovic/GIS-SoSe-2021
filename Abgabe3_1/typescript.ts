namespace Abgabe3_1 {
    // name- und value-Attribute als Schlüssel-Werte-Paare zur Verfügung gestellt.

    async function Data(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response", response);
        let data: FormData = await response.formData();
        console.log(data.get("name"));
        console.log(data.get("adresse"));
        console.log(data.get("email"));

    }
    Data("https://gis-example.herokuapp.com/"); //Link App und Github

}
