import { PuertoDepartamento } from "../Dominio/Interfaz_Departamento";
import { departamento } from "../Dominio/departamento";

export class Aplicativo_Departamento implements PuertoDepartamento{
    constructor(){}

    NuevoDepartamento(Nuevo_Departamento: string , departamento: departamento): void {
        console.log(`El antiguo departamento era: ${departamento.localizacion}`)
        departamento.localizacion=Nuevo_Departamento;
        console.log(`la nueva localizacion es: ${Nuevo_Departamento}`)
        console.log("")
    }
}