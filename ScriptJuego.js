export class Arma{
    nombre="";
    constructor(tipo) {
        switch (tipo){
            case 1:
                this.nombre="pistola";
            break;
            case 2:
                this.nombre="cuerda";
            break;
            case 3:
                this.nombre="veneno";
            break;
            case 4:
                this.nombre="trofeo";
            break;
            case 5:
                this.nombre="fusil";
            break;
            default:
                this.nombre="ERROR";
        }
    }
}


export class Habitacion {
    nombre="";
    ubicacion=new Array();

    constructor(tipo) {
        for (var i=0;i<5;i++) {
            this.ubicacion[i]=new Array(5);
        }
        switch (tipo){
            case 1:
                this.nombre="cocina"
                this.ubicacion[0][0]="cocina";
            break;
            case 2:
                this.nombre="estudio"
                this.ubicacion[0][4]="estudio";
            break;
            case 3:
                this.nombre="dormitorio"
                this.ubicacion[4][0]="dormitorio";
            break;
            case 4:
                this.nombre="libreria"
                this.ubicacion[2][2]="libreria";
            break;
            case 5:
                this.nombre="jardin"
                this.ubicacion[4][4]="jardin";
            break;
        }
    }
}



export class Tablero{
    tablero=new Array();
    posiciones=new Array();
    
    constructor(){
        for (var i=0;i<5;i++) {
            this.tablero[i]=new Array(4);
        }
        for (var i=0;i<5;i++) {
            this.posiciones[i]=new Array(4);
        }
        this.tablero[0][0]="cocina";
        this.tablero[0][4]="spa";
        this.tablero[4][0]="dormitorio";
        this.tablero[2][2]="libreria";
        this.tablero[4][4]="observatorio";

        this.posiciones[0][0]=1;
        this.posiciones[0][4]=2;
        this.posiciones[4][0]=3;
        this.posiciones[2][2]=4;
        this.posiciones[4][4]=5;
    }
}


export class Personaje{
    color="";
    nombre="";
    apellido="";
    number=0;
    constructor(tipo) {
        switch (tipo) {
            case 1:
                this.color="green";
                this.nombre="Jacob";
                this.apellido="Green";
                this.number=1;
            break;
            case 2:
                this.color="white";
                this.nombre="Mary";
                this.apellido="Orchid";
                this.number=2;
            break;
            case 3:
                this.color="purple";
                this.nombre="Victor";
                this.apellido="Plum";
                this.number=3;
            break;
            case 4:
                this.color="red";
                this.nombre="Kasandra";
                this.apellido="Scarlet";
                this.number=4;
            break;
            case 5:
                this.color="yellow";
                this.nombre="Jack";
                this.apellido="Mustard";
                this.number=5;
            break;
        }
    }
}

export class Asesinato{
    asesino="";
    asesinado="";
    arma="";
    habitacion="";
    constructor(tipo){
        this.asesino=new Personaje(tipo).nombre;
        if(tipo==5){
            this.asesinado=new Personaje(tipo-1).nombre; 
        }
        else{
            this.asesinado=new Personaje(tipo+1).nombre; 
        }
        this.arma=new Arma(tipo).nombre;
        this.habitacion=new Habitacion(tipo).nombre;
    }
}


export function getUbi(Personaje,Tablero){
    var xy=[]
    for (let index=0; index<5; index++) {
        for (let index2=0; index2<5; index2++) {
            if (Tablero.posiciones[index][index2]==Personaje.number) {
                xy[0]=index;
                xy[1]=index2;
                return xy;
            }
        }
    }
}


export function mover(Personaje,Tablero,direccion){
    x=getUbi(Personaje,Tablero);
    //document.write("<br>Su personaje se encuentra en "+x[0]+" y "+x[1]+"</br>");
    Tablero.posiciones[x[0]][x[1]]="";

    if(direccion=="arriba"){
        Tablero.posiciones[(x[0]-1)][x[1]]=Personaje.number;
        x=getUbi(Personaje,Tablero);
        //document.write("<br>Su personaje se encuentra despues de moverse en "+x[0]+" y "+x[1]+"</br>");
    }
    else{
        if(direccion=="derecha"){
            Tablero.posiciones[(x[0])][(x[1]+1)]=Personaje.number;
            x=getUbi(Personaje,Tablero);
            //document.write("<br>Su personaje se encuentra despues de moverse en "+x[0]+" y "+x[1]+"</br>");
        }
        else{
            if(direccion=="abajo"){
                Tablero.posiciones[(x[0]+1)][x[1]]=Personaje.number;
                x=getUbi(Personaje,Tablero);
                //document.write("<br>Su personaje se encuentra despues de moverse en "+x[0]+" y "+x[1]+"</br>");
            }
            else{
                if(direccion=="izquierda"){
                    Tablero.posiciones[(x[0])][(x[1]-1)]=Personaje.number;
                    x=getUbi(Personaje,Tablero);
                    //document.write("Su personaje se encuentra despues de moverse en "+x[0]+" y "+x[1]+"</br>");
                }
                else{
                    //document.write("ERROR INTRODUZCA UNA DIRECCION VALIDA");
                }
            }
        }
    }
}


export function getAle(min, max) {
    return Math.floor(Math.random()*(max-min))+min;
}


export function acusar(Personaje1,Personaje2,arma,habitacion){
    if((solucion.asesino==Personaje1) & (solucion.asesinado==Personaje2) & (solucion.arma==arma) & (solucion.habitacion==habitacion)){
        return 1;  //Acertastes
    }
    else{
        return 0;  //Fallastes
    }
}


export function crearJugador(jugador){
    jugador=new Personaje(getAle(1,5));
    return jugador;
}

export function numJugadores(num){
    for(let i=1;i<=num;i++){
        nom="Jugador"+i
        crearJugador(nom);
    }
}


var x=getAle(1,5);
export var solucion=new Asesinato(1);

export function prueba(){

console.log(solucion.arma) 
console.log(solucion.asesinado)
console.log(solucion.asesino)
console.log(solucion.habitacion)


//document.write("<br></br> ");

let asesino=prompt("Asesino:");
let asesinado=prompt("Asesinado:");
let arma=prompt("Arma:");
let habitacion=prompt("Habitacion:");
acusar(asesino,asesinado,arma,habitacion);


//document.write("<br></br> ");


//document.write("Posicion inicial: ");

let Player1=new Personaje(4);
let tablero=new Tablero();
let y=getUbi(Player1,tablero);
console.log(y[0]+" y "+y[1]);


//document.write("<br></br> ");


//document.write("Posicion final: ");
mover(Player1,tablero,"izquierda");

}

