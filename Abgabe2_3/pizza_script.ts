namespace Abgabe2_3 {
  // Aufgabe 2
  // aus dem data.ts script 
  function chooseSize(): void {
    let imageSmall: HTMLImageElement = document.createElement("img");
    imageSmall.src = größen[0].image;
    document.querySelector("#small").addEventListener("click", chooseSize);

    let imageMedium: HTMLImageElement = document.createElement("img");
    imageMedium.src = größen[1].image;
    document.querySelector("#medium").addEventListener("click", chooseSize);

    let imageLarge: HTMLImageElement = document.createElement("img");
    imageLarge.src = größen[2].image;
    document.querySelector("#large").addEventListener("click", chooseSize);

  }
  console.log(größen[0]);
  console.log(größen[1]);
  console.log(größen[2]);


  for (let i: number = 0; i < größen.length; i++) {
    chooseSize();
  }
  //Aufgabe 3

  //b)
  function generateSizeElement(_größe: Größe): HTMLElement {
    let div: HTMLDivElement = document.createElement("div");
    let image: HTMLImageElement = document.createElement("img");
    image.src = _größe.image;
    div.appendChild(image);
    let button: HTMLButtonElement = document.createElement("button");
    button.addEventListener("click", showDurchmesser);
    button.dataset.durchmesser = _größe.durchmesser.toString();
    button.innerText = "Durchmesser: " + _größe.durchmesser;
    div.appendChild(button);

    return div;
  }
  for (let i: number = 0; i < größen.length; i++) {
    let x: HTMLElement = generateSizeElement(größen[i]);

    document.body.appendChild(x);
  }

  //c)
  function showDurchmesser(_event: MouseEvent): void {
    console.log(_event.target);

    let target: HTMLElement = <HTMLElement>_event.target;
    console.log(target.dataset.durchmesser);

    for (let i: number = 0; i < größen.length; i++) {
      if (größen[i].durchmesser.toString() == target.dataset.durchmesser) {
        console.log(größen[i]);
      }
    }
  }

}