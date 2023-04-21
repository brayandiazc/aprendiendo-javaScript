// Funciòn que imprime los primeros n números pares
function pares(n) {
  var contador = 0; // Inicializamos una variable contador en 0 para contar el número de pares impresos
  var numero = 2; // Inicializamos una variable numero en 2 para empezar a imprimir los números pares

  while (contador < n) {
    // Creamos un bucle while que se ejecutará mientras el contador sea menor que n
    console.log(numero); // Imprimimos el número par en la consola
    numero += 2; // Incrementamos el valor de numero en 2 para imprimir el siguiente número par en la siguiente iteración
    contador++; // Incrementamos el contador en 1 para llevar la cuenta de los números pares que hemos impreso
  }
}

// Ejemplo de uso
pares(6); //2, 4, 6, 8, 10, 12
pares(3); //2, 4, 6
pares(10); //2, 4, 6, 8, 10, 12, 14, 16, 18, 20
