console.log("hola");
alert("hola");

const data = { text: "nueva nota", user_id: "6642ab9d3b5a8346c290a50d" };

let options = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
};

fetch("/api/notes", options)
  .then((res) => res.json())
  .then((res) => console.log(res));
