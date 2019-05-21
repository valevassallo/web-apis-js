const URL = "https://ghibliapi.herokuapp.com/films";
const filmsList = document.getElementById("films");

async function getData() {
  await fetch(URL)
    .then(response => response.json())
    .then(films => {
      showDom(films);
      localStorage.setItem("storedFilms", JSON.stringify(films));
    });
}

function showDom(element) {
  return element.map(film => {
    let li = document.createElement("li"),
      h2 = document.createElement("h2"),
      p = document.createElement("p");

    h2.innerHTML = `${film.title}`;
    p.innerHTML = `${film.description}`;
    li.appendChild(h2);
    li.appendChild(p);
    filmsList.appendChild(li);
  });
}

const storage = localStorage.getItem("storedFilms");

if (storage != null) {
  let parsedFilms = JSON.parse(storage);
  showDom(parsedFilms);
}

getData();
