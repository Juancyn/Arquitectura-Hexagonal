//Creacion de la clase departamento.ts
//Representaa la entidad departamento
export class departamento{
    public id: string;
    public nombre: string;
    public localizacion: string;

    //Declaramos las propiedades en el constructor
    constructor(id: string , nombre: string , localizacion: string){
        this.id=id;
        this.nombre=nombre;
        this.localizacion=localizacion;
    }
}