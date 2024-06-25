import options from "./data/layoutOptions.js";

import {
  hideSearch,
  printNavBar,
  printFooter,
  printIcons,
} from "./modules/printLayout.js";

hideSearch();
printIcons();
printNavBar(options, "navbar");
printFooter(options, "footer");

document.querySelector("#verified").addEventListener("click", async () => {
  const data = {
    email: document.querySelector("#email").value,
    code: document.querySelector("#code").value,
  };
  console.log(data);
  const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  let response = await fetch("/api/auth/verify", opts);
  response = await response.json();
  console.log(response);
  if (response.statusCode === 200) {
    //console.log(response.token);
    //localStorage.setItem("token", response.token);
    //return location.replace("/");
  } else {
    return Swal.fire({
      title: response.message,
      icon: "error",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#ff3b3c",
    });
  }
});
