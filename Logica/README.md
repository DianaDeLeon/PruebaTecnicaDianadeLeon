### Calculadora de Operaciones Básicas
Este codigo consiste en calculadora de operaciones básicas que resuelve operaciones básicas dadas en una cadena.

## Como funciona: 
- Escribimos la cadena de caracteres y la enviamos a la función de convertir cadena.

- En esta función, lo primero que hacemos es mediante el metodo match(), obtenemos los valores numéricos y los operadores en 2 variables distintas.

- Hacemos las verificaciones necesarias para saer que la cadena ingresada es correcta, que las variables numeros y operacion no sean vacias, que el número mde caracteres sea menor a 20 y que la cantidad de operadores sea menor al de numeros por la diferencia de 1.

- Esta función consiste en un ciclo for que recorre según el la cantidad de operadores ingresados, promero verifica si los operadores son prioritarios (+,/), cuando encuentra un operador prioritario asigna el numero que esta antes y el que esta después del signo a nuevas variables para proceder con la operación.

#### El funcionamiento podra ser visto mediante consola.