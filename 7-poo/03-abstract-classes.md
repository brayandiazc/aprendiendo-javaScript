# Abstracción en clases

La abstracción en clases se refiere a la capacidad de una clase para definir propiedades y métodos que no están relacionados directamente con su funcionalidad principal. Esto puede ayudar a simplificar el código y hacerlo más fácil de mantener y modificar en el futuro. En JavaScript, la abstracción se puede lograr utilizando clases abstractas y herencia.

**Ejemplo:**

Supongamos que queremos crear una clase `Animal` que defina las propiedades y métodos básicos de un animal, como su especie y su hábitat. Podemos crear una clase abstracta `Animal` utilizando la sintaxis `class` y la palabra clave `abstract` de la siguiente manera:

```javascript
// Definir la clase abstracta Animal
abstract class Animal {
  // Constructor que toma especie y habitat como argumentos
  constructor(especie, habitat) {
    // Asignar los argumentos a las propiedades correspondientes
    this.especie = especie;
    this.habitat = habitat;
  }

  // Método abstracto hacerSonido, que debe ser implementado en subclases de Animal
  abstract hacerSonido();
}
```

En esta clase, creamos un constructor que recibe los parámetros `especie` y `habitat` y los asigna a las propiedades `especie` y `habitat` de la instancia. Luego, creamos un método abstracto `hacerSonido` que no tiene implementación. Esta es la abstracción: la clase define un comportamiento que no está relacionado directamente con su funcionalidad principal.

Podemos crear clases hijas que extiendan la clase abstracta `Animal` y definan la implementación del método `hacerSonido`. Por ejemplo, podemos crear una clase `Perro` que defina el sonido que hace un perro:

```javascript
// Definir la subclase Perro de la clase Animal
class Perro extends Animal {
  // Constructor que toma especie y habitat como argumentos y los pasa a super()
  constructor(especie, habitat) {
    super(especie, habitat);
  }

  // Implementar el método abstracto hacerSonido() de la clase Animal
  hacerSonido() {
    console.log("¡Guau!");
  }
}
```

En esta clase, utilizamos la palabra clave `extends` para indicar que `Perro` es una clase hija de `Animal`. Luego, creamos un constructor que llama al constructor de la clase `Animal` utilizando la palabra clave `super`. Finalmente, definimos la implementación del método `hacerSonido` para que muestre `"¡Guau!"` en la consola.

Podemos crear una nueva instancia de la clase `Perro` y llamar al método `hacerSonido` para verificar su implementación:

```javascript
// Crear una nueva instancia de la subclase Perro con especie "Canis lupus familiaris" y hábitat "Doméstico"
const miPerro = new Perro("Canis lupus familiaris", "Doméstico");

// Llamar al método hacerSonido() en miPerro
miPerro.hacerSonido(); // Resultado: "¡Guau!"
```

En este ejemplo, creamos una nueva instancia de la clase `Perro` con la especie `"Canis lupus familiaris"` y el hábitat `"Doméstico"`. Luego, llamamos al método `hacerSonido` de la instancia para mostrar el mensaje `"¡Guau!"` en la consola.

La abstracción en clases nos permite definir comportamientos abstractos que no están directamente relacionados con la funcionalidad principal de una clase y crear clases hijas que extiendan esta funcionalidad para cumplir con requisitos específicos. Esto hace que nuestro código sea más modular y fácil de mantener en el futuro.