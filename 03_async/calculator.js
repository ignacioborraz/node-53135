const sumar = (n1, n2) => n1 + n2;
const restar = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;

/* funcion dividir con callback */

/* function dividir(n1, n2, callback) {
  if (n2 !== 0) {
    return callback(null, n1 / n2);
  } else {
    return callback("N2 ES CERO");
  }
}

function calcular(n1, n2, operacionArealizar) {
  const resultadoDeLaOperacion = operacionArealizar(n1, n2, verificarDivision);
  //operacionArealizar va a llamar a la función que se pase como argumento
  //se púede pasar cualquiera de las funciones anteriores (sumar, restar, multiplicar y diviidr)
  return resultadoDeLaOperacion;
} */

function verificarDivision(error, exito) {
  if (error) {
    console.log("OCURRIO UN ERROR");
    console.log("EL ERROR ES: " + error);
    return error;
  } else {
    return exito;
  }
}

const res1 = calcular(10, 20, sumar);
console.log(res1);
const res2 = calcular(10, 20, restar);
console.log(res2);
console.log(calcular(10, 20, multiplicar));

//console.log(10/0);

/* con promesa */
function dividir(n1, n2) {
  return new Promise((resolve, reject) => {
    if (n2 !== 0) {
      return resolve(n1 / n2);
    } else {
      return reject("N2 ES CERO");
    }
  });
}

function calcular(n1, n2, operacionArealizar) {
  const resultadoDeLaOperacion = operacionArealizar(n1, n2);
  //operacionArealizar va a llamar a la función que se pase como argumento
  //se púede pasar cualquiera de las funciones anteriores (sumar, restar, multiplicar y diviidr)
  return resultadoDeLaOperacion;
}

const res3 = calcular(10, 20, dividir);
//console.log(res3);
res3
  .then((respuesta) => console.log(respuesta))
  .catch((err) => console.log(err));

const res4 = calcular(10, 0, dividir);
//console.log(res4);
res4
  .then((respuesta) => console.log(respuesta))
  //.then()
  //.then(res=>res.json())
  //.then(res=>console.log(res))
  .catch((err) => console.log(err));

