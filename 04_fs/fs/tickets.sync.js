const fs = require("fs");

const path = "./04_fs/tickets.json";

if (!fs.existsSync(path)) {
  const array = JSON.stringify([]);
  fs.writeFileSync(path, array);
}

const movies = JSON.parse(fs.readFileSync(path,"utf-8"))
console.log(movies);
const movie1 = { title: "hp1", place: "hoyts" };
movies.push(movie1)
const moviesString = JSON.stringify(movies);
fs.writeFileSync(path, moviesString);

//fs.unlinkSync(path)