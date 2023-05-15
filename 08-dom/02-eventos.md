# Eventos

Los eventos en JavaScript son acciones o sucesos que ocurren en el navegador y a los que podemos responder mediante la ejecución de código. Los eventos pueden ser desencadenados por el usuario (por ejemplo, hacer clic en un elemento, mover el mouse sobre un elemento, presionar una tecla) o pueden ser eventos generados por el propio navegador (por ejemplo, cargar la página, cambiar el tamaño de la ventana).

Para trabajar con eventos en JavaScript, generalmente utilizamos el método `addEventListener` para adjuntar un controlador de eventos a un elemento del DOM. El controlador de eventos es una función que se ejecutará cuando ocurra el evento.

A continuación, te mostraré un ejemplo básico de cómo trabajar con eventos en JavaScript:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Eventos en JavaScript</title>
</head>
<body>
  <button id="myButton">Haz clic aquí</button>

  <script>
    // Obtener una referencia al elemento del botón
    const button = document.getElementById("myButton");

    // Adjuntar un controlador de eventos al botón
    button.addEventListener("click", function() {
      alert("¡Has hecho clic en el botón!");
    });
  </script>
</body>
</html>
```

En este ejemplo, utilizamos JavaScript dentro de la etiqueta `<script>` para trabajar con eventos. Algunas acciones que realizamos son:

- Utilizar `getElementById` para obtener una referencia al elemento del botón.
- Utilizar `addEventListener` para adjuntar un controlador de eventos al botón.
- El controlador de eventos es una función anónima que se ejecutará cuando ocurra el evento de clic en el botón. En este caso, muestra un mensaje emergente utilizando `alert`.

Existen muchos eventos disponibles en JavaScript, como `click`, `mouseenter`, `keydown`, `submit`, entre otros. Puedes consultar la documentación oficial de eventos en JavaScript para obtener más información sobre los diferentes tipos de eventos y cómo utilizarlos.

Recuerda que los eventos son fundamentales para interactuar con los usuarios y responder a sus acciones en el navegador. Al utilizar eventos de manera efectiva, puedes crear interacciones dinámicas y enriquecer la experiencia del usuario en tu sitio web o aplicación.
