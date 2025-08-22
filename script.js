 // Initialize the map
    // Create the map
var map = L.map('map').setView([26.8206, 30.8025], 6);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Green icon for all markers
var greenIcon = L.icon({
  iconUrl: 'img/icon.png', // المسار النسبي للصورة
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});



// List of governorates with recycling station
var recyclingPlaces = [
  { name: "Recycling Hub - Cairo", coords: [30.0444, 31.2357] },
  { name: "Recycling Center - Giza", coords: [30.0131, 31.2089] },
  { name: "Recycling Point - Alexandria", coords: [31.2001, 29.9187] },
  { name: "Recycling Station - Luxor", coords: [25.6872, 32.6396] },
  { name: "Recycling Facility - Aswan", coords: [24.0889, 32.8998] },
  { name: "Recycling Spot - Qena", coords: [26.1551, 32.7160] },
  { name: "Plastic Recycling - Sohag", coords: [26.5597, 31.6954] },
  { name: "Metal Recycling - Assiut", coords: [27.1800, 31.1837] },
  { name: "Paper Recycling - Minya", coords: [28.1099, 30.7503] },
  { name: "Green Center - Beni Suef", coords: [29.0661, 31.0994] },
  { name: "Eco Recycling - Fayoum", coords: [29.3084, 30.8418] },
  { name: "Recycling Hub - Damietta", coords: [31.4165, 31.8133] },
  { name: "Recycling Center - Mansoura", coords: [31.0364, 31.3807] },
  { name: "Plastic Hub - Zagazig", coords: [30.5877, 31.5020] },
  { name: "Green Recycling - Ismailia", coords: [30.5965, 32.2715] },
  { name: "Recycling Point - Suez", coords: [29.9668, 32.5498] },
  { name: "Recycling Station - Port Said", coords: [31.2653, 32.3019] },
  { name: "Eco Facility - Kafr El Sheikh", coords: [31.1117, 30.9397] },
  { name: "Recycling Center - Gharbia", coords: [30.8676, 31.1685] },
  { name: "Plastic Recycling - Monufia", coords: [30.5972, 30.9876] },
  { name: "Recycling Hub - Beheira", coords: [30.8505, 30.3443] },
  { name: "Eco Recycling - Matrouh", coords: [31.3543, 27.2373] },
  { name: "Recycling Station - North Sinai", coords: [30.9686, 33.6176] },
  { name: "Plastic Recycling - South Sinai", coords: [28.2410, 33.6226] },
  { name: "Recycling Point - Red Sea", coords: [27.2579, 33.8116] },
  { name: "Recycling Hub - New Valley", coords: [25.4510, 30.5460] },
  { name: "Eco Center - Helwan", coords: [29.8414, 31.3342] }
];

// Add markers to the map
recyclingPlaces.forEach(function(place) {
  L.marker(place.coords, { icon: greenIcon }).addTo(map)
    .bindPopup("<b style='color: green;'>" + place.name + "</b>");
});