# Objetos

Los objetos son una estructura de datos importante en JavaScript que nos permiten almacenar datos y funciones relacionadas en una sola entidad. En ECMAScript 6, se introdujeron algunas características nuevas y útiles para trabajar con objetos. Aquí te explico en detalle cómo funcionan los objetos en JavaScript:

## Creación de objetos

En JavaScript, podemos crear objetos utilizando la sintaxis de llaves (`{}`). Los objetos pueden contener propiedades y métodos.

Ejemplo:

```javascript
const persona = {
  nombre: "Juan",
  edad: 25,
  saludar: function() {
    console.log(`Hola, mi nombre es ${this.nombre}.`);
  }
};

console.log(persona.nombre); // Resultado: "Juan"
console.log(persona.edad); // Resultado: 25
persona.saludar(); // Resultado: "Hola, mi nombre es Juan."
```

En este ejemplo, creamos un objeto `persona` con dos propiedades (`nombre` y `edad`) y un método (saludar).

## Propiedades de objetos

Podemos acceder a las propiedades de un objeto utilizando la notación de puntos (`objeto.propiedad`) o la notación de corchetes (`objeto["propiedad"]`).

Ejemplo:

```javascript
const persona = {
  nombre: "Juan",
  edad: 25
};

console.log(persona.nombre); // Resultado: "Juan"
console.log(persona["edad"]); // Resultado: 25
```

## Métodos de objetos

Los métodos de objetos son funciones que están asociadas con el objeto. Se definen de la misma manera que las funciones normales, pero se agregan al objeto como una propiedad.

Ejemplo:

```javascript
const persona = {
  nombre: "Juan",
  edad: 25,
  saludar: function() {
    console.log(`Hola, mi nombre es ${this.nombre}.`);
  }
};

persona.saludar(); // Resultado: "Hola, mi nombre es Juan."
```

## Shorthand Properties

ECMAScript 6 introdujo una sintaxis abreviada para la definición de propiedades de objeto. Si el nombre de la propiedad y el nombre de la variable que contiene su valor son iguales, podemos omitir el nombre de la propiedad.

Ejemplo:

```javascript
const nombre = "Juan";
const edad = 25;

const persona = {nombre, edad};

console.log(persona.nombre); // Resultado: "Juan"
console.log(persona.edad); // Resultado: 25
```

## Object Destructuring

ECMAScript 6 también introdujo la desestructuración de objetos, que nos permite extraer propiedades de un objeto y asignarlas a variables individuales.

Ejemplo:

```javascript
const persona = {nombre: "Juan", edad: 25};

const {nombre, edad} = persona;

console.log(nombre); // Resultado: "Juan"
console.log(edad); // Resultado: 25
```

Espero que esta explicación te haya sido útil. Los objetos son una estructura de datos importante en JavaScript que nos permite almacenar datos y funciones relacionadas en una sola entidad. Con las características de ECMAScript 6, podemos trabajar con objetos de una manera más eficiente y legible.

## Buenas prácticas

- Utiliza la sintaxis de llaves (`{}`) para crear objetos.
- Utiliza la notación de puntos (`objeto.propiedad`) o la notación de corchetes (`objeto["propiedad"]`) para acceder a las propiedades de un objeto.
- Utiliza la notación de puntos (`objeto.metodo()`) para llamar a los métodos de un objeto.
- Utiliza la sintaxis abreviada para definir propiedades de objeto cuando el nombre de la propiedad y el nombre de la variable que contiene su valor son iguales.
- Utiliza la desestructuración de objetos para extraer propiedades de un objeto y asignarlas a variables individuales.
