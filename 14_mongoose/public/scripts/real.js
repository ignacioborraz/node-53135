const socket = io();
socket.on("users", (data) => {
  //console.log(data)
  const template = data
    .map(
      (each) =>
        ` <img style="width: 50%; height: 50%" src="${each.photo}" class="object-fit-cover" alt="${each.id}"> `
    )
    .reverse()
    .splice(0, 4)
    .join("");
  document.querySelector("#users").innerHTML = template;
});
document.querySelector("#register").addEventListener("click", (event) => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const photo = document.querySelector("#photo").value;
  socket.emit("register", { email, password, photo });
});
