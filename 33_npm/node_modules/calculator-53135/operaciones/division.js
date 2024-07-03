const division = (n1, n2) => {
  if (n2 === 0) {
    throw Error("No se puede dividir por cero");
  }
  return n1 / n2;
};

export default division;
