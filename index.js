/* 
Para medir el tiempo de ejecución usará las siguientes líneas de código:

const start = new Date();
// El códigoaevaluar
const end = new Date() - start;
console.log(`Tiempo de ejecución ${end} ms`);

Para evaluar el tiempo de ejecución debes crear un programa con JS que tenga las siguientes funcionalidades: 

	Crear una función que genere un array de strings. Este array debe tener sesentaítems, los puedes generar de la manera que prefieras.
	Crear una función por cada ciclo de repetición (for, forof, while, do while, foreach). Dicha función debe recibir por parámetros el array creado anteriormente.
	Debes crear otra funciónque, usando un switch, agrupe en cada caso la ejecución de dos de las funciones desarrolladas en el punto anterior y muestra los resultados de cada ejecución. El valor de cada caso posible a comparar debe ser ingresado por teclado. Ejemplo: Caso 1: ciclo for vs.while.
	Entrega un documento al profesor con dichas capturas, indicando qué ciclos has comparados.

*/

//Crear una función que genere un array de strings. Este array debe tener sesentaítems, los puedes generar de la manera que prefieras.
function generarArray() {
    const array = [];
    for (let i = 0; i < 10000000; i++) {
        array.push(`Item: ${i}`);
    }
    return array;
}

//Función que utiliza un ciclo for
function usarFor(array) {
    for (let i = 0; i < array.length; i++) {
        
    }
}

// Función que utiliza un ciclo for...of
function usarForOf(array) {
    for (const elemento of array) {
        
    }
}

// Función que utiliza un ciclo while
function usarWhile(array) {
    let i = 0;
    while (i < array.length) {
        i++;
    }
}

// Función que utiliza un ciclo do...while
function usarDoWhile(array) {
    let i = 0;
    do {
        i++;
    } while (i < array.length);
}

// Función que utiliza un forEach
function usarForEach(array) {
    array.forEach(elemento => {
        
    });
}

