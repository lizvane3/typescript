class Avenger
{
    nombre:string;
    equipo:string;
    nombreReal:string;
    puedePelear:boolean = true;
    peleasGanadas:number = 0;

    constructor(nombre:string, equipo:string, nombreReal:string)
    {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }

}

let antman:Avenger = new Avenger("Antman","Equipo xyz", "Scott bla bla");

console.log(antman);