// Función que calcula el promedio de 5 calificaciones y muestra si el alumno aprobó o no
function promedio(nota1, nota2, nota3, nota4, nota5) {
  var promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5; // Calculamos el promedio de las 5 calificaciones
  if (promedio >= 70) {
    console.log("Aprobado: " + promedio.toFixed(2)); // Si el promedio es mayor o igual a 70, mostramos un mensaje diciendo que aprobó
  } else {
    console.log("No Aprobado: " + promedio.toFixed(2)); // Si el promedio es menor que 70, mostramos un mensaje diciendo que no aprobó
  }
}

// Ejemplo de uso
promedio(70, 80, 80, 90, 60); // Aprobado: 76.00
promedio(70, 50, 75, 70, 60); // No Aprobado: 65.00
