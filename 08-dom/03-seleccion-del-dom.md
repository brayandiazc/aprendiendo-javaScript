# Selección del DOM

La selección de elementos del DOM en JavaScript se refiere a la capacidad de acceder a elementos específicos dentro de la estructura del documento HTML utilizando métodos y selectores proporcionados por el DOM. Esto nos permite interactuar y manipular los elementos de una página web de forma programática.

Existen varios métodos y selectores que podemos utilizar para seleccionar elementos del DOM. A continuación, te mostraré algunos ejemplos:

## getElementById

El método `getElementById` permite seleccionar un elemento por su ID, que debe ser único en el documento HTML. Devuelve el primer elemento que coincide con el ID especificado.

```javascript
const element = document.getElementById('myElement');
```

## getElementsByClassName

El método `getElementsByClassName` permite seleccionar elementos por su clase. Devuelve una lista de elementos que tienen la clase especificada.

```javascript
const elements = document.getElementsByClassName('myClass');
```

## getElementsByTagName

El método `getElementsByTagName` permite seleccionar elementos por su etiqueta. Devuelve una lista de elementos que tienen la etiqueta especificada.

```javascript
const elements = document.getElementsByTagName('div');
```

## querySelector

El método `querySelector` permite seleccionar un elemento utilizando un selector CSS. Devuelve el primer elemento que coincide con el selector especificado.

```javascript
const element = document.querySelector('#myElement');
```

## querySelectorAll

El método `querySelectorAll` permite seleccionar elementos utilizando un selector CSS. Devuelve una lista de todos los elementos que coinciden con el selector especificado.

```javascript
const elements = document.querySelectorAll('.myClass');
```

En el siguiente ejemplo, utilizaremos todos los métodos y selectores mencionados anteriormente para seleccionar elementos del DOM.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Selección de elementos del DOM</title>
</head>
<body>
  <h1 id="titulo">Título</h1>
  <p class="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
  <ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
  </ul>
  <div>
    <p>Texto 1</p>
    <p>Texto 2</p>
    <p>Texto 3</p>
  </div>

  <script>
    // getElementById: selecciona un elemento por su id
    const titulo = document.getElementById('titulo');
    console.log(titulo);

    // getElementsByClassName: selecciona elementos por su clase
    const parrafos = document.getElementsByClassName('parrafo');
    console.log(parrafos);

    // getElementsByTagName: selecciona elementos por su etiqueta
    const elementosLista = document.getElementsByTagName('li');
    console.log(elementosLista);

    // querySelector: selecciona el primer elemento que coincide con un selector CSS
    const texto1 = document.querySelector('div p');
    console.log(texto1);

    // querySelectorAll: selecciona todos los elementos que coinciden con un selector CSS
    const todosLosParrafos = document.querySelectorAll('p');
    console.log(todosLosParrafos);
  </script>
</body>
</html>
```

En este ejemplo, utilizamos diferentes métodos para seleccionar elementos del DOM:

- `getElementById`: Utilizamos `document.getElementById('titulo')` para seleccionar el elemento `<h1>` con el id "titulo". El elemento seleccionado se almacena en la variable `titulo`.

- `getElementsByClassName`: Utilizamos `document.getElementsByClassName('parrafo')` para seleccionar todos los elementos con la clase "parrafo". Los elementos seleccionados se almacenan en la variable `parrafos`.

- `getElementsByTagName`: Utilizamos `document.getElementsByTagName('li')` para seleccionar todos los elementos `<li>`. Los elementos seleccionados se almacenan en la variable `elementosLista`.

- `querySelector`: Utilizamos `document.querySelector('div p')` para seleccionar el primer elemento `<p>` que se encuentra dentro de un elemento `<div>`. El elemento seleccionado se almacena en la variable `texto1`.

- `querySelectorAll`: Utilizamos `document.querySelectorAll('p')` para seleccionar todos los elementos `<p>` en el documento. Los elementos seleccionados se almacenan en la variable `todosLosParrafos`.

En cada caso, utilizamos `console.log` para mostrar los elementos seleccionados en la consola del navegador.

Ten en cuenta que estos métodos de selección de elementos te permiten interactuar y manipular los elementos del DOM de diferentes formas. Puedes acceder a sus propiedades, modificar su contenido, aplicar estilos, agregar o eliminar elementos, y mucho más.

Estos son solo algunos ejemplos de cómo seleccionar elementos del DOM en JavaScript. Además de los métodos mencionados, existen otros métodos y selectores más avanzados que permiten una selección más precisa y flexible.

Recuerda que al seleccionar elementos del DOM, es importante tener en cuenta la estructura del documento HTML y utilizar selectores adecuados para acceder a los elementos deseados. También puedes utilizar las referencias almacenadas en variables para acceder a los elementos seleccionados y manipularlos de manera más eficiente.
