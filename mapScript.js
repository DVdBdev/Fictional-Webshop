const latitude = 51.230225314312875;
const longitude = 4.416132499022107;
const coordinates = [latitude, longitude];
var map = L.map("map").setView(coordinates, 15);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
var logo = L.icon({
  iconUrl: "images/logo.png",

  iconSize: [50, 50],
  iconAnchor: [0, 0],
  popupAnchor: [-3, -76],
});
L.marker(coordinates, { icon: logo }).addTo(map);
