import { NEWSAPI_API } from "../env.js";
import {openStory} from "./posts.js"
const API = NEWSAPI_API;

export function titlesFile() {
  const titles = document.createElement("section");
  titles.id = "sectionTitles";
  const root = document.getElementById("root");
  root.appendChild(titles);
}

export async function loadingTitles() {
  let res;
  try {
    const local = localStorage.getItem("news");
    if (local) {
      return JSON.parse(local);
    } else if (!local) {
      const data = await fetch(
        `https://newsapi.org/v2/everything?q=news&sortBy=popularity&apiKey=${API}`
      );
      res = await data.json();
      console.log(res);
    }
  } catch (e) {
    console.log(e);
  }
  localStorage.setItem("news", JSON.stringify(res));
  return res;
}

export async function appendTitlesToDOM() {
  const resArray = await loadingTitles();
  const titlesArray = resArray.articles;
  const titles = document.getElementById("sectionTitles");

  titlesArray.forEach((item, i) => {
    const div = document.createElement("div");
    div.id = "item" + i;
    div.classList = "item";
    div.addEventListener("click",(e)=>{
        openStory(item)
        e.preventDefault()
    })

    const img = document.createElement("img");
    img.src = item.urlToImage;
    img.alt = "img";

    const title = document.createElement("h2");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    const author = document.createElement("p");
    author.textContent = item.author;

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(author);

    titles.appendChild(div);
  });
}