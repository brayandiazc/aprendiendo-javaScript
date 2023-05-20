# Manipulación de atributos

La manipulación de atributos en JavaScript nos permite acceder y modificar los atributos de los elementos del DOM. Podemos agregar, modificar y eliminar atributos utilizando métodos y propiedades proporcionados por el DOM.

A continuación, te muestro algunos ejemplos de cómo manipular atributos en JavaScript:

## Acceder a un atributo

Para acceder al valor de un atributo de un elemento, podemos utilizar la propiedad `getAttribute` del elemento.

```html
<img id="myImage" src="imagen.jpg" alt="Imagen de ejemplo">
```

```javascript
const image = document.getElementById('myImage');
const src = image.getAttribute('src');
const alt = image.getAttribute('alt');

console.log(src); // Resultado: imagen.jpg
console.log(alt); // Resultado: Imagen de ejemplo
```

En este ejemplo, utilizamos `getAttribute` para obtener los valores de los atributos `src` y `alt` de la imagen.

## Modificar un atributo

Para modificar el valor de un atributo de un elemento, podemos utilizar el método `setAttribute` del elemento.

```html
<img id="myImage" src="imagen.jpg" alt="Imagen de ejemplo">
```

```javascript
const image = document.getElementById('myImage');
image.setAttribute('src', 'nueva-imagen.jpg');
image.setAttribute('alt', 'Nueva imagen de ejemplo');
```

En este ejemplo, utilizamos `setAttribute` para cambiar los valores de los atributos `src` y `alt` de la imagen.

## Eliminar un atributo

Para eliminar un atributo de un elemento, podemos utilizar el método `removeAttribute` del elemento.

```html
<img id="myImage" src="imagen.jpg" alt="Imagen de ejemplo">
```

```javascript
const image = document.getElementById('myImage');
image.removeAttribute('alt');
```

En este ejemplo, utilizamos `removeAttribute` para eliminar el atributo `alt` de la imagen.

En el siguiente ejemplo utilizaremos los métodos mencionados anteriormente para manipular atributos en JavaScript.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Manipulación de atributos del DOM</title>
</head>
<body>
  <h1 id="titulo">Título</h1>
  <img src="imagen.jpg" alt="Imagen" id="imagen" width="200" height="200">
  <button onclick="mostrarAtributo()">Mostrar Atributo</button>
  <button onclick="cambiarAtributo()">Cambiar Atributo</button>
  <button onclick="verificarAtributo()">Verificar Atributo</button>
  <button onclick="eliminarAtributo()">Eliminar Atributo</button>

  <script>
    function mostrarAtributo() {
      const imagen = document.getElementById('imagen');
      const src = imagen.getAttribute('src');
      console.log('Atributo src:', src);
    }

    function cambiarAtributo() {
      const imagen = document.getElementById('imagen');
      imagen.setAttribute('src', 'nueva-imagen.jpg');
      imagen.setAttribute('alt', 'Nueva Imagen');
      console.log('Atributos cambiados');
    }

    function verificarAtributo() {
      const imagen = document.getElementById('imagen');
      const tieneAlt = imagen.hasAttribute('alt');
      console.log('¿La imagen tiene el atributo alt?', tieneAlt);
    }

    function eliminarAtributo() {
      const imagen = document.getElementById('imagen');
      imagen.removeAttribute('width');
      imagen.removeAttribute('height');
      console.log('Atributos eliminados');
    }
  </script>
</body>
</html>
```

En este ejemplo, utilizamos diferentes métodos para manipular atributos de elementos del DOM:

- `getAttribute`: En la función `mostrarAtributo()`, utilizamos `getAttribute('src')` para obtener el valor del atributo `src` de la imagen. Luego, mostramos el valor del atributo en la consola.

- `setAttribute`: En la función `cambiarAtributo()`, utilizamos `setAttribute('src', 'nueva-imagen.jpg')` para cambiar el valor del atributo `src` de la imagen por "nueva-imagen.jpg". También utilizamos `setAttribute('alt', 'Nueva Imagen')` para cambiar el valor del atributo `alt` de la imagen. Luego, mostramos un mensaje en la consola indicando que los atributos han sido cambiados.

- `hasAttribute`: En la función `verificarAtributo()`, utilizamos `hasAttribute('alt')` para verificar si la imagen tiene el atributo `alt`. Mostramos un mensaje en la consola indicando si la imagen tiene o no el atributo.

- `removeAttribute`: En la función `eliminarAtributo()`, utilizamos `removeAttribute('width')` y `removeAttribute('height')` para eliminar los atributos `width` y `height` de la imagen. Mostramos un mensaje en la consola indicando que los atributos han sido eliminados.

Puedes utilizar estos métodos para acceder, modificar, verificar y eliminar atributos de elementos del DOM según tus necesidades. Recuerda que los nombres de los atributos deben coincidir exactamente con los nombres utilizados en el código HTML.

Recuerda que los atributos también pueden tener eventos asociados. Si deseas agregar o eliminar eventos específicos, puedes utilizar los métodos `addEventListener` y `removeEventListener`, respectivamente.

La manipulación de atributos en JavaScript es útil cuando necesitas cambiar dinámicamente los valores de los atributos de los elementos del DOM. Esto puede ser útil para actualizar imágenes, cambiar textos alternativos, actualizar enlaces, etc.

Es importante tener en cuenta que algunos atributos, como `id` y `class`, también tienen propiedades correspondientes en los elementos del DOM. Puedes acceder y modificar estas propiedades directamente en lugar de utilizar los métodos `getAttribute` y `setAttribute`.

Recuerda que al manipular atributos, debes tener en cuenta la estructura y la semántica adecuada de tu documento HTML y asegurarte de seguir las buenas prácticas para mantener un código limpio y mantenible.
