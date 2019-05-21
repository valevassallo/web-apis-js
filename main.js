const URL = "https://ghibliapi.herokuapp.com/films";
const filmsList = document.getElementById("films");
async function getData() {
  await fetch(URL)
    .then(response => response.json())
    .then(films => {
      return films.map(film => {
        let li = document.createElement("li"),
          h2 = document.createElement("h2"),
          p = document.createElement("p");

        h2.innerHTML = `${film.title}`;
        p.innerHTML = `${film.description}`;
        li.appendChild(h2);
        li.appendChild(p);
        filmsList.appendChild(li);
      });
    });
}

getData();
