
const create = document.querySelector("#submit");
const articlesDiv = document.querySelector(".articles");

create.addEventListener('click', (event) => {

  const newTitle = document.querySelector("#title");
  const newArticle = document.querySelector("#article");

  const completeArticle = document.createElement("div");
  completeArticle.classList.toggle('article');

  completeArticle.innerHTML = `
  <h2>${newTitle.value}</h2>
  <p class="date">Nov 12th, 2019</p>
  <p>${newArticle.value}</p>
<span class='expandButton'></span>
  `
  articlesDiv.appendChild(completeArticle)

  new Article(completeArticle);
})