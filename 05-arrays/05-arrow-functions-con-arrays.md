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
