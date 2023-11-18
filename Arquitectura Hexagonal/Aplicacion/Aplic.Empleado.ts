import { PuertoEmpleado } from "../Dominio/Interfaz_Empleado";
import { empleado } from "../Dominio/empleado";

//usamos el puerto respectivo 

export class Aplicativo_Empleado implements PuertoEmpleado{
    constructor(){}
    CambiarSalario(Nuevo_Salario: number , empleado: empleado): void {
        empleado.salario=Nuevo_Salario
        console.log(`El nuevo salario del empleado ${empleado.nombre} es: ${empleado.salario}`)
        console.log("")
    }

    RecompensaSalario(Recompensa: number, RecompensaTotal: number, empleado: empleado): void {
        Recompensa=0.15*empleado.salario;
        RecompensaTotal=Recompensa+empleado.salario;
        console.log(`Señor/a ${empleado.nombre} `)
        console.log(`Por su excelente rendimiento en sus actidades tiene un bono de: ${Recompensa}`)
        console.log(`Mas el sueldo se le ofrece la suma de: ${RecompensaTotal}`)
        console.log("")

    }


}