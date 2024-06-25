//nums es un array de numeros
//...nums son los numeritos sin los corchetes
const suma = (...nums) => {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.some((num) => typeof num !== "number")) {
    return null;
  }
  return nums.reduce((acc, val) => acc + val);
};

let contadorPruebasOk = 0;
let contadorTotal = 0;

function test1() {
  contadorTotal++;
  console.log("TEST 1: Devuelve null si algún parámetro no es numérico");
  const test = suma("2", 2);
  if (test === null) {
    console.log("TEST 1: OK!");
    contadorPruebasOk++;
  } else {
    console.log("TEST 1: FALLO!");
  }
}
test1();

function test2() {
  contadorTotal++;
  console.log("TEST 2: Devuelve 0 si no recibe parámetros");
  const test = suma();
  if (test === 0) {
    console.log("TEST 2: OK!");
    contadorPruebasOk++;
  } else {
    console.log("TEST 2: FALLO!");
  }
}
test2();

function test3() {
  contadorTotal++;
  console.log("TEST 3: Devuelve correctamente la suma de dos numeros");
  const test = suma(5, 7);
  if (test === 12) {
    console.log("TEST 3: OK!");
    contadorPruebasOk++;
  } else {
    console.log("TEST 3: FALLO!");
  }
}
test3();

function test4() {
  contadorTotal++;
  console.log(
    "TEST 4: Devuelve correctamente la suma de cuaquier cantidad de numeros"
  );
  const test = suma(5, 7, 1, 10);
  if (test === 23) {
    console.log("TEST 4: OK!");
    contadorPruebasOk++;
  } else {
    console.log("TEST 4: FALLO!");
  }
}
test4();

console.log("PRUEBAS OK: " + contadorPruebasOk + "/" + contadorTotal);
