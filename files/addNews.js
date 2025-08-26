import {loadingHeader} from "../main.js"

export function addNews() {
  let root = document.getElementById("root");
  root.innerHTML = "";
  loadingHeader();

  const card = document.createElement("id")
  card.id = "card"

  root.appendChild(card)
}

//author
//img
//discrption
//contenr
//title