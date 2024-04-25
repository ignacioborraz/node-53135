import usersManager from "../data/fs/UsersManager.fs.js";
import { socketServer } from "../../server.js";

let messages = [];

export default async (socket) => {
  console.log("client id: " + socket.id);
  socket.emit("users", await usersManager.read());
  socket.on("register", async (data) => {
    await usersManager.create(data);
    socket.emit("users", await usersManager.read());
  });
  socket.on("user", async (user) => {
    if (messages.length >= 20) {
      messages.shift();
    }
    messages.push(
      `<p class="py-1"><span class="fw-bolder text-${user.color}">${user.nickname}</span> is online</p>`
    );
    socketServer.emit("messages", messages);
  });
  socket.on("all messages", (allMessages) => {
    messages = allMessages;
    socketServer.emit("messages", messages);
  });
};
