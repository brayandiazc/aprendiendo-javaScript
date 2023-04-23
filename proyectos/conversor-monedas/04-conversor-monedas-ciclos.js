// Conversor de monedas haciendo uso de ciclos

// Definimos las tasas de cambio
var cop = 4500; // 1 dólar = 4500 pesos colombianos
var clp = 794; // 1 dólar = 794 pesos chilenos
var mxn = 18; // 1 dólar = 18 pesos mexicanos

// Obtenemos el valor en dólares a convertir
var dolares = parseFloat(prompt("Ingresa el valor en dólares a convertir:"));

// Definimos una variable para guardar la opción elegida por el usuario
var opcion = 0;

// Ciclo para solicitar una opción válida de conversión
while (opcion < 1 || opcion > 3) {
  opcion = parseInt(prompt("Ingresa la opción de conversión: \n1 - Peso Colombiano \n2 - Peso Chileno \n3 - Peso Mexicano"));
}

// Realizamos la conversión correspondiente
switch (opcion) {
  case 1:
    const pesosColombianos = dolares * cop;
    alert(dolares + " dólares equivalen a " + pesosColombianos.toFixed(2) + " pesos colombianos");
    break;
  case 2:
    const pesosChilenos = dolares * clp;
    alert(dolares + " dólares equivalen a " + pesosChilenos.toFixed(2) + " pesos chilenos");
    break;
  case 3:
    const pesosMexicanos = dolares * mxn;
    alert(dolares + " dólares equivalen a " + pesosMexicanos.toFixed(2) + " pesos mexicanos");
    break;
}
