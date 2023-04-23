# Ejercicios funciones

Esta sección contiene ejercicios para practicar los conceptos de funciones en JavaScript.

## Funciones

Los ejercicios de esta sección se basan en la declaración de funciones.

### Ejercicio 1

Crear una función de JS que imprima los primeros “n” números pares
pares(6) //2, 4, 6, 8, 10, 12
pares(3) //2, 4, 6
pares(10) //2, 4, 6, 8, 10, 12, 14, 16, 18, 20

```javascript
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
```

### Ejercicio 2

Crear un método que reciba nombre y apellido y en un alert regrese la concatenación del nombre completo.
nombreCompleto(“Pedro”, “Gonzalez”)

```javascript
// Función que recibe nombre y apellido y muestra un alert con el nombre completo
function nombreCompleto(nombre, apellido) {
  alert(nombre + " " + apellido); // Mostramos un alert con el nombre y el apellido concatenados
}

// Ejemplo de uso
nombreCompleto("Pedro", "Gonzalez");
```

### Ejercicio 3

Crear un método que reciba tu nombre y tu edad y determine si eres mayor de edad para solicitar un permiso de conducir.
permiso(“Roberto”, 15) // “Roberto, no puedes solicitar el permiso”
permiso(“Mario”, 36) // “Mario, puedes solicitar el permiso”

```javascript
// Función que recibe nombre y edad y muestra un alert diciendo si el usuario puede solicitar el permiso de conducir
function permiso(nombre, edad) {
  if (edad >= 18) {
    // Si la edad es mayor o igual a 18
    alert(nombre + ", puedes solicitar el permiso"); // Mostramos un alert diciendo que el usuario puede solicitar el permiso
  } else {
    // Si la edad es menor a 18
    alert(nombre + ", no puedes solicitar el permiso"); // Mostramos un alert diciendo que el usuario no puede solicitar el permiso
  }
}

// Ejemplo de uso
permiso("Roberto", 15); // “Roberto, no puedes solicitar el permiso”
permiso("Mario", 36); // “Mario, puedes solicitar el permiso”
```

### Ejercicio 4

Crear un método que reciba 5 calificaciones y retorne el promedio. Y si es mayor ó igual a 70 imprima que aprobó si es menor, que no aprobó.
promedio(70, 80, 80, 90, 60) // Aprobado: 76.
promedio(70, 50, 75, 70, 60) // No Aprobado: 65.

```javascript
// Función que recibe 5 calificaciones y muestra un alert con el promedio y si el usuario aprobó o no
function promedio(calificacion1, calificacion2, calificacion3, calificacion4, calificacion5) {
  var promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4 + calificacion5) / 5; // Calculamos el promedio de las 5 calificaciones
  if (promedio >= 70) {
    // Si el promedio es mayor o igual a 70
    alert("Aprobado: " + promedio); // Mostramos un alert diciendo que el usuario aprobó
  } else {
    // Si el promedio es menor a 70
    alert("No aprobado: " + promedio); // Mostramos un alert diciendo que el usuario no aprobó
  }
}

// Ejemplo de uso
promedio(70, 80, 80, 90, 60); // Aprobado: 76.
promedio(70, 50, 75, 70, 60); // No Aprobado: 65.
```
