// Función para crear una persona
function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad,
    }
}

// Función para ingresar edades y calcular el promedio
function calcularPromedio() {
    let sumaEdades = 0;
    let contadorPersonas = [];

    while (true) {
        let edad = prompt("Ingresa la edad de la persona (Si deseas calcular el promedio, escribe 'fin'):");
        if (edad.toLowerCase() === "fin") { //toLowerCase devuelve el valor en minúsculas de la cadena que realiza la llamada
            break; // Si el usuario introduce fin, termina el bucle
        }

        edad = parseInt(edad);
        if (!isNaN(edad) && edad >= 0) { //isNaN intenta convertir el parámetro pasado a un número.
            sumaEdades += edad; //Agrega una edad al contador de sumaEdades
            contadorPersonas++; //Agrega una persona màs al contador de las personas
        } else {
            alert("Por favor, ingresa una edad válida.");
        }
    }

    if (contadorPersonas === 0) { //Si el contador de personas es igual a 0
        alert("No se ingresaron edades válidas."); //Se imprimirà un alert diciendo que no se ingresaron edades vàlidas
    } else {
        const promedio = sumaEdades / contadorPersonas; //Si se ingresò por lo menos una persona, harà la divisiòn de la suma de las edades por la cantidad de personas que ingresaron edades
        alert("El promedio de edades de las " + contadorPersonas + " personas registradas es: " + promedio);
    }
}

// Llamamos a la función para comenzar el simulador
calcularPromedio();

alert ("Este simulador te ayudará a calcular el promedio de edad de las personas")
while (true) {
    let opcion = prompt("Seleccione una opción:\n1. Agregar persona\n2. Calcular edad promedio\n3. Salir");
    switch (opcion) {
        case "1":
            agregarPersona();
            break;
        case "2":
            calcularEdadPromedio();
            break;
        case "3":
            console.log("Saliendo del simulador.");
            return;
        default:
            console.log("Opción inválida. Por favor, seleccione una opción válida.");
    }
}