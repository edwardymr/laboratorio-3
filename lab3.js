let continuar = true;

while (continuar) {
    // Pedimos los números
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    
    // Pedimos la operación a realizar
    let operacion = prompt("Ingrese la operación que desea realizar (suma, resta, multiplicación, división) o 'salir' para terminar:");

    // Comprobamos si el usuario quiere salir
    if (operacion.toLowerCase() === "salir") {
        continuar = false;
        alert("¡Gracias por usar la calculadora!");
        break;  
    }

    // Variable para almacenar el resultado
    let resultado;

    // Realizamos la operación elegida
    if (operacion === "suma") {
        resultado = numero1 + numero2;
    } else if (operacion === "resta") {
        resultado = numero1 - numero2;
    } else if (operacion === "multiplicación") {
        resultado = numero1 * numero2;
    } else if (operacion === "división") {
        if (numero2 === 0) {
            resultado = "Error: No se puede dividir por cero.";
        } else {
            resultado = numero1 / numero2;
        }
    } else {
        resultado = "Error: Operación no válida. Las opciones válidas son: suma, resta, multiplicación, división.";
    }

    // Mostramos el resultado
    alert("El resultado de la operación es: " + resultado);

    // Preguntamos si el usuario desea hacer otra operación
    continuar = confirm("¿Desea realizar otra operación?");
}

