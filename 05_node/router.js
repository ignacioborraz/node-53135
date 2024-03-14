const NotesManager = require("./data/fs/NotesManager.js");
const UsersManager = require("./data/fs/UsersManager.js");
const notes = new NotesManager();
const users = new UsersManager();

async function router(req, res) {
  const url = req.url;
  console.log(url);
  const options = { "Content-Type": "text/plain" };
  switch (url) {
    case "/":
      res.writeHead(200, options).end("API CONECTADA");
      break;
    case "/api/notes":
      const allNotes = await notes.read();
      res.writeHead(200, options).end(JSON.stringify(allNotes));
      break;
    case "/users":
      const allUsers = await users.read();
      res.writeHead(200, options).end(JSON.stringify(allUsers));
      break;
    default:
      res.writeHead(404, options).end("RUTA NO ENCONTRADA");
      break;
  }
}

module.exports = router;
