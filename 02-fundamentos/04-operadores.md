# Operadores en JavaScript

Los operadores en JavaScript son símbolos que nos permiten realizar operaciones con uno o más valores. A continuación, se presentan algunos ejemplos de operadores en JavaScript.

## Operadores aritméticos

Los operadores aritméticos en JavaScript nos permiten realizar operaciones matemáticas básicas como suma, resta, multiplicación y división.

```javascript
var x = 10;
var y = 5;

var suma = x + y; // Suma
var resta = x - y; // Resta
var multiplicacion = x * y; // Multiplicación
var division = x / y; // División

console.log(suma); // salida: 15
console.log(resta); // salida: 5
console.log(multiplicacion); // salida: 50
console.log(division); // salida: 2
```

## Operadores de asignación

Los operadores de asignación en JavaScript nos permiten asignar un valor a una variable.

```javascript
var x = 10;

x += 5; // Equivalente a x = x + 5
console.log(x); // salida: 15

x -= 3; // Equivalente a x = x - 3
console.log(x); // salida: 12

x *= 2; // Equivalente a x = x * 2
console.log(x); // salida: 24

x /= 4; // Equivalente a x = x / 4
console.log(x); // salida: 6
```

## Operadores de comparación

Los operadores de comparación en JavaScript nos permiten comparar dos valores y devolver un valor booleano (`true` o `false`) que indica si la comparación es verdadera o falsa.

| Operador | Descripción                                                                                |
| -------- | ------------------------------------------------------------------------------------------ |
| `==`     | Compara si dos valores son iguales, realizando una conversión de tipos si es necesario.    |
| `===`    | Compara si dos valores son iguales en tipo y valor, sin realizar una conversión de tipos.  |
| `!=`     | Compara si dos valores son diferentes, realizando una conversión de tipos si es necesario. |
| `>`      | Compara si el primer valor es mayor que el segundo valor.                                  |
| `<`      | Compara si el primer valor es menor que el segundo valor.                                  |
| `>=`     | Compara si el primer valor es mayor o igual que el segundo valor.                          |
| `<=`     | Compara si el primer valor es menor o igual que el segundo valor.                          |

```javascript
var x = 10;
var y = 5;

console.log(x > y); // salida: true
console.log(x < y); // salida: false
console.log(x >= y); // salida: true
console.log(x <= y); // salida: false
console.log(x == y); // salida: false
console.log(x != y); // salida: true
console.log(5 === "5"); // salida: false
```

## Operador de igualdad estricta

En JavaScript, el operador de igualdad estricta (`===`) se utiliza para comparar si dos valores son iguales en tipo y valor. A diferencia del operador de igualdad (`==`), el operador de igualdad estricta no realiza una conversión de tipos antes de la comparación.

```javascript
console.log(5 === 5); // salida: true
console.log(5 === "5"); // salida: false
console.log(true === 1); // salida: false
console.log(null === undefined); // salida: false
console.log("hello" === "hello"); // salida: true
console.log({} === {}); // salida: false
```

En el primer ejemplo, se comparan dos números iguales y de igual tipo, por lo que el resultado es `true`. En el segundo ejemplo, se comparan un número y una cadena de texto, que son de tipos diferentes, por lo que el resultado es `false`. En el tercer ejemplo, se comparan un booleano y un número, que son de tipos diferentes, por lo que el resultado es `false`. En el cuarto ejemplo, se comparan dos valores nulos, que son de igual tipo y valor, por lo que el resultado es `true`. En el quinto ejemplo, se comparan dos cadenas de texto iguales y de igual tipo, por lo que el resultado es `true`. En el último ejemplo, se comparan dos objetos distintos, por lo que el resultado es `false`.

Es importante tener en cuenta que el operador de igualdad estricta evalúa también el tipo de dato de los valores a comparar. Esto puede ser útil en ciertos casos para evitar errores de comparación por conversiones de tipos inesperadas.

## Operadores lógicos

Los operadores lógicos en JavaScript nos permiten combinar expresiones booleanas y devolver un valor booleano (`true` o `false`) que indica si la combinación es verdadera o falsa.

```javascript
var x = 10;
var y = 5;

console.log(x > 5 && y < 10); // salida: true
console.log(x > 5 || y > 10); // salida: true
console.log(!(x > y)); // salida: false
```

## Operador ternario

El operador ternario en JavaScript nos permite realizar una evaluación condicional y asignar un valor a una variable según el resultado de la evaluación.

```javascript
var edad = 20;
var esMayorDeEdad = edad >= 18 ? "Sí" : "No";

console.log(esMayorDeEdad); // salida: "Sí"
```

En este ejemplo, la variable `esMayorDeEdad` se asigna con el valor "Sí" si la `edad` es mayor o igual a 18, y con el valor "No" en caso contrario.
