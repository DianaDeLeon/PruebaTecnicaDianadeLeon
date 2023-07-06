function convertirCadena(cadena) {

  let numeros = cadena.match(/\d+(\.\d+)?/g); //Extraemos solo los valores numéricos
  let operacion = cadena.match(/[\+\-\*\/]/g); //Extraemos solo los sogos que representan una operación

  //Verificar que la cadena ingresada sea correcta
  if((numeros.length+operacion.length)>20){
    return console.log("Cadena contiene mas de 20 caracteres");
  }
  else if (!numeros) {
    //Vefificar que la variable numeros no este vacia
    return console.log("Cadena ingresada no válida");
  } else if (!operacion) {
    //Vefificar que existan operadores
    return console.log("Cadena ingresada no válida");
  } else if (numeros.length - 1 !== operacion.length) {
    //Vefificar que la operacion sea valida si la cantidad de operadores es meor a la de numeros por la diferencia de 1
    return console.log("Cadena ingresada no válida");
  } else {
    resolver(numeros,operacion);
  }
}

function resolver(numeros, operacion) {

  //Operadores Prioritarios
  const operadoresMD = ["*", "/"];
  for (let i = 0; i < operacion.length; i++) {
    if (operadoresMD.includes(operacion[i])) {
      const numero1 = parseFloat(numeros[i]);
      const numero2 = parseFloat(numeros[i + 1]);
      let resultado;

      if (operacion[i] === "*") {
        resultado = numero1 * numero2;
      } else if (operacion[i] === "/") {
        if (numero2 === 0) {
          return "0";
        }
        resultado = numero1 / numero2;
      }

      numeros.splice(i, 2, resultado); // reemplaza los 2 primeros numeros por la variable resultado
      operacion.splice(i, 1); //Elimina el operador que aacabamos de resilver
      i--; //Evaluar a siguiete operador
    }
  }

  //OtrosOperadores

  let resultado = parseFloat(numeros[0]);
  
  for (let i = 0; i < operacion.length; i++) {
    const num = parseFloat(numeros[i + 1]);
    
    if (operacion[i] === '+') {
      resultado += num;
    } else if (operacion[i] === '-') {
      resultado -= num;
    }
  }
  return console.log('El resultado de la operación es: '+resultado);
}


console.log(convertirCadena("4-7+8+9/2*3"));

