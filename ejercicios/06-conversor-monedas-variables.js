// Conversor de monedas haciendo uso de variables

// En esta primera etapa, vamos a definir las tasas de cambio fijas para cada moneda y el monto en dólares que queremos convertir. Luego, vamos a imprimir en la consola el resultado de la conversión.

// Definimos las tasas de cambio fijas
var cop = 4500; // 1 dólar = 4500 pesos colombianos
var clp = 794; // 1 dólar = 794 pesos chilenos
var mxn = 18; // 1 dólar = 18 pesos mexicanos

// Definimos el monto en dólares que queremos convertir
var dolares = 100;

// Calculamos el equivalente en cada moneda
const pesosColombianos = dolares * cop;
const pesosChilenos = dolares * clp
const pesosMexicanos = dolares * mxn ;

// Imprimimos los resultados en la consola
console.log(dolares + " dólares son equivalentes a " + pesosColombianos + " pesos colombianos, " + pesosChilenos + " pesos chilenos y " + pesosMexicanos + " pesos mexicanos.");
