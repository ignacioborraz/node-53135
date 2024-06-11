function sum() {
  let result = 0;
  for (let i = 0; i < 5e9; i++) {
    result += 1;
  }
  return result;
}

process.on("message", () => {
  const result = sum();
  process.send(result);
});
