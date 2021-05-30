namespace Abgabe3_1 {
    // name- und value-Attribute als Schlüssel-Werte-Paare zur Verfügung gestellt.

    async function sendDataServer(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response", response);
        let data: FormData = await response.formData();
        data.get("name");
        data.get("adresse");
        data.get("email");

    }
    sendDataServer("https://scarrylarry.herokuapp.com"); //Link App und Github

}
