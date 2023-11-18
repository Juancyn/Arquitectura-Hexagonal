import { departamento } from "./departamento";

//Define los metodos que vamos a usar en el aplicativo Departamento
//Interfaz(Puerto) del servicio Departamento
export interface PuertoDepartamento{
    NuevoDepartamento(Nuevo_Departamento: string, departamento: departamento): void
    //Aqui podemos agregar mas operaciones si fuera necesarias
}