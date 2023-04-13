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

```javascript
var x = 10;
var y = 5;

console.log(x > y); // salida: true
console.log(x < y); // salida: false
console.log(x >= y); // salida: true
console.log(x <= y); // salida: false
console.log(x == y); // salida: false
console.log(x != y); // salida: true
```

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

En este ejemplo, la variable esMayorDeEdad se asigna con el valor "Sí" si la edad es mayor o igual a 18, y con el valor "No" en caso contrario.