// Función para comparar y ejecutar las funciones
function compararYEjecutar(caso, array) {
    switch (caso) {
        // Caso 1: ForVSForof
        case "ForVSForof":
            const start1 = new Date();
            usarFor(array);
            const end1 = new Date() - start1;
            console.log(`Tiempo de ejecución usando ciclo for: ${end1} ms`);

            const start2 = new Date();
            usarForOf(array);
            const end2 = new Date() - start2;
            console.log(`Tiempo de ejecución usando ciclo ForOf: ${end2} ms`);
            const diferenciaForVSForof = end1 - end2

            console.log(`La diferencia entre el For y el For of es: ${end1} - ${end2} = ${diferenciaForVSForof} ms`);
            break;

        // Caso 2: WhileVSDoWhile
        case "WhileVSDoWhile":
            const start3 = new Date();
            usarFor(array);
            const end3 = new Date() - start3;
            console.log(`Tiempo de ejecución usando ciclo for: ${end3} ms`);

            const start4 = new Date();
            usarForOf(array);
            const end4 = new Date() - start4;
            console.log(`Tiempo de ejecución usando ciclo ForOf: ${end4} ms`);
            const diferenciaWhileVSDoWhile = end3 - end4

            console.log(`La diferencia entre el While y el DoWhile es: ${end3} - ${end4} = ${diferenciaWhileVSDoWhile} ms`);
            break;
        
        // Caso 3: ForVSWhile
        case "ForVSWhile":
            const start5 = new Date();
            usarFor(array);
            const end5 = new Date() - start5;
            console.log(`Tiempo de ejecución usando ciclo for: ${end5} ms`);

            const start6 = new Date();
            usarForOf(array);
            const end6 = new Date() - start6;
            console.log(`Tiempo de ejecución usando ciclo While: ${end6} ms`);

            const diferenciaForVSWhile = end5 - end6

            console.log(`La diferencia entre el For y el While es: ${end5} - ${end6} = ${diferenciaForVSWhile} ms`);
            break;

        // Caso 4: ForofVSDoWhile
        case "ForofVSDoWhile":
            const start7 = new Date();
            usarFor(array);
            const end7 = new Date() - start7;
            console.log(`Tiempo de ejecución usando ciclo ForOf: ${end7} ms`);

            const start8 = new Date();
            usarForOf(array);
            const end8 = new Date() - start8;
            console.log(`Tiempo de ejecución usando ciclo DoWhile: ${end8} ms`);

            const diferenciaForofVSDoWhile = end7 - end8

            console.log(`La diferencia entre el ForOf y el DoWhile es: ${end7} - ${end8} = ${diferenciaForofVSDoWhile} ms`);
            break;

        // Caso 5: ForVSForEach
        case "ForVSForEach":
            const start9 = new Date();
            usarFor(array);
            const end9 = new Date() - start9;
            console.log(`Tiempo de ejecución usando ciclo for: ${end9} ms`);

            const start10 = new Date();
            usarForOf(array);
            const end10 = new Date() - start10;
            console.log(`Tiempo de ejecución usando ciclo ForEach: ${end10} ms`);

            const diferenciaForVSForEach = end9 - end10

            console.log(`La diferencia entre el For y el ForEach es: ${end9} - ${end10} = ${diferenciaForVSForEach} ms`);
            break;
        
        // Caso 6: ForOfVSWhile
        case "ForOfVSWhile":
            const start11 = new Date();
            usarForOf(array);
            const end11 = new Date() - start11;
            console.log(`Tiempo de ejecución usando ciclo ForOf: ${end11} ms`);

            const start12 = new Date();
            usarWhile(array);
            const end12 = new Date() - start12;
            console.log(`Tiempo de ejecución usando ciclo While: ${end12} ms`);

            const diferenciaForOfVSWhile = end11 - end12

            console.log(`La diferencia entre el ForOf y el While es: ${end11} - ${end12} = ${diferenciaForOfVSWhile} ms`);
            break;

        // Caso 7: ForVSDoWhile
        case "ForVSDoWhile":
            const start13 = new Date();
            usarFor(array);
            const end13 = new Date() - start13;
            console.log(`Tiempo de ejecución usando ciclo For: ${end13} ms`);

            const start14 = new Date();
            usarDoWhile(array);
            const end14 = new Date() - start14;
            console.log(`Tiempo de ejecución usando ciclo DoWhile: ${end14} ms`);

            const diferenciaForVSDoWhile = end13 - end14

            console.log(`La diferencia entre el For y el DoWhile es: ${end13} - ${end14} = ${diferenciaForVSDoWhile} ms`);
            break;

        // Caso 8: ForEach VS While
        case "ForEachVSWhile":
            const start15 = new Date();
            usarForEach(array);
            const end15 = new Date() - start15;
            console.log(`Tiempo de ejecución usando ciclo ForEach: ${end15} ms`);

            const start16 = new Date();
            usarWhile(array);
            const end16 = new Date() - start16;
            console.log(`Tiempo de ejecución usando ciclo While: ${end16} ms`);

            const diferenciaForEachVSWhile= end15 - end16

            console.log(`La diferencia entre el ForEach y el While es: ${end15} - ${end16} = ${diferenciaForEachVSWhile} ms`);

            break;

        // Caso 9: ForOfVSForEach
        case "ForOfVSForEach":
            const start17 = new Date();
            usarForOf(array);
            const end17 = new Date() - start17;
            console.log(`Tiempo de ejecución usando ciclo ForOf: ${end17} ms`);

            const start18 = new Date();
            usarForEach(array);
            const end18 = new Date() - start18;
            console.log(`Tiempo de ejecución usando ciclo ForEach: ${end18} ms`);

            const diferenciaForOfVSForEach= end17 - end18

            console.log(`La diferencia entre el ForOf y el ForEach es: ${end17} - ${end18} = ${diferenciaForOfVSForEach} ms`);

            break;

        // Caso 10: ForEachVSDoWhile
        case "ForEachVSDoWhile":
            const start19 = new Date();
            usarForEach(array);
            const end19 = new Date() - start19;
            console.log(`Tiempo de ejecución usando ciclo ForEach: ${end19} ms`);

            const start20 = new Date();
            usarDoWhile(array);
            const end20 = new Date() - start20;
            console.log(`Tiempo de ejecución usando ciclo DoWhile: ${end20} ms`);

            const ForEachVSDoWhile= end19 - end20

            console.log(`La diferencia entre el ForEach y el DoWhile es: ${end19} - ${end20} = ${ForEachVSDoWhile} ms`);

            break;
            

        default:
            console.log("Caso no válido");
    }
}


const array = generarArray();
//Caso 1: ForVSForof
compararYEjecutar("ForVSForof", array);
// Caso 2: WhileVSDoWhile
compararYEjecutar("WhileVSDoWhile", array);
// Caso 3: ForVSWhile
compararYEjecutar("ForVSWhile", array);
// Caso 4: ForofVSDoWhile
compararYEjecutar("ForofVSDoWhile", array);
// Caso 5: ForVSForEach
compararYEjecutar("ForVSForEach", array);
// Caso 6: ForOfVSWhile
compararYEjecutar("ForOfVSWhile", array);
// Caso 7: ForVSDoWhile
compararYEjecutar("ForVSDoWhile", array);
// Caso 8: ForEach VS While
compararYEjecutar("ForEachVSWhile", array);
// Caso 9: ForOfVSForEach
compararYEjecutar("ForOfVSForEach", array);
// Caso 10: ForEachVSDoWhile
compararYEjecutar("ForEachVSDoWhile", array);

