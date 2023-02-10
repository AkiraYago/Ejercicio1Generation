/* 
-Ingresar la cantidad de notas
-Ingresar notas
-desplegar menú
-1 mostrar promedio
-2 mostrar si la nota aprueba o reprueba
-3 mostrar si la nota esta debajo o encima del promedio
*/
const notas = [];
var cantidadNotas = undefined;
var errorIngreso = "\n[Error de ingreso]";
var promedioNotas = undefined;
var seEjecutoOpcion1 = false;
//var salir = false;
/////////////////////////FUNCION INGRESAR NOTAS/////////////////////////
function IngresarNotas(){
  for (let i = 0; i < cantidadNotas; i++){
    let inputNotas = 1;
    do{
      if (inputNotas >= 1 && inputNotas <= 7){
      inputNotas = parseFloat(prompt("Ingrese la nota del alumno N°" + (i + 1)));
      } 
      else {
        console.log(errorIngreso);
        inputNotas = parseFloat(prompt("Ingrese la nota del alumno N°" + (i + 1)));
      }
    } while(!(inputNotas >= 1 && inputNotas <= 7));
    notas.push(inputNotas);
  }
  console.log(notas);
}

/////////////////////////FUNCION INGRESAR OPCION/////////////////////////
function IngresarOpcion(){
  let inputOpcion = parseInt(prompt("Ingrese una de las opciones mostradas: "));
  return inputOpcion;
}
///////////////////////////FUNCION OPCION 1///////////////////////////
function DesplegarOpcion1(){
  let sumaNotas = 0; 
  for (let i = 0; i < cantidadNotas; i++){
    sumaNotas += notas[i];
  }
  promedioNotas = sumaNotas / cantidadNotas;
  console.log("La nota promedio es " + promedioNotas);
  seEjecutoOpcion1 = true;
}
///////////////////////////FUNCION OPCION 2///////////////////////////
function DesplegarOpcion2(){
  const notaMinAprobatoria = 4.0;
  for(let i = 0; i < cantidadNotas; i++){
    if(notas[i] < notaMinAprobatoria){
      console.log("El alumno N°" + (i + 1) + " REPROBÓ!");
    } else {
      console.log("El alumno N°" + (i + 1) + " APROBÓ!");
    }
  }
}
///////////////////////////FUNCION OPCION 3///////////////////////////
function DesplegarOpcion3(){
  if (seEjecutoOpcion1){
    for (let i = 0; i < notas.length; i++){
    if (notas[i] < promedioNotas){
      console.log("El alumno N°" + (i + 1) + " tiene una nota menor al promedio");
    } else if (notas[i] > promedioNotas){
      console.log("El alumno N°" + (i + 1) + " tiene una nota mayor al promedio");
    } else {
      console.log("El alumno N°" + (i + 1) + " tiene una nota igual al promedio");
    }
  }
  } else {
    console.log(`  ----------------------------------------
    **********[NO SE HA CALCULADO EL PROMEDIO]**********
    ----------------------------------------`);
    DesplegarOpcion1();
    DesplegarOpcion3();
  }
}
///////////////////////////FUNCION OPCION 4///////////////////////////
function DesplegarOpcion4(){
  let inputSalir = 0;
  do {
    console.log("\n-----------------------");
    console.log("     ¿Desea salir?");
    console.log("-----------------------");
    console.log("  [Si] = 1   [No] = 0\n");
    inputSalir = parseInt(prompt("Ingrese selección: "));
    IngresarSeleccion(inputSalir);
  } while(!(inputSalir === 1 || inputSalir === 0));
}
function IngresarSeleccion(input){
  let seleccion = false;
  if (input === 1){
      seleccion = true;
    } else if (input === 0){
      seleccion = false;
    } else {
      console.log(errorIngreso + "Solo puede ingresar los valores [1] o [2]");
    }
  return seleccion
}
/////////////////////////FUNCION DESPLEGAR MENU/////////////////////////
function DesplegarMenu(salir){
  while(salir === false){
    cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas de sus alumnos: "));
    IngresarNotas();
    let opcionSeleccionada = undefined;
    do {
      console.log("\n---------------MENU DE OPCIONES---------------");
      console.log("[Opcion 1] Mostrar promedio de todas las notas");
      console.log("[Opcion 2] Mostrar alumnos aprobados y reprobados");
      console.log("[Opcion 3] Mostrar notas sobre y bajo el promedio");
      console.log("[Opcion 4] Salir");
      console.log("-----------------------o----------------------");
      opcionSeleccionada = IngresarOpcion();
      if (opcionSeleccionada === 1){
        DesplegarOpcion1();
      }else if (opcionSeleccionada === 2){
        DesplegarOpcion2();
      }else if (opcionSeleccionada === 3){
        DesplegarOpcion3();
      }else if (opcionSeleccionada === 4){
        DesplegarOpcion4();
      }else{
        console.log(errorIngreso + ":La opción ingresada no existe\n");
      }
    } while (!(opcionSeleccionada > 0 && opcionSeleccionada < 4));
  }
}
DesplegarMenu(IngresarSeleccion(0));
/*function Suma(){
  //La primera funcion solo calcula
  let num1 = 1;
  let num2 = 2;
  let suma = num1 + num2;
  return suma;
}
function MostrarSuma(resultado){
  //Esta funcion muestra
  console.log(resultado);
}
MostrarSuma(Suma());*/