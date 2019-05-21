const URL = "https://ghibliapi.herokuapp.com/films";
const filmsList = document.getElementById("films");

const storage = localStorage.getItem("storedFilms");

async function getData() {
  await fetch(URL)
    .then(response => response.json())
    .then(films => {
      if (storage != null) {
        let newValues = getUniqueList(JSON.parse(storage), films);
        films.push(...newValues);
        // THIS IS TO TRY IF THE DATA GETS UPDATED
        // newValues = [
        //   {
        //     id: "zzzztracosa",
        //     title: "sdfasdfasdfasdfsdf in the Sky",
        //     description: "ASDFADSFASDFASDFSDFAS"
        //   }
        // ];
        showDom(newValues);
      }
      showDom(films);
      localStorage.setItem("storedFilms", JSON.stringify(films));
    });
}

function showDom(elements) {
  return elements.map(film => {
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

function getUniqueList(arrayOld, arrayFetch) {
  var diff = arrayFetch.filter(function(elementFetch) {
    return !arrayOld.some(function(elementOld) {
      return elementFetch.id === elementOld.id;
    });
  });
  return diff;
}

getData();
