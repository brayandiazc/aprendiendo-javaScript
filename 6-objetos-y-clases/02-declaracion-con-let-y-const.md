# Declaración con let y const

La declaración de variables con `let` y `const` es una característica importante de ECMAScript 6 que ayuda a mejorar la claridad y seguridad de nuestro código. Aquí te explico en detalle cómo funcionan `let` y `const`:

## `let`

`let` es una palabra clave que se utiliza para declarar variables en JavaScript. A diferencia de `var`, las variables declaradas con `let` tienen alcance de bloque. Esto significa que solo están disponibles dentro del bloque en el que se declaran.

Ejemplo:

```javascript
function ejemplo() {
  let x = 10; // Variable disponible solo dentro de la función ejemplo
  if(true) {
    let y = 20; // Variable disponible solo dentro del bloque if
    console.log(y); // Resultado: 20
  }
  console.log(x); // Resultado: 10
  console.log(y); // Error: la variable y no está definida
}
```

## const

`const` es una palabra clave que se utiliza para declarar constantes en JavaScript. Al igual que `let`, las constantes declaradas con `const` tienen alcance de bloque. Sin embargo, a diferencia de las variables declaradas con `let`, las constantes no se pueden reasignar.

Ejemplo:

```javascript
const PI = 3.1416; // Constante disponible en todo el código
PI = 3.14; // Error: no se puede reasignar una constante
```

Las constantes deben inicializarse con un valor en el momento de la declaración. No se les puede asignar un valor posteriormente.

Ejemplo:

```javascript
const nombre; // Error: las constantes deben inicializarse con un valor
const edad = 25; // Correcto
edad = 30; // Error: no se puede reasignar una constante
```

## Buenas prácticas

- Utiliza `const` para declarar variables que no se reasignarán.
- Utiliza `let` para declarar variables que se reasignarán.
- Evita utilizar `var` para declarar variables.

La declaración de variables con `let` y `const` es una característica importante de ECMAScript 6 que ayuda a mejorar la claridad y seguridad de nuestro código.
