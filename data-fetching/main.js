const URL = "https://ghibliapi.herokuapp.com/films";
const filmsList = document.getElementById("films");
async function getData() {
  await fetch(URL)
    .then(response => response.json())
    .then(films => {
      return films.map(film => {
        showDom(film);
      });
    });
}

function showDom(element) {
  let li = document.createElement("li"),
    h2 = document.createElement("h2"),
    p = document.createElement("p");

  h2.innerHTML = `${element.title}`;
  p.innerHTML = `${element.description}`;
  li.appendChild(h2);
  li.appendChild(p);
  filmsList.appendChild(li);
}

getData();
