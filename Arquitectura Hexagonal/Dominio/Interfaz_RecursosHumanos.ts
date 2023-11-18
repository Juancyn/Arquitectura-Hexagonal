// hr-service-interface.ts
import { empleado } from './empleado'; 
import { departamento } from './departamento';

//Define los metodos que vamos a usar en el aplicativo RecursosHumanos
//Interfaz(Puerto) del servicio
export interface PuertoRecursosHumanos {
  AsignarDepartamentoaEmpleado(empleado: empleado, departamento: departamento): void;
  AsignarNombreDepartamento(departamento: departamento ,Nuevo_Nombre : string): void;
    //Aqui podemos agregar mas operaciones si fuera necesarias
}