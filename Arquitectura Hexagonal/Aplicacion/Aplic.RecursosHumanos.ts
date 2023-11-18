import { empleado } from "../Dominio/empleado";
import { departamento } from "../Dominio/departamento";
import { PuertoRecursosHumanos } from "../Dominio/Interfaz_RecursosHumanos";
//Implementación de servicios de recursos humanos
export class Aplicativo_RecursosHumanos implements PuertoRecursosHumanos{
    constructor(){}

    AsignarDepartamentoaEmpleado(empleado: empleado, departamento: departamento): void {
        empleado.idDepartamento=departamento.id;
        console.log(`El nuevo departamento para el empleado ${empleado.nombre} es: ${empleado.idDepartamento}`)
        console.log("")
    }

    //utilizamos la interfaz para cambiar el nombre del departamento
    AsignarNombreDepartamento(departamento: departamento ,Nuevo_Nombre: string): void {
        departamento.nombre=Nuevo_Nombre;
        console.log(`El nuevo nombre del departamento es: ${departamento.nombre}`)
        console.log("")
    }
}