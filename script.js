// Variables gloables
let Stats = [10,5,15];
// DOM
const contenedorStats = document.getElementById("contenedorStats");
const botonSubirStats = document.getElementById("botonSubirStats");
const botonGuardar = document.getElementById("botonGuardar");
const inputStats = document.getElementById("inputStats");
const fuerza = document.getElementById("fuerza");
const agilidad = document.getElementById("agilidad");
const inteligencia = document.getElementById("inteligencia");

// Eventos
botonSubirStats.addEventListener("click",()=>{

    switch(inputStats.value){
        case "fuerza":
            Stats[0]++
        break;
        case "agilidad":
            Stats[1]++
        break;
        case "inteligencia":
            Stats[2]++
        break;
    }

});
botonGuardar.addEventListener("click",()=>{
    let saveData = JSON.stringify(Stats);
    localStorage.setItem("estadisticas", saveData);
})


// Funciones
function crearDivs(){
    let interval = setInterval(() => {
        fuerza.innerText = "Fuerza: " + Stats[0];
        agilidad.innerText = "Agilidad: " + Stats[1];
        inteligencia.innerText = "Inteligencia: " + Stats[2];
    }, 200);
}
function inicio(){
    if(localStorage.estadisticas){
        Stats = JSON.parse(localStorage.getItem("estadisticas"));
    }
}


// Objetos
let personaje = {
    nombre: "pepito",
    fuerza: 10,
    agilidad: 5,
    inteligencia: 15,
}
inicio();
crearDivs();