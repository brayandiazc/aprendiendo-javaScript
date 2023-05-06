# Herencia en clases

La herencia en JavaScript se refiere a la capacidad de una clase de heredar propiedades y métodos de otra clase. Esto nos permite definir una clase base que contenga la funcionalidad común a varias clases y luego crear clases hijas que extiendan esta funcionalidad para cumplir con requisitos específicos.

**Ejemplo:**

Supongamos que queremos crear una clase `Persona` que defina las propiedades y métodos básicos de una persona, como su nombre y edad. Podemos crear una clase `Persona` utilizando la sintaxis `class` de la siguiente manera:

```javascript
// Definir la clase Persona
class Persona {
  // Constructor que toma nombre y edad como argumentos
  constructor(nombre, edad) {
    // Asignar los argumentos a las propiedades correspondientes
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método para presentarse
  presentarse() {
    // Imprimir un mensaje en la consola que incluye el nombre y la edad de la persona
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}
```

En esta clase, creamos un constructor que recibe los parámetros `nombre` y `edad` y los asigna a las propiedades `nombre` y `edad` de la instancia. Luego, creamos un método `presentarse` que muestra un mensaje personalizado en la consola utilizando las propiedades `nombre` y `edad`.

Podemos crear una nueva instancia de la clase `Persona` y llamar al método `presentarse` para verificar su implementación:

```javascript
// Crear una nueva instancia de la clase Persona con nombre "Juan" y edad 25
const juan = new Persona("Juan", 25);

// Llamar al método presentarse() en juan
juan.presentarse(); // Resultado: "Hola, mi nombre es Juan y tengo 25 años."
```

En este ejemplo, creamos una nueva instancia de la clase `Persona` con el nombre `"Juan"` y la edad `25`. Luego, llamamos al método `presentarse` de la instancia para mostrar el mensaje personalizado en la consola.

Supongamos ahora que queremos crear una clase `Estudiante` que extienda la clase `Persona` y defina una propiedad adicional, como su nota promedio. Podemos crear una clase hija `Estudiante` utilizando la sintaxis `extends` de la siguiente manera:

```javascript
// Definir la subclase Estudiante de la clase Persona
class Estudiante extends Persona {
  // Constructor que toma nombre, edad y notaPromedio como argumentos y los pasa a super()
  constructor(nombre, edad, notaPromedio) {
    super(nombre, edad);
    this.notaPromedio = notaPromedio;
  }

  // Método para mostrar la nota promedio del estudiante
  mostrarNota() {
    console.log(`Mi nota promedio es ${this.notaPromedio}.`);
  }
}
```

En esta clase, utilizamos la palabra clave `extends` para indicar que `Estudiante` es una clase hija de `Persona`. Luego, creamos un constructor que llama al constructor de la clase `Persona` utilizando la palabra clave `super` y asigna la propiedad `notaPromedio` a la instancia. Finalmente, creamos un método `mostrarNota` que muestra un mensaje personalizado en la consola utilizando la propiedad `notaPromedio`.

Podemos crear una nueva instancia de la clase `Estudiante` y llamar a los métodos de ambas clases para verificar su implementación:

```javascript
// Crear una nueva instancia de la subclase Estudiante con nombre "Maria", edad 20 y nota promedio 9.5
const maria = new Estudiante("Maria", 20, 9.5);

// Llamar al método presentarse() en maria
maria.presentarse(); // Resultado: "Hola, mi nombre es Maria y tengo 20 años."

// Llamar al método mostrarNota() en maria
maria.mostrarNota(); // Resultado: "Mi nota promedio es 9.5."
```

En este ejemplo, creamos una nueva instancia de la clase `Estudiante` con el nombre `"Maria"`, la edad `20` y la nota promedio `9.5`. Luego, llamamos a los métodos presentarse y mostrarNota de la instancia para mostrar los mensajes personalizados en la consola.

## Buenas prácticas

- Utilizar la palabra clave `extends` para definir una clase hija.
- Utilizar la palabra clave `super` para llamar al constructor de la clase padre.
- Utilizar la palabra clave `super` para llamar a los métodos de la clase padre.
