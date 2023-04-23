# Agregar y eliminar datos de un arreglo

En JavaScript, un arreglo es una estructura de datos que nos permite almacenar una colección de elementos en una sola variable. Una vez que hemos creado un arreglo, podemos agregar nuevos elementos, eliminar elementos existentes y modificar elementos ya existentes en el arreglo.

## Agregar elementos a un arreglo

Hay varias formas de agregar elementos a un arreglo en JavaScript:

### Método push()

El método `push()` nos permite agregar uno o más elementos al final de un arreglo. El método devuelve la nueva longitud del arreglo.

```javascript
// Definición de un arreglo
let miArreglo = ['manzana', 'banana', 'cereza'];
miArreglo.push('durazno');
console.log(miArreglo); // ['manzana', 'banana', 'cereza', 'durazno']
```

También podemos agregar varios elementos a la vez utilizando el método `push()`:

```javascript
let miArreglo = ['manzana', 'banana', 'cereza'];
miArreglo.push('durazno', 'fresa', 'uva');
console.log(miArreglo); // ['manzana', 'banana', 'cereza', 'durazno', 'fresa', 'uva']
```

### Método unshift()

El método `unshift()` nos permite agregar uno o más elementos al inicio de un arreglo. El método devuelve la nueva longitud del arreglo.

```javascript
let miArreglo = ['manzana', 'banana', 'cereza'];
miArreglo.unshift('durazno');
console.log(miArreglo); // ['durazno', 'manzana', 'banana', 'cereza']
```

También podemos agregar varios elementos a la vez utilizando el método `unshift()`:

```javascript
let miArreglo = ['manzana', 'banana', 'cereza'];
miArreglo.unshift('durazno', 'fresa', 'uva');
console.log(miArreglo); // ['durazno', 'fresa', 'uva', 'manzana', 'banana', 'cereza']
```

### Operador spread (ES6)

El operador spread `...` nos permite agregar elementos de otro arreglo al final de nuestro arreglo actual:

```javascript
let miArreglo = ['manzana', 'banana', 'cereza'];
let otrosFrutos = ['durazno', 'fresa', 'uva'];
miArreglo = [...miArreglo, ...otrosFrutos];
console.log(miArreglo); // ['manzana', 'banana', 'cereza', 'durazno', 'fresa', 'uva']
```

### Agregar con el método splice()

El método `splice()` nos permite agregar elementos a un array en cualquier posición. Para hacerlo, debemos indicar la posición en la que queremos agregar los elementos, la cantidad de elementos que queremos eliminar (en este caso 0, ya que no queremos eliminar nada) y los elementos que queremos agregar.

```javascript
let numeros = [1, 2, 3, 4, 5];
numeros.splice(2, 0, 6, 7);
console.log(numeros); // [1, 2, 6, 7, 3, 4, 5]
```

En este ejemplo, hemos agregado los números 6 y 7 en la posición 2 del array numeros. Como segundo argumento, pasamos el valor 0 ya que no queremos eliminar ningún elemento.

## Eliminar elementos de un arreglo

Hay varias formas de eliminar elementos de un arreglo en JavaScript:

### Método pop()

El método `pop()` nos permite eliminar el último elemento de un arreglo. El método devuelve el elemento eliminado.

```javascript
let miArreglo = ['manzana', 'banana', 'cereza'];
let frutaEliminada = miArreglo.pop();
console.log(miArreglo); // ['manzana', 'banana']
console.log(frutaEliminada); // 'cereza'
```

### Método shift()

El método `shift()` nos permite eliminar el primer elemento de un arreglo. El método devuelve el elemento eliminado.

```javascript
let miArreglo = ['manzana', 'banana', 'cereza'];
let frutaEliminada = miArreglo.shift();
console.log(miArreglo); // ['banana', 'cereza']
console.log(frutaEliminada); // 'manzana'
```

## Eliminar con el método splice()

El método `splice()` también nos permite eliminar elementos de un array. Para hacerlo, debemos indicar la posición inicial de los elementos a eliminar y la cantidad de elementos a eliminar.

```javascript
let numeros = [1, 2, 3, 4, 5];
numeros.splice(2, 2);
console.log(numeros); // [1, 2, 5]
```

En este ejemplo, hemos eliminado los elementos en las posiciones 2 y 3 del array numeros (el número 3 y 4), ya que hemos indicado que queremos eliminar 2 elementos a partir de la posición 2.

También podemos guardar los elementos eliminados en una variable:

```javascript
let numeros = [1, 2, 3, 4, 5];
let numerosEliminados = numeros.splice(2, 2);
console.log(numeros); // [1, 2, 5]
console.log(numerosEliminados); // [3, 4]
```

En este caso, hemos eliminado los elementos en las posiciones 2 y 3 del array `numeros` y los hemos guardado en la variable `numerosEliminados`.

## Buenas prácticas

- Utilizar métodos de array que no mutan el array original, como `concat()`, `slice()`, `map()`, `filter()`, `reduce()`, etc. Esto es especialmente importante si se está trabajando con un array que no se debe modificar directamente.
- Utilizar el método `push()` para agregar elementos al final del array. Este método es más eficiente que utilizar la asignación de índice (`array[i] = value`) para agregar elementos al final.
- Utilizar el método `unshift()` para agregar elementos al inicio del array. Este método es más eficiente que utilizar la asignación de índice (`array[i] = value`) para agregar elementos al inicio.
- Utilizar el método `pop()` para eliminar el último elemento del array. Este método es más eficiente que utilizar la asignación de índice (`delete array[i]`) para eliminar el último elemento.
- Utilizar el método `shift()` para eliminar el primer elemento del array. Este método es más eficiente que utilizar la asignación de índice (`delete array[0]`) para eliminar el primer elemento.
- Evitar la eliminación de elementos del medio del array, ya que esto puede provocar la reorganización del resto de los elementos y afectar el rendimiento. En su lugar, utilizar el método `splice()` para eliminar elementos del medio del array.
- Ser cuidadoso al utilizar métodos de array que modifican el array original, como `sort()`, `reverse()`, `splice()`, etc. Asegurarse de que la mutación del array sea necesaria y de que se comprenda completamente su impacto.

Siguiendo estas buenas prácticas al agregar y eliminar elementos de un array en JavaScript, podemos escribir código más legible, eficiente y menos propenso a errores sutiles.
