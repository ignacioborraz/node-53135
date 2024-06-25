process.on("exit", (code) => {
  console.log("Justo antes de cerrarse");
  console.log(code);
});
process.on("uncaughtException", (exc) => {
  console.log("Excepction no catcheada");
  console.log(exc);
});
process.on("message", (message) => {
  console.log("Cuando reciba mensaje de otro proceso");
  console.log(message);
});
console();
process.exit();
