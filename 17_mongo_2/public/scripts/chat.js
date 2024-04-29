const socket = io();

const colors = ["success", "danger", "primary", "warning"];
let user = {
  nickname: "",
  color: colors[Math.floor(Math.random() * 4)],
};
let allMessages = [];

Swal.fire({
  title: "Write your nickname!",
  input: "text",
  allowOutsideClick: false,
  inputValidator: (value) => !value && "PLEASE! Write your nickname!",
}).then((data) => {
  user.nickname = data.value;
  //console.log(nickname);
  document.querySelector("#nickname").innerHTML = `<span class="py-1 fw-bolder text-${user.color}">${user.nickname}</span>`;
  socket.emit("user", user);
});

socket.on("messages", (messages) => {
  allMessages = messages;
  document.querySelector("#allMessages").innerHTML = messages
    .map((each) => each)
    .join("");
});

document.querySelector("#message").addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    const message = `<p class="py-1"><span class="fw-bolder text-${user.color}">${user.nickname}:</span> ${event.target.value}</p>`;
    if (allMessages.length >= 10) {
      allMessages.shift();
    }
    allMessages.push(message);
    socket.emit("all messages", allMessages);
    event.target.value = "";
  }
});
