// Crear un método que reciba un array de
// notas y obtenga el promedio con
// el uso de los métodos de arrays. Si el
// promedio es mayor a 70 imprima que
// aprobó / si es menor, que no aprobó.
// promedio([70, 80, 80, 90, 60]) // Aprobado: 76.
// promedio([70, 50, 75, 70, 60]) // No Aprobado: 65.

function promedio(notas) {
  var suma = notas.reduce(function(acumulador, nota) {
    return acumulador + nota; // Sumamos todas las notas
  }, 0);

  var promedio = suma / notas.length; // Calculamos el promedio

  if (promedio >= 70) {
    console.log("Aprobado: " + promedio.toFixed(2)); // Si el promedio es mayor o igual a 70, mostramos un mensaje diciendo que aprobó
  } else {
    console.log("No Aprobado: " + promedio.toFixed(2)); // Si el promedio es menor que 70, mostramos un mensaje diciendo que no aprobó
  }
}

// Ejemplo de uso
promedio([70, 80, 80, 90, 60]); // Aprobado: 76.00
promedio([70, 50, 75, 70, 60]); // No Aprobado: 65.00

// El método promedio recibe un arreglo de notas y utiliza el método reduce para obtener la suma de todas las notas. Luego se divide la suma entre la cantidad de notas para obtener el promedio. Si el promedio es mayor o igual a 70 se muestra un mensaje indicando que aprobó, de lo contrario se muestra un mensaje indicando que no aprobó. En ambos casos se utiliza el método toFixed(2) para mostrar el resultado con dos decimales.