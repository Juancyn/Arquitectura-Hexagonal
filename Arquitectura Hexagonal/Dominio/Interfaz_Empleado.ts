import { empleado } from "./empleado";

//Define los metodos que vamos a usar en el aplicativo Empleado
//Interfaz(Puerto) del servicio
export interface PuertoEmpleado{
    CambiarSalario(Nuevo_Salario: number, empleado: empleado) : void
    RecompensaSalario(Recompensa: number,RecompensaTotal: number, empleado: empleado): void
    //Aqui podemos agregar mas operaciones si fuera necesarias
 }