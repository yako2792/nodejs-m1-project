var gdl_coordinates = [20.6597, -103.3496];

var map = L.map('map').setView(gdl_coordinates, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker(gdl_coordinates).addTo(map)
    .bindPopup('Guadalajara, Jal. Mexico.')
    .openPopup();