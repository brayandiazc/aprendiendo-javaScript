# Como usar arrow functions con arreglos

Las arrow functions son una forma de escribir funciones de una manera más corta y con un comportamiento diferente al de las funciones normales. En este caso, vamos a ver cómo podemos usarlas con arreglos.

**Ejercicio 1:** Usando una arrow function y un ciclo for, imprime cada elemento de un arreglo de números multiplicado por 2.

```javascript
const numeros = [1, 2, 3, 4, 5];

const multiplicarPor2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
  }
}

multiplicarPor2(numeros);
```

**Ejercicio 2:** Usando una arrow function y el método forEach, suma todos los elementos de un arreglo de números y muestra el resultado.

```javascript
const numeros = [1, 2, 3, 4, 5];

const sumar = (arr) => {
  let suma = 0;
  arr.forEach(num => suma += num);
  console.log(suma);
}

sumar(numeros);
```

**Ejercicio 3:** Usando una arrow function y el método map, devuelve un nuevo arreglo de números que son el doble de los números de un arreglo original.

```javascript
const numeros = [1, 2, 3, 4, 5];

const doble = (arr) => {
  const nuevoArr = arr.map(num => num * 2);
  console.log(nuevoArr);
}

doble(numeros);
```

**Ejercicio 4:** Usando una arrow function y el método filter, devuelve un nuevo arreglo de números que son mayores a 3 de un arreglo original.

```javascript
const numeros = [1, 2, 3, 4, 5];

const mayoresA3 = (arr) => {
  const nuevoArr = arr.filter(num => num > 3);
  console.log(nuevoArr);
}

mayoresA3(numeros);
```

**Ejercicio 5:** Usando una arrow function y el método find, encuentra el primer número par en un arreglo de números y muestra su valor.

```javascript
const numeros = [1, 3, 5, 4, 7, 9, 6];

const encontrarPar = (arr) => {
  const primerPar = arr.find(num => num % 2 === 0);
  console.log(primerPar);
}

encontrarPar(numeros);
```

**Ejercicio 6**: Usando una arrow function y el método reduce, calcula la suma de un arreglo de números.

```javascript
const numeros = [1, 2, 3, 4, 5];

const suma = (arr) => {
  const total = arr.reduce((acc, num) => acc + num, 0);
  console.log(total);
}

suma(numeros);
```

## Buenas prácticas

- Las arrow functions son una forma más concisa de definir funciones en JavaScript. En lugar de usar la palabra clave `function`, se usan flechas `=>`.
- Utilizar métodos de array como `map()`, `filter()`, `reduce()`, etc. en lugar de bucles for con arrow functions. Estos métodos son más legibles y menos propensos a errores.
- Utilizar la sintaxis de una sola línea (`=>`) para arrow functions que tienen una sola expresión en el cuerpo. En su lugar, utilizar la sintaxis de bloque (`{}`) para arrow functions que tienen varias líneas de código en el cuerpo.
- Utilizar la declaración de `const` en lugar de `let` para asignar arrow functions a variables. Esto evita que la variable sea reasignada accidentalmente.
- Utilizar nombres descriptivos y legibles para las variables que contienen arrow functions. Esto hace que el código sea más fácil de entender y depurar.
- Utilizar la sintaxis de desestructuración para acceder a los elementos del array dentro de la arrow function. Esto hace que el código sea más legible y menos propenso a errores.
- Evitar la mutación directa de los elementos del array dentro de la arrow function, especialmente cuando se trata de arrays anidados. En su lugar, utilizar métodos de array que no mutan el array original, como `map()`, `filter()`, `reduce()`, etc.
- Utilizar el método `Array.isArray()` para verificar si un valor es un array antes de utilizar una arrow function. Esto es más seguro que utilizar la comprobación de tipo `typeof`.

Siguiendo estas buenas prácticas al utilizar arrow functions con arrays en JavaScript, podemos escribir código más legible, eficiente y menos propenso a errores sutiles.
