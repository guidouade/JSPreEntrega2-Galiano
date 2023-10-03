// Función para crear una persona
function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad,
    }
}

// Array para almacenar las personas
const personas = [];

// Función para crear una persona y agregarla al array
function agregarPersona() {
    let nombre = prompt("Ingresa el nombre de la persona:");
    let edad = prompt("Ingresa la edad de la persona:");

    edad = parseInt(edad);

    if (!isNaN(edad) && edad >= 0) {
        const persona = crearPersona(nombre, edad);
        personas.push(persona);
        alert("Persona agregada exitosamente.");
    } else {
        alert("Por favor, ingresa una edad válida.");
    }
}

// Función para calcular el promedio de edades de las personas
function calcularEdadPromedio() {
    if (personas.length === 0) {
        alert("No se han agregado personas.");
    } else {
        let sumaEdades = 0;

        for (const persona of personas) {
            sumaEdades += persona.edad;
        }

        const promedio = sumaEdades / personas.length;
        alert("El promedio de edades de las " + personas.length + " personas registradas es: " + promedio.toFixed(2));
    }
}

// Llamamos a la función para comenzar el simulador
alert("Este simulador te ayudará a calcular el promedio de edad de las personas");

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
            break;
        default:
            alert("Opción inválida. Por favor, seleccione una opción válida.");
    }
}
