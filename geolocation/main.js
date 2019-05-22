const watchID = navigator.geolocation.watchPosition(position => {
  console.log(position.coords.latitude, position.coords.longitude);
  renderElements(position.coords.latitude, position.coords.longitude);
});

function renderElements(latitude, longitude) {
  let $latitudeP = document.getElementById("latitude-pos"),
    $longitudeP = document.getElementById("longitude-pos");

  $latitudeP.innerHTML = `${latitude}`;
  $longitudeP.innerHTML = `${longitude}`;
}
