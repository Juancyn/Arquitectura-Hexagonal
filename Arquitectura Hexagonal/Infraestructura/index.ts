import { Aplicativo_Departamento } from "../Aplicacion/Aplic.Departamento";
import { Aplicativo_Empleado } from "../Aplicacion/Aplic.Empleado";
import { Aplicativo_RecursosHumanos } from "../Aplicacion/Aplic.RecursosHumanos";
import { departamento } from "../Dominio/departamento";
import { empleado } from "../Dominio/empleado";

//Creacion de los objetos Departamento y Empleado
const Departamento1= new departamento("A13464" , "Depa.03" , "Area#2" )
const Empleado1= new empleado("E1312965658","Jorge Soledispa" , 450 , "A13500" )

//Uso de diversos objetos para mostrar los metodos implementados
const Aplicativo_Departamento1= new Aplicativo_Departamento()
Aplicativo_Departamento1.NuevoDepartamento("Area#4", new departamento("A342" , "Depa.04" , "Area#7"))

const Aplicativo_Empleado1= new Aplicativo_Empleado()
Aplicativo_Empleado1.CambiarSalario(500 , new empleado("E1346789018","Joseph Garcia" , 660 , "A3478" ))
Aplicativo_Empleado1.RecompensaSalario(0 , 0  , new empleado("E1132719029","Walter Zambrano" , 800 , "A3418" ))

//Ejemplo mas especifico del modelo de diseño
const Aplicativo_RecursosHumanos1=new Aplicativo_RecursosHumanos()
Aplicativo_RecursosHumanos1.AsignarDepartamentoaEmpleado(Empleado1 , Departamento1)
Aplicativo_RecursosHumanos1.AsignarNombreDepartamento(Departamento1, "Depa.01")