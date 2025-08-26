import { loadingHeader } from "../main.js";

export function openStory(item) {
  let root = document.getElementById("root");
  root.innerHTML = "";
  loadingHeader();
  const div = document.createElement("div");
  div.classList = "oneStory";

  const title = document.createElement("h2");
  title.textContent = item.title;

  const img = document.createElement("img");
  img.src = item.urlToImage;
  img.alt = "img";

  const description = document.createElement("p");
  description.textContent = item.description;

  const content = document.createElement("p");
  content.textContent = item.content;

  const author = document.createElement("p");
  author.textContent = item.author;

  div.appendChild(title);
  div.appendChild(img);
  div.appendChild(description);
  div.appendChild(content)
  div.appendChild(author);
  
  root.appendChild(div);
}
