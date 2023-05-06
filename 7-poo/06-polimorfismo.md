# Polimorfismo en clases

El polimorfismo en JavaScript se refiere a la capacidad de un objeto de tomar varias formas y comportarse de manera diferente según el contexto en el que se utilice. Esto nos permite escribir código más flexible y reutilizable, ya que un objeto puede ser utilizado en diferentes contextos sin necesidad de conocer su tipo específico.

**Ejemplo:**

Supongamos que queremos crear una clase `Figura` que defina las propiedades y métodos básicos de una figura geométrica, como su área y su perímetro. Podemos crear una clase `Figura` utilizando la sintaxis `class` de la siguiente manera:

```javascript
// Definir la clase Figura
class Figura {
  constructor() {}

  // Métodos abstractos que deben ser implementados por cualquier subclase
  calcularArea() {}
  calcularPerimetro() {}
}
```

En esta clase, creamos un constructor vacío y dos métodos `calcularArea` y `calcularPerimetro` que no tienen implementación.

Podemos crear dos clases hijas `Rectangulo` y `Circulo` que extiendan la clase `Figura` y definan la implementación de estos métodos para calcular el área y el perímetro de un rectángulo y un círculo respectivamente:

```javascript
// Definir la subclase Rectangulo de la clase Figura
class Rectangulo extends Figura {
  constructor(base, altura) {
    super();
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return this.base * this.altura;
  }

  calcularPerimetro() {
    return 2 * this.base + 2 * this.altura;
  }
}

// Definir la subclase Circulo de la clase Figura
class Circulo extends Figura {
  constructor(radio) {
    super();
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio ** 2;
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.radio;
  }
}
```

En estas clases, utilizamos la palabra clave `extends` para indicar que `Rectangulo` y `Circulo` son clases hijas de `Figura`. Luego, creamos un constructor en cada clase que llama al constructor de la clase `Figura` utilizando la palabra clave `super` y asigna las propiedades necesarias a la instancia.

Finalmente, definimos la implementación de los métodos `calcularArea` y `calcularPerimetro` de cada clase para calcular el área y el perímetro de un rectángulo o un círculo respectivamente.

Podemos crear una instancia de cada clase y llamar a sus métodos para verificar su implementación:

```javascript
// Crear una instancia de la subclase Rectangulo
const miRectangulo = new Rectangulo(5, 10);
// Mostrar el área y el perímetro de miRectangulo
console.log(miRectangulo.calcularArea()); // Resultado: 50
console.log(miRectangulo.calcularPerimetro()); // Resultado: 30

// Crear una instancia de la subclase Circulo
const miCirculo = new Circulo(4);
// Mostrar el área y el perímetro de miCirculo
console.log(miCirculo.calcularArea()); // Resultado: 50.26548245743669
console.log(miCirculo.calcularPerimetro()); // Resultado: 25.132741228718345
```

En este ejemplo, creamos una instancia de la clase `Rectangulo` con una base de `5` y una altura de `10`. Luego, llamamos a los métodos `calcularArea` y `calcularPerimetro` de la instancia para mostrar el área y el perímetro del rectángulo en la consola.

También creamos una instancia de la clase `Circulo` con un radio de `4` y llamamos a los métodos `calcularArea` y `calcularPerimetro` de la instancia para mostrar el área y el perímetro del círculo en la consola.

En este ejemplo, utilizamos el polimorfismo para crear dos clases hijas que extienden la funcionalidad de la clase `Figura` y definen su propia implementación de los métodos `calcularArea` y `calcularPerimetro`. Esto nos permite utilizar estas clases hijas en diferentes contextos, como en una aplicación de dibujo o en un programa de cálculo de geometría, sin necesidad de conocer su tipo específico.

## Buenas prácticas

- Utiliza el polimorfismo para crear clases hijas que extiendan la funcionalidad de una clase padre.
- Utiliza el polimorfismo para crear clases hijas que implementen su propia versión de los métodos de una clase padre.