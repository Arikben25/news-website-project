import {
  titlesFile,
  loadingTitles,
  appendTitlesToDOM,
} from "./files/titles.js";
import {addNews} from "./files/addNews.js"

export function loadingHeader() {
  const header = document.createElement("header");
  const btnHome = document.createElement("button");
  btnHome.textContent = "HOME";
  const btnPost = document.createElement("button");
  btnPost.textContent = "POSTS";
  const btnAddNews = document.createElement("button");
  btnAddNews.textContent = "CREATE";
  const root = document.getElementById("root");
  header.appendChild(btnHome);
  header.appendChild(btnPost);
  header.appendChild(btnAddNews);
  root.appendChild(header);

  btnHome.addEventListener("click", () => {
    initHome();
  });

    btnAddNews.addEventListener("click", () => {
    addNews();
  });
}

initHome();

async function initHome() {
  const root = document.getElementById("root");
  root.innerHTML = ""; 

  loadingHeader();
  titlesFile();
  await loadingTitles();
  await appendTitlesToDOM();
}
