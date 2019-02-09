
//select the dom element of the submit button
const create = document.querySelector("#submit");

//select all the articles div (not a nodelist)
const articlesDiv = document.querySelector(".articles");


//submit button event listener. 
create.addEventListener('click', (event) => {

  //selecct the dom elements that represent the input fields 
  const newTitle = document.querySelector("#title");
  const newArticle = document.querySelector("#article");

  //create a new empty div to put our new aritcle into
  const completeArticle = document.createElement("div");

  //give it the article class
  completeArticle.classList.toggle('article');

  //give the empty div our html with added input fields 
  completeArticle.innerHTML = `
  <h2>${newTitle.value}</h2>
  <p class="date">Nov 12th, 2019</p>
  <p>${newArticle.value}</p>
<span class='expandButton'></span>
  `;

  //add the div to the end of all articles div html
  articlesDiv.appendChild(completeArticle)

  //create a new article object with all the functionality of previous articles in Article.jS
  new Article(completeArticle);
})