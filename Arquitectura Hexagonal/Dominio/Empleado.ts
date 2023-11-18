//Creacion de la clase empleado.ts
//Representa la entidad empleado
export class empleado{
    public id: string;
    public nombre: string;
    public salario: number;
    public idDepartamento: string;

    //Declaramos las propiedades en el constructor
    constructor(id: string , nombre: string , salario: number , idDepartamento: string){
        this.id=id;
        this.nombre=nombre;
        this.salario=salario;
        this.idDepartamento=idDepartamento;
    }
}