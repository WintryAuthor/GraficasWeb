let modoActual = true;
let selectedLevel = 1;

const modo = document.getElementById("gameMode");
const leftTor = document.getElementById("leftTor");
const rightTor = document.getElementById("rightTor");
const descripcion = document.getElementById("descripcion");
const portadas = document.querySelectorAll(".level-image");
const menu = document.getElementById("menuPrincipal");

const DescripcionNivewl = {
    1: "Es un ambiente natural con una gran montaña en medio del mapa con un camino en espiral para subir a la cima; contará con un gran río rodeando la montaña que hará que el jugador tenga que rodear para llegare a la meta.",
    2: "Una planta de petroleo en 3 islas, el jugador deberá recorrer los tres mapas para encontrar lo que busca, mientras se mueve entre las islas por medio de barcos que fungirán como plataformas para que el jugador cruce de un lado a otro.",
    3: "El jugador se encontrará en diferentes plataformas flotantes sobre un pozo de aceite, deberá tener cuidado con los saltos para caer sobre las plataformas y avanzar, y evitar caer para no morir."
};


leftTor.addEventListener("click", () => changeMode());
rightTor.addEventListener("click", () => changeMode());

function changeMode() {

    if (modoActual === true) {
        modo.textContent = `Modo Contrarreloj`;
        modoActual = false;
    }
    else {
        modo.textContent = `Modo Historia`;
        modoActual = true;
    }

}


portadas.forEach((img, index) => {
    img.addEventListener("click", () => selectLevel(index + 1));
});

function selectLevel(level) {
    selectedLevel = level;

    portadas.forEach((img, index) => {

        if (index + 1 === selectedLevel) {
            img.classList.add("selected");
        }
        else {
            img.classList.remove("selected");
        }
    });


    descripcion.textContent = DescripcionNivewl[selectedLevel];
}


menu.addEventListener("click", () => {
    window.location.href = "mainMenu2.html";
});
