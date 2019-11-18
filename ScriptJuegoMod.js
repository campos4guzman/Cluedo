import * as cluedo from './ScriptJuego.js';


function crearTablero(){
    var tablero=new cluedo.Tablero();
    var refDiv=document.getElementById("juego");
    var tabla=document.createElement("table");
    tabla.id="tablero";
        for(let i=0;i<5;i++){
            var fila=document.createElement("tr");
            for(let j=0;j<5;j++){
                var celda=document.createElement("td");
                fila.appendChild(celda);
                celda.style.border="1px solid black";
                celda.style.width="200px";
                celda.style.height="200px";
                celda.id="celda";
            }
            tabla.appendChild(fila);
        }
        tabla.style.border="1px solid black";
    refDiv.appendChild(tabla);
}
function insertaHabitaciones(){
    var cCocina=document.getElementById("tablero").rows[0].cells[0];
    var cEstudio=document.getElementById("tablero").rows[2].cells[2];
    var cHall=document.getElementById("tablero").rows[0].cells[4];
    var cJardin=document.getElementById("tablero").rows[4].cells[0];
    var cLibreria=document.getElementById("tablero").rows[4].cells[4];
    var cocina=document.createElement("img");
    var estudio=document.createElement("img");
    var hall=document.createElement("img");
    var jardin=document.createElement("img");
    var libreria=document.createElement("img");


    cocina.src="cocina2.jpg";
    estudio.src="estudio.jpg";
    hall.src="hall.jpg";
    jardin.src="jardin.jpg";
    libreria.src="libreria.jpg";

    cocina.id="habitacion";
    estudio.id="habitacion";
    hall.id="habitacion";
    jardin.id="habitacion";
    libreria.id="habitacion";

    cCocina.appendChild(cocina);
    cEstudio.appendChild(estudio);
    cHall.appendChild(hall);
    cJardin.appendChild(jardin);
    cLibreria.appendChild(libreria);
}




crearTablero();
insertaHabitaciones();
cluedo.prueba();