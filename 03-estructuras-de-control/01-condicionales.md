# Condicionales en JavaScript

Los condicionales en JavaScript nos permiten controlar el flujo de ejecución de nuestro código según ciertas condiciones. Los condicionales más comunes en JavaScript son `if`, `else if` y `else`.

## `if`

La sentencia `if` se utiliza para ejecutar un bloque de código si se cumple una condición determinada.

```javascript
var edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}
```

## `else`

La sentencia `else` se utiliza para ejecutar un bloque de código si no se cumple la condición del `if`.

```javascript
var dia = "domingo";

if (dia === "sábado" || dia === "domingo") {
  console.log("¡Es fin de semana!");
} else {
  console.log("¡A trabajar!");
}
```

En este ejemplo, la sentencia `if` evalúa si la variable `dia` es igual a "sábado" o "domingo". Si se cumple la condición, se muestra el mensaje "¡Es fin de semana!". Si no se cumple la condición del `if`, se ejecuta el bloque de código dentro del `else` y se muestra el mensaje "¡A trabajar!".

## `else if`

La sentencia `else if` se utiliza para evaluar múltiples condiciones. Si la primera condición no se cumple, se evalúa la siguiente condición. Si ninguna de las condiciones se cumple, se ejecuta el bloque de código dentro del `else`.

```javascript
var hora = 14;

if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 20) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}
```

En este ejemplo, la sentencia `if` evalúa si la variable `hora` es menor que 12. Si se cumple la condición, se muestra el mensaje "Buenos días". Si no se cumple la condición del `if`, la sentencia `else if` evalúa si la variable `hora` es menor que 20. Si se cumple esta condición, se muestra el mensaje "Buenas tardes". Si no se cumple ninguna de las dos condiciones anteriores, se ejecuta el bloque de código dentro del else y se muestra el mensaje "Buenas noches".

## Operador ternario

El operador ternario es una forma abreviada de escribir una sentencia `if` en una sola línea.

```javascript
var edad = 20;
var esMayorDeEdad = edad >= 18 ? "Sí" : "No";

console.log(esMayorDeEdad); // salida: "Sí"
```

En este ejemplo, se evalúa si la variable `edad` es mayor o igual a 18. Si se cumple la condición, la variable `esMayorDeEdad` se asigna con el valor "Sí". Si no se cumple la condición, se asigna con el valor "No". El resultado se muestra en la consola con la función `console.log()`.

## switch

La sentencia `switch` en JavaScript nos permite ejecutar diferentes bloques de código según el valor de una variable o expresión. La estructura básica de una sentencia `switch` es la siguiente:

```javascript
switch (expresión) {
  case valor1:
    // bloque de código para el valor1
    break;
  case valor2:
    // bloque de código para el valor2
    break;
  ...
  default:
    // bloque de código por defecto
}
```

En este ejemplo, la sentencia `switch` evalúa la expresión y ejecuta el bloque de código correspondiente al caso que coincida con el valor de la expresión. Si no se cumple ningún caso, se ejecuta el bloque de código por defecto.

```javascript
var dia = 5;
var mensaje;

switch (dia) {
  case 1:
    mensaje = "Lunes";
    break;
  case 2:
    mensaje = "Martes";
    break;
  case 3:
    mensaje = "Miércoles";
    break;
  case 4:
    mensaje = "Jueves";
    break;
  case 5:
    mensaje = "Viernes";
    break;
  case 6:
    mensaje = "Sábado";
    break;
  case 7:
    mensaje = "Domingo";
    break;
  default:
    mensaje = "Día inválido";
}

console.log(mensaje); // salida: "Viernes"
```

En este ejemplo, se evalúa la variable `dia` y se ejecuta el bloque de código correspondiente al caso que coincide con el valor de `dia`. Como `dia` tiene un valor de 5, se ejecuta el bloque de código correspondiente al caso `case 5`, que asigna el mensaje "Viernes" a la variable `mensaje`. El resultado se muestra en la consola con la función `console.log()`.

## Buenas prácticas

- Evita anidar condicionales. Si tienes que anidar más de dos condicionales, es mejor utilizar una estructura de control diferente.
- Evita utilizar la sentencia `switch` cuando se pueda utilizar una sentencia `if` o `else if`.
- Siempre utiliza llaves para los bloques de código, incluso si solo hay una sentencia.
- Ser explícito con la comparación de valores y tipos de datos. En lugar de utilizar el operador de igualdad débil (`==`) que puede provocar la conversión implícita de tipos de datos, se recomienda utilizar el operador de igualdad estricta (`===`) que compara tanto el valor como el tipo de dato.
- Evitar las condiciones anidadas o en cascada. Si es posible, se recomienda utilizar operadores lógicos (`&&`, `||`) para simplificar y mejorar la legibilidad del código.
- Evitar la negación doble (`!!`) para convertir un valor en un valor booleano. En su lugar, utilizar los operadores `Boolean()` o `!!` para convertir un valor en un valor booleano.
- Ser cuidadoso al utilizar la negación (`!`). Asegurarse de que el resultado de la negación sea lo que se espera. En algunos casos, puede ser más claro y legible utilizar una comparación explícita en lugar de la negación.
- Utilizar variables descriptivas y legibles para los valores de las condiciones y los resultados de las operaciones. Esto hace que el código sea más fácil de entender y depurar.
- Asegurarse de que todas las posibles condiciones sean evaluadas. Incluir una condición else para manejar los casos en los que ninguna de las condiciones anteriores es verdadera.
- Asegurarse de que las condiciones sean lo más específicas posible. Si hay varias condiciones que pueden ser verdaderas, se recomienda evaluar la condición más específica primero.

Siguiendo estas buenas prácticas en las condicionales en JavaScript, podemos escribir código más legible, fácil de entender y menos propenso a errores sutiles.